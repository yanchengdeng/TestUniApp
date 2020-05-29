package deng.yc.testuniapp1

import android.Manifest
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.os.Environment
import android.util.Log
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.blankj.utilcode.util.AppUtils
import com.tbruyelle.rxpermissions2.RxPermissions
import deng.yc.testuniapp1.download.DownloadListener
import deng.yc.testuniapp1.download.FileDownloader
import deng.yc.testuniapp1.ui.login.LoginActivity
import io.dcloud.feature.sdk.DCUniMPSDK
import kotlinx.android.synthetic.main.activity_main.*
import java.io.File


class MainActivity : AppCompatActivity() {
    var fileDownloader = FileDownloader(MainActivity@this)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        initDownLoad()


      var uniappBasePath =   DCUniMPSDK.getInstance().getAppBasePath(this)


        /**
         * js  方法2 ：监听回调
         */
        DCUniMPSDK.getInstance().setOnUniMPEventCallBack { event, data, callback ->
            Log.d("cs", "onUniMPEventReceive    event=$event")
            //回传数据给小程序
//            callback.invoke("fsdf")
            //app 发送消息给小程序
            var   appid = DCUniMPSDK.getInstance().runingAppid
            Log.w("dyc",appid)
                DCUniMPSDK.getInstance().sendUniMPEvent("sendMsg", "告知${ DCUniMPSDK.getInstance().runingAppid} 宿主app 已经支付成功")
//            try {
//                startActivity(Intent(this@MainActivity, LoginActivity::class.java))
//            }catch (e : java.lang.Exception){
//                Log.e("dyc",e.message)
//            }
        }

        /**
         * /data/user/0/deng.yc.testuniapp1/files/apps/__UNI__04E3A11/www/__UNI__04E3A11.wgt
         *
         * 自释放wgt包集成uni小程序

        宿主通过zip解压wgt包资源。主动释放到uni小程序运行路径下。需要自创建文件应用的APPID/www/的目录

        路径格式 : "uni小程序运行路径/应用的APPID/www/wgt包中的资源"
         * "/xxx/xxx/宿主包名/files/apps/__UNI__04E3A11/www/__UNI__04E3A11.wgt包中的资源"

         */
        Log.d("file  basePath ",uniappBasePath)

        //组件模块
        modle.setOnClickListener {
            try {
                DCUniMPSDK.getInstance()
                    .startApp(this@MainActivity, "__UNI__04E3A11")
            } catch (e: java.lang.Exception) {
                e.printStackTrace()
            }
        }


        //新闻模块
        news.setOnClickListener {
            try {
                DCUniMPSDK.getInstance()
                    .startApp(this@MainActivity, "__UNI__148D6F3")
            } catch (e: java.lang.Exception) {
                e.printStackTrace()
            }
        }


        /**
         * app  直接操作 热更新
         */
        open_clout_wgt.setOnClickListener {

            RxPermissions(this).request(Manifest.permission.WRITE_EXTERNAL_STORAGE)
                .subscribe { isGrand ->
                    if (isGrand) {
                         //wgt 名称
                        var wgtName = "__UNI__6B2D507"
                        //wgt  下载路径
                        val downLoadPath = DCUniMPSDK.getInstance().getAppBasePath(this)  +wgtName + "/www/"
                        //wgt 下载后的绝对路径地址
                        var wgtAbsolutePath = "${Environment.getExternalStorageDirectory().path}${downLoadPath}/${wgtName}.wgt"

                        if (File(wgtAbsolutePath).exists()){
                            openWgt(wgtAbsolutePath,wgtName)
                        }else{
                            fileDownloader.doowloadUniApp(wgtName,
                                "https://file.zgxyzx.net/${wgtName}.wgt")
                        }
                    } else {
                        Toast.makeText(this, "请打开存储权限", Toast.LENGTH_SHORT).show()
                    }
                }
        }

        //小程序 发送消息给 app
        js_callback.setOnClickListener {
            try {
                DCUniMPSDK.getInstance()
                    .startApp(this@MainActivity, "__UNI__87CCF0A")
            } catch (e: java.lang.Exception) {
                e.printStackTrace()
            }
        }

        // 颜色组件
        colorsUI.setOnClickListener {
            try {
                DCUniMPSDK.getInstance()
                    .startApp(this@MainActivity, "__UNI__6B2D507")
            } catch (e: java.lang.Exception) {
                e.printStackTrace()
            }
        }


        //直接打开 wgt

        open_wgt.setOnClickListener {
            //D:\third-app\uniapp\app\src\main\assets
            val wgtName = "__UNI__6B2D507"
            var wgtPath = "/storage/emulated/0/data/user/0/${AppUtils.getAppPackageName()}/files/apps/${wgtName}/www/${wgtName}.wgt"
            DCUniMPSDK.getInstance().releaseWgtToRunPathFromePath(
                wgtPath
            ) { code, pArgs ->
                if (code == 1) { //释放wgt完成
                    try {
                        DCUniMPSDK.getInstance().startApp(this@MainActivity, wgtName)
                    } catch (e: java.lang.Exception) {
                        e.printStackTrace()
                        Toast.makeText(this@MainActivity, "资源释放失败:${pArgs}", Toast.LENGTH_LONG).show()
                    }
                } else { //释放wgt失败
                    Toast.makeText(this@MainActivity, "资源释放失败", Toast.LENGTH_SHORT).show()
                }
                null
            }
        }

        /***
         * 胶囊按钮回调监听
         */
        DCUniMPSDK.getInstance().setDefMenuButtonClickCallBack { id, p1 ->
            runOnUiThread {

//                DCUniMPSDK.getInstance().sendUniMPEvent("sendMsg", "告知${ DCUniMPSDK.getInstance().runingAppid} 宿主app 已经支付成功")
//                Toast.makeText(this@MainActivity, "id==$id  , 关键id :  = $p1", Toast.LENGTH_SHORT)
//                    .show()

                startActivity(Intent(this@MainActivity,LoginActivity::class.java))
            }
        }
    }

    private fun initDownLoad() {

        fileDownloader.setDownloadListener(object : DownloadListener {
            override fun onDownloadCompleted(uri: Uri) {
                fileDownloader.unRegisterDownloadCompleteReceiver()
                if (uri == null)
                    return

                Log.w("file Completed",uri.path)
            }

            override fun onDownloadProgress(
                downloadedBytes: Int,
                totalBytes: Int,
                downStatus: Int
            ) {
                Log.w("file  downloading ","${downloadedBytes}----${totalBytes}")
            }
        })
    }


    private   fun openWgt(wgtFileAbsolutePath : String , wgtName :String) {
        DCUniMPSDK.getInstance().releaseWgtToRunPathFromePath(
            wgtFileAbsolutePath
        ) { code, pArgs ->
            if (code == 1) { //释放wgt完成
                try {
                    DCUniMPSDK.getInstance().startApp(this@MainActivity, wgtName)
                } catch (e: Exception) {
                    e.printStackTrace()
                }
            } else { //释放wgt失败
                Toast.makeText(this@MainActivity, "资源释放失败: ${pArgs}", Toast.LENGTH_SHORT).show()
            }
            null
        }
    }




}
