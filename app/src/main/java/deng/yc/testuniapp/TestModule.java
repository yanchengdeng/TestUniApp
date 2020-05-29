package deng.yc.testuniapp;

import android.content.Intent;
import android.util.Log;

import com.alibaba.fastjson.JSONObject;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import deng.yc.testuniapp.ui.login.LoginActivityKt;


public class TestModule extends WXModule {

    String TAG = "TestModule";

    //run ui thread
    @JSMethod(uiThread = true)
    public void testAsyncFunc(JSONObject options, JSCallback callback) {
        Log.e(TAG, "testAsyncFunc--"+options);
        if(callback != null) {
            JSONObject data = new JSONObject();
            data.put("code", "success");
            callback.invoke(data);
            //callback.invokeAndKeepAlive(data);
        }
    }

    //run JS thread
    @JSMethod(uiThread = false)
    public JSONObject testSyncFunc(){
        JSONObject data = new JSONObject();
        data.put("code", "success");
        return data;
    }

    @JSMethod(uiThread = true)
    public void testEvent(){
        if(mWXSDKInstance != null) {
            Intent intent = new Intent(mWXSDKInstance.getContext(), LoginActivityKt.class);
            mWXSDKInstance.getContext().startActivity(intent);
        }
    }
}
