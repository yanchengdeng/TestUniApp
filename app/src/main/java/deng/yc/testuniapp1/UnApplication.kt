package deng.yc.testuniapp1


import android.app.Application
import android.util.Log
import android.widget.Toast
import com.blankj.utilcode.util.ToastUtils
import com.taobao.weex.WXSDKEngine
import com.taobao.weex.common.WXException
import io.dcloud.feature.sdk.DCSDKInitConfig
import io.dcloud.feature.sdk.DCUniMPSDK
import io.dcloud.feature.sdk.MenuActionSheetItem
import io.reactivex.plugins.RxJavaPlugins
import java.util.*


/**
 *@Author : yancheng
 *@Date : 2020/5/27
 *@Time : 16:34
 *@Describe ：
 **/
class UnApplication  : Application(){


    override fun onCreate() {
        super.onCreate()


        /**
         *
         * js  方法1：构建模块命名空间
         */
        try {

            WXSDKEngine.registerModule("TestModule", TestModule::class.java)
        } catch (e: WXException) {
            e.printStackTrace()
        }

        /**
         *  关闭当前小程序方法： DCUniMPSDK.getInstance().closeCurrentApp()
         */

//
        /** 右上角×  可以触发该事件
         * 而 DCUniMPSDK.getInstance().closeCurrentApp()   只是关闭小程序 不会调用该回调
         * 关闭当前小程序
         */
        DCUniMPSDK.getInstance().setUniMPOnCloseCallBack {
                appid ->
            ToastUtils.showShort("$appid  被关闭了")
        }


        //关键id  -->py
        val item = MenuActionSheetItem("关于", "gy")
        val sheetItems: MutableList<MenuActionSheetItem> =
            ArrayList()
        sheetItems.add(item)
        var config = DCSDKInitConfig.Builder()
            .setCapsule(true)
            .setMenuDefFontSize("16px")
            .setMenuDefFontColor("#ff00ff")
            .setMenuDefFontWeight("normal")
            .setMenuActionSheetItems(sheetItems)
            .build()
        DCUniMPSDK.getInstance().initialize(
            this, config
        ) { b -> Toast.makeText(this,"初始化uniapp成功 : $b",Toast.LENGTH_SHORT).show() }


        RxJavaPlugins.setErrorHandler {
            //异常处理

            Log.d("file  application异常",it.message)
        }


    }

    override fun onTerminate() {
        super.onTerminate()
    }
}