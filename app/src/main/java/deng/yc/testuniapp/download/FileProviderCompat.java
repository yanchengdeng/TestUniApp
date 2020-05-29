package deng.yc.testuniapp.download;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;

import androidx.core.content.FileProvider;

import java.io.File;

public class FileProviderCompat {

    /**
     * Get uri for file.
     * <br>System provides {@link androidx.core.content.FileProvider} to find uri of file for security since android {@link Build.VERSION_CODES#N}.
     *
     * @param context context
     * @param file    file
     * @return uri
     */
    public static Uri getUriForFile(Context context, File file) {
        Uri fileUri = null;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            fileUri = getUriForFile24(context, file);
        } else {
            fileUri = Uri.fromFile(file);
        }
        return fileUri;
    }

    public static Uri getUriForFile24(Context context, File file) {
        return FileProvider.getUriForFile(context,
                context.getPackageName() + ".fileProvider",
                file);
    }


    public static void setDataAndType(Intent intent, Uri uri, String type, boolean writeAble) {
        intent.setDataAndType(uri, type);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            if (writeAble) {
                intent.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
            }
        }
    }
}