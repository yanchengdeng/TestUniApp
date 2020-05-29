package deng.yc.testuniapp1.download;

import android.app.Activity;
import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.text.TextUtils;
import android.util.Log;

import androidx.annotation.NonNull;

import java.io.File;
import java.io.IOException;

import io.dcloud.feature.sdk.DCUniMPSDK;

public final class FileDownloader {

    private Context context;
    private DownloadListener downloadListener;
    private BroadcastReceiver downloadReceiver;
    private boolean isRegisterDownloadReceiver;

    public FileDownloader(@NonNull Context context) {
        this.context = context;
    }

    public void setDownloadListener(DownloadListener DownloadListener) {
        this.downloadListener = DownloadListener;
    }

    /**
     * 注册下载完成监听
     */
    public void registerDownloadCompleteReceiver() {
        if (isRegisterDownloadReceiver)
            return;

        if (downloadReceiver == null)
            downloadReceiver = new BroadcastReceiver() {
                @Override
                public void onReceive(Context context, Intent intent) {
                    if (DownloadManager.ACTION_DOWNLOAD_COMPLETE.equals(intent.getAction())) {
                        long downloadId = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1);
                        findDownloadFileUri(downloadId);
                    } else if (DownloadManager.ACTION_NOTIFICATION_CLICKED.equals(intent.getAction())) {
                        context.startActivity(new Intent(DownloadManager.ACTION_VIEW_DOWNLOADS));
                    }
                }
            };
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction(DownloadManager.ACTION_DOWNLOAD_COMPLETE);
        intentFilter.addAction(DownloadManager.ACTION_NOTIFICATION_CLICKED);
        context.registerReceiver(downloadReceiver, intentFilter);
        isRegisterDownloadReceiver = true;
    }

    /**
     * 注销下载完成监听
     */
    public void unRegisterDownloadCompleteReceiver() {
        if (downloadReceiver != null && isRegisterDownloadReceiver) {
            context.unregisterReceiver(downloadReceiver);
            downloadReceiver = null;
            isRegisterDownloadReceiver = false;
        }
    }

    /**
     * Download file.
     * <br>If {@link DownloadEntity#} is null, it will be downloaded into specific folder.
     * <br>The specific path is: {@code request.setDestinationInExternalFilesDir(this, Environment.DIRECTORY_DOWNLOADS, subPath);}.
     * <br>see {@link DownloadManager.Request#setDestinationInExternalFilesDir(Context, String, String)}
     *
     * @param downloadEntity download config entity
     * @return download id
     */
    public long downloadFile(DownloadEntity downloadEntity) {
        String url = downloadEntity.getUrl();
        if (TextUtils.isEmpty(url))
            return -1;

        Uri uri = Uri.parse(url);
        String subPath = downloadEntity.getSubPath();
        if (subPath == null || subPath.trim().length() == 0) {
            subPath = uri.getLastPathSegment();
        }

        File destinationDirectory = downloadEntity.getDestinationDirectory();
        if (destinationDirectory == null) {
            destinationDirectory = context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
        }

        File file = new File(destinationDirectory, subPath);
        File directory = file.getParentFile();
        if (!directory.exists()) {//创建文件保存目录
            directory.mkdirs();
        }

        if (file.exists()) {
            try {
                file.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        DownloadManager.Request request = new DownloadManager.Request(uri);
        //设置title
        request.setTitle(downloadEntity.getTitle());
        // 设置描述
        request.setDescription(downloadEntity.getDesc());
        // 完成后显示通知栏
        request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
        //
        Uri destinationUri = Uri.withAppendedPath(Uri.fromFile(destinationDirectory), subPath);
//        Uri destinationUri = FileProviderCompat.getUriForFile(this, file);
        request.setDestinationUri(destinationUri);
//        request.setDestinationInExternalFilesDir(this, Environment.DIRECTORY_DOWNLOADS, subPath);
        request.setMimeType(downloadEntity.getMimeType());
        request.setVisibleInDownloadsUi(true);

        DownloadManager mDownloadManager = (DownloadManager) context.getSystemService(Context.DOWNLOAD_SERVICE);
        return mDownloadManager == null ? -1 : mDownloadManager.enqueue(request);
    }

    public long downloadUniApp(DownloadEntity downloadEntity) {


        String apkUrl = downloadEntity.getUrl();
        Uri resource = Uri.parse(apkUrl);

        DownloadManager.Request request = new DownloadManager.Request(resource);
//下载的本地路径，表示设置下载地址为SD卡的Download文件夹，文件名为mobileqq_android.apk。
        request.setDestinationInExternalPublicDir(downloadEntity.getSubPath(), downloadEntity.getTitle());

//start 一些非必要的设置
        request.setAllowedNetworkTypes(DownloadManager.Request.NETWORK_MOBILE | DownloadManager.Request.NETWORK_WIFI);
        request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
        request.setVisibleInDownloadsUi(true);
        request.setTitle(downloadEntity.getTitle());
//end 一些非必要的设置
        DownloadManager mDownloadManager = (DownloadManager) context.getSystemService(Context.DOWNLOAD_SERVICE);
        return mDownloadManager == null ? -1 : mDownloadManager.enqueue(request);
    }

    /**
     * @param downLoadId download id
     */
    public void progress(long downLoadId) {
        DownloadManager downloadManager = (DownloadManager) context.getSystemService(Context.DOWNLOAD_SERVICE);
        DownloadManager.Query query = new DownloadManager.Query().setFilterById(downLoadId);
        Cursor c = null;
        int downloadedBytes = 0;
        int totalBytes = 0;
        int downStatus = 0;
        try {
            assert downloadManager != null;
            c = downloadManager.query(query);
            if (c != null && c.moveToFirst()) {
                //已经下载的字节数
                downloadedBytes = c.getInt(c.getColumnIndexOrThrow(DownloadManager.COLUMN_BYTES_DOWNLOADED_SO_FAR));
                //总需下载的字节数
                totalBytes = c.getInt(c.getColumnIndexOrThrow(DownloadManager.COLUMN_TOTAL_SIZE_BYTES));
                //状态所在的列索引
                downStatus = c.getInt(c.getColumnIndex(DownloadManager.COLUMN_STATUS));
            }
        } finally {
            if (c != null) {
                c.close();
            }
        }

        if (downloadListener != null)
            downloadListener.onDownloadProgress(downloadedBytes, totalBytes, downStatus);
    }

    /**
     * Get uri by download id.
     *
     * @param completeDownLoadId download id
     */
    public void findDownloadFileUri(long completeDownLoadId) {
        Uri uri;
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            // 6.0以下
            DownloadManager downloadManager = (DownloadManager) context.getSystemService(Context.DOWNLOAD_SERVICE);
            assert downloadManager != null;
            uri = downloadManager.getUriForDownloadedFile(completeDownLoadId);
        } else {
            File file = queryDownloadedFile(completeDownLoadId);
            uri = FileProviderCompat.getUriForFile(context, file);
        }

        if (downloadListener != null)
            downloadListener.onDownloadCompleted(uri);
    }

    public File queryDownloadedFile(long downloadId) {
        File targetFile = null;
        DownloadManager downloadManager = (DownloadManager) context.getSystemService(Context.DOWNLOAD_SERVICE);
        if (downloadId != -1) {
            DownloadManager.Query query = new DownloadManager.Query();
            query.setFilterById(downloadId);
            query.setFilterByStatus(DownloadManager.STATUS_SUCCESSFUL);
            assert downloadManager != null;
            Cursor cur = downloadManager.query(query);
            if (cur != null) {
                if (cur.moveToFirst()) {
                    String uriString = cur.getString(cur.getColumnIndex(DownloadManager.COLUMN_LOCAL_URI));
                    if (!TextUtils.isEmpty(uriString)) {
                        targetFile = new File(Uri.parse(uriString).getPath());
                    }
                }
                cur.close();
            }
        }
        return targetFile;
    }

    /**
     * Install application.
     * @param  activity
     * @param uri apk uri
     */
    public final void installApk(Activity activity, Uri uri) {
        Intent intentInstall = new Intent();
        intentInstall.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intentInstall.setAction(Intent.ACTION_VIEW);
        FileProviderCompat.setDataAndType(intentInstall, uri, "application/vnd.android.package-archive", true);
        if (activity!=null) {
            activity.startActivity(intentInstall);
        }
    }


    public  void doowloadApk(String apkName, String url){

        DownloadEntity entity = new DownloadEntity();
        entity.setUrl(url);
        entity.setDestinationDirectory(new File(Environment.getExternalStorageDirectory(), Environment.DIRECTORY_DOWNLOADS));
        entity.setSubPath("downloadList/"+ apkName + ".apk");
        entity.setTitle(apkName + ".apk");
        entity.setDesc("apk");
        entity.setMimeType("application/vnd.android.package-archive");
        downloadFile(entity);
    }

    public  void doowloadUniApp(String name, String url){
        String uniappBasePath =   DCUniMPSDK.getInstance().getAppBasePath(context);
        DownloadEntity entity = new DownloadEntity();
        entity.setUrl(url);
        entity.setSubPath(uniappBasePath+name+"/www/");
        entity.setTitle(name + ".wgt");
        entity.setDesc("wgt");
//        Log.w("file  entity1 ",entity.getDestinationDirectory().getAbsolutePath());
//        Log.w("file  entity2 ",entity.getDestinationDirectory().getPath());
//        Log.w("file  entity3 ",entity.getSubPath());
        downloadUniApp(entity);
    }


}