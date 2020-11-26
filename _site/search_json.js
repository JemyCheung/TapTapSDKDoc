window.ydoc_plugin_search_json = {
  "XDSDK": [
    {
      "title": "TapTap SDK documents",
      "content": "快速开始\n\nAndroid\niOS\n\n\n初始化\n登录\n\n微信登录\nTapTap登陆\nQQ登录\n心动登录\n苹果登录\n登录状态\n退出登录\n\n\n角色\n用户中心\n支付\n游客升级\n退出\n微信分享\n实名认证\n游客绑定\n客服\nTapDB\nTapTap论坛\nXDLive直播\n防沉迷\n协议页面\n",
      "url": "/tdsdk/index.html",
      "children": []
    },
    {
      "title": "准备工作",
      "content": "",
      "url": "/tdsdk/xdquickstart.html",
      "children": [
        {
          "title": "导包",
          "url": "/tdsdk/xdquickstart.html#导包",
          "content": "导包打开/xd-sdk-4/sdk/unity/vx.x.x，拖拽unitypackage到Plugins目录\n全部选择，点击import\n导入后，将 Plugins/script 下面的 XDSDKListener.cs 脚本文件拖动到长生命周期的对象中进行脚本挂接\n您可以参考快速开始demo至此，已经将XDSDk导入自己的工程\n"
        },
        {
          "title": "简单实现TapTap登陆功能",
          "url": "/tdsdk/xdquickstart.html#简单实现taptap登陆功能",
          "content": "简单实现TapTap登陆功能"
        },
        {
          "title": "步骤",
          "url": "/tdsdk/xdquickstart.html#简单实现taptap登陆功能-步骤",
          "content": "步骤实现登录脚本平台判断\n初始化 XDSDK.InitSDK\n设置回调监听 XDSDK.SetCallback\n登录 XDSDK.Login\npublic class LoginMain : MonoBehaviour{\nvoid Start()\n{\n        Debug.Log(\"start init\");\n        //平台判断 并 初始化\n        if (Platform.isAndroid()) {\n                XDSDK.InitSDK(\"xxxx\", 1, \"\", \"\", false);//初始化\n        } else if (Platform.isIOS()) {\n                XDSDK.InitSDK(\"xxxx\", 1, \"\", \"\", false);\n        }\n        //设置回调监听\n        XDSDK.SetCallback(new MYXDCallback());\n}\n\nvoid OnMouseUp() {\n\t//登陆\n        XDSDK.Login();\n}\n\n//自定义MYXDCallback继承XDCallback，实现监听方法\npublic class MYXDCallback : XDCallback\n{\npublic override void OnLoginSucceed(string token)\n{\n        Debug.Log(\"OnLoginSucceed\");\n        TDSAchievement.TDSAchievement.initWithXD(\"202812\", token);\n        SceneManager.LoadScene(\"StartScene\");\n}\npublic override void OnLoginCanceled()\n{\n        Debug.Log(\"OnLoginCanceled\");\n}\npublic override void OnLoginFailed(string msg)\n{\n        Debug.Log(\"OnLoginFailed\");\n}\n...\n}\n}\n"
        },
        {
          "title": "注意事项",
          "url": "/tdsdk/xdquickstart.html#注意事项",
          "content": "注意事项XDCallback方法需要全部实现，建议copy demo，否则会报错\nInitSDK的appid确认是从开发者后台正确获取\n注意XDSDKListener.cs的挂载\n"
        }
      ]
    },
    {
      "title": "Android配置快速开始",
      "content": "",
      "url": "/tdsdk/android.html",
      "children": [
        {
          "title": "1. 按需要修改AndroidManifest",
          "url": "/tdsdk/android.html#1.-按需要修改androidmanifest",
          "content": "1. 按需要修改AndroidManifest可以根据需要,参照如下示例修改Plugins/Android/AndroidManifest.xml。\n    \n\n \t\n\n    \n    \n    \n    \n\n    \n\n        \n    \n    \n    \n    \n\n    \n\n    \n    \n\n     \n    \n\n    \n\n    \n    \n    \n\n    \n    \n\n    \n    \n    \n\n        \n    \n    \n\n"
        },
        {
          "title": "2. 防沉迷设置",
          "url": "/tdsdk/android.html#2.-防沉迷设置",
          "content": "2. 防沉迷设置Android 防沉迷依赖于 XDSDK.OnResume 和 XDSDK.OnStop 接口，所以游戏应确保这两个接口接入正常，在 unity 中接入示例：void OnApplicationPause(bool pauseStatus)    {\n        if (pauseStatus)\n        {\n\t\t\txdsdk.XDSDK.OnStop();\n        }\n        else\n        {\n\t\t\txdsdk.XDSDK.OnResume();\n        }\n    }\n如果游戏将项目导出为 Android 原生工程，也可以在主 Activity 中的onResume和onStop中调用原生对应接口 XDSDK.onResume和XDSDK.onStop。两种接入方式选择一个即可。"
        },
        {
          "title": "3. 生成APK",
          "url": "/tdsdk/android.html#3.-生成apk",
          "content": "3. 生成APK在Unity中生成APK，或将工程导出至Android Studio进行打包。当前版本QQ SDK （open_sdk_r6008_lite.jar）包含assets，当构建工具设置成internal时，这些文件不会被打包进apk中，会导致未安装QQ时不能扫码登录。为避免此类问题，建议将构建构建工具换成gradle或提取jar包含的assets文件，放置于android/assets  "
        },
        {
          "title": "FAQ",
          "url": "/tdsdk/android.html#faq",
          "content": "FAQ游戏打包后无法在AndroidP的机型上使用\n将org.apache.http.legacy.jar打包到游戏内\nAndroidManifest的Application标签下添加如下内容\n另外需要在 AndroidManifest.xml中 application 标签内添加: android:usesCleartextTraffic=\"true\" ，例如：    \n"
        }
      ]
    },
    {
      "title": "iOS快速开始配置",
      "content": "",
      "url": "/tdsdk/ios.html",
      "children": [
        {
          "title": "1. 工程导出并打开",
          "url": "/tdsdk/ios.html#1.-工程导出并打开",
          "content": "1. 工程导出并打开用Unity导出Xcode工程并打开\n\n保存的文件点击'Unity-iPhone.xcodeproj'打开xcode工程\n"
        },
        {
          "title": "2. 导入SDK文件",
          "url": "/tdsdk/ios.html#2.-导入sdk文件",
          "content": "2. 导入SDK文件获取SDK资源文件\n将SDK目录下resoure文件添加到Xcode的\"Copy Bundle Resources\"中，可直接拖拽\n\nresources是心动SDK需要或依赖的资源文件，需要保证所有文件都被添加到了Xcode的“Copy Bundle Resources”中"
        },
        {
          "title": "3. 添加系统依赖库",
          "url": "/tdsdk/ios.html#3.-添加系统依赖库",
          "content": "3. 添加系统依赖库如果下列库文件不存在\"Frameworks\"目录时，可以手动添加。libz.tbdlibsqlite3.0.tbd\nlibicucore.tbd\nSecurity.framework\nCFNetwork.framework\nUIKit.framework\nQuartzCore.framework\nFoundation.framework\nCoreGraphics.Framework\nCoreTelephony.framework\nSystemConfiguration.framework\nlibiconv.tbd\nlibc++.tbd\nAuthenticationServices.framework\n"
        },
        {
          "title": "4. 设置 URL Types",
          "url": "/tdsdk/ios.html#4.-设置-url-types",
          "content": "4. 设置 URL Types多平台验证登陆时需要在Xcode中设置多个URL Types，URL Types主要是需要设置URL Schemes，其它选项可任意填写。按照下面表格的内容填写，注意替换其中的各项AppID。\n\nURL Schemes\n用途\n示例\n备注\n\n\n\n\nXD-{心动AppID}\n用于支付宝支付后跳回\nXD-ci2dos1ktzsca4f\n\n\n\n{微信AppID}\n用于微信授权登录后跳回\nwx19f231d77ac408d9\n\n\n\ntencent{QQ AppID}\n用于QQ授权登录后跳回\ntencent317081\n如果给到的心动AppID没有对应的QQ AppID，可以不配置该项\n\n\ntt{TapTap AppID}\n用户TapTap授权登录后跳回\ntt123456\n\n\n\n"
        },
        {
          "title": "5. 配置 info.plist",
          "url": "/tdsdk/ios.html#5.-配置-info.plist",
          "content": "5. 配置 info.plist如果不需要QQ和微信登录可以忽略这一步修改项目的info.plist，在节点中添加下列内容。修改的内容主要为了保证QQ和微信登录能够正常运行。LSApplicationQueriesSchemes\ntapsdk\nmqq\nmqqapi\nwtloginmqq2\nmqqopensdkapiV4\nmqqopensdkapiV3\nmqqopensdkapiV2\nmqqwpa\nmqqOpensdkSSoLogin\nmqqgamebindinggroup\nmqqopensdkfriend\nmqzone\nweixin\nwechat\n// 2.1.0\nweixinULAPI\n\nNSAppTransportSecurity\n\nNSAllowsArbitraryLoads\n\n\n\n"
        },
        {
          "title": "6. 配置工程capability",
          "url": "/tdsdk/ios.html#6.-配置工程capability",
          "content": "6. 配置工程capability更新SDK 2.1.0之后，需要在xcode工程中添加两项capability：Associated Domains \\ Sign in with apple.如下图:Associated Domains添加一项，格式为『applinks + 域名』如「applinks:www.xd.com」。域名为游戏官网地址，请联系平台方确认"
        },
        {
          "title": "7. 处理第三方应用跳回事件",
          "url": "/tdsdk/ios.html#7.-处理第三方应用跳回事件",
          "content": "7. 处理第三方应用跳回事件在UnityAppController.mm中增加如下两个方法，如果已经存在这些方法，在其中追加相应的处理代码即可。请务必添加下列代码，否则将影响第三方登录的授权回调。\nSDK 2.1.0 新增universalLink处理#import - (BOOL)application:(UIApplication*)application openURL:(NSURL*)url sourceApplication:(NSString*)sourceApplication annotation:(id)annotation{\n\t...\n\t...\n    ...\n   return [XDCore HandleXDOpenURL:url];\n}\n\n- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary *)options{\n\n    return [XDCore HandleXDOpenURL:url];\n}\n\n- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray> * _Nullable))restorationHandler {\n    return [XDCore handleOpenUniversalLink:userActivity];\n}\n"
        },
        {
          "title": "8. Buid Settings",
          "url": "/tdsdk/ios.html#8.-buid-settings",
          "content": "8. Buid SettingsEnable Bitcode = NO在编译选项‘Other Linker Flags’中加入「-ObjC」和 「-all_load」。Swift Language Version 设置为 Swift 5BuildSetting中,Always Embed Swift Standard Libraries设置为YES完成以上配置即可进行编译打包。"
        },
        {
          "title": "FAQ",
          "url": "/tdsdk/ios.html#faq",
          "content": "FAQ\n\"_registerHandler\", referenced from error\n\n是因为unity工程引入了Common脚本，build为iOS工程后需要依赖TDSCommon.framework，您可以从这里下载并导入\n\n\nlinker command failed with exit code 1\n需要按照第三步的方式添加XDSDK依赖的包\n\n\ndoes not contain bitcode. You must rebuild it with bitcode enabled\n找到Targets-->Build Setting-->Build Options-->Enable Bitcode , 设置 Enable Bitcode = NO\n\n如遇问题，请联系TapTap技术支持：tapts@xd.com"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/tdsdk/InitSDK.html",
      "children": [
        {
          "title": "InitSDK",
          "url": "/tdsdk/InitSDK.html#initsdk",
          "content": "InitSDK初始化SDK"
        },
        {
          "title": "示例代码",
          "url": "/tdsdk/InitSDK.html#initsdk-示例代码",
          "content": "示例代码XDSDK.InitSDK(\"xxxx\", 1, \"\", \"\", false);"
        },
        {
          "title": "API接口",
          "url": "/tdsdk/InitSDK.html#initsdk-api接口",
          "content": "API接口public static void InitSDK(string appid, int aOrientation, string channel, string version, bool enableTapDB)"
        },
        {
          "title": "API参数说明",
          "url": "/tdsdk/InitSDK.html#initsdk-api参数说明",
          "content": "API参数说明\n\n参数\n必选\n备注\n\n\n\n\nappid\nY\n心动AppID\n\n\naOrientation\nY\n屏幕方向，0表示横屏，1表示竖屏\n\n\nchannel\nN\n渠道号\n\n\nversion\nN\n版本号\n\n\nenableTapDB\nY\n是否开启TapDB\n\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/tdsdk/SetCallback.html",
      "children": [
        {
          "title": "SetCallback XDCallback",
          "url": "/tdsdk/SetCallback.html#setcallback-xdcallback",
          "content": "SetCallback XDCallback设置XDSDK的所有回调监听"
        },
        {
          "title": "示例代码",
          "url": "/tdsdk/SetCallback.html#setcallback-xdcallback-示例代码",
          "content": "示例代码    XDSDK.SetCallback (new XDSDKHandler ());"
        },
        {
          "title": "API接口",
          "url": "/tdsdk/SetCallback.html#setcallback-xdcallback-api接口",
          "content": "API接口    public class XDSDKHandler : XDCallback {\n        //初始化成功回调\n        public override void OnInitSucceed (){\n\n        }\n\n        //初始化失败回调\n        public override void OnInitFailed (string msg){\n\n        }\n\n        //登录成功回调\n        public override void OnLoginSucceed (string token){\n\n        }\n\n        //登录失败回调\n        public override void OnLoginFailed (string msg){\n\n        }\n\n        //登录取消回调\n        public override void OnLoginCanceled (){\n\n        }\n\n        //游客绑定成功回调\n        public override void OnGuestBindSucceed (string token){\n\n        }\n\n        //游客绑定失败回调（可选）\n        public override void OnGuestBindFailed(string msg){\n\n        }\n\n        //登出回调\n        public override void OnLogoutSucceed (){\n\n        }\n\n        //支付完成回调\n        public override void OnPayCompleted (){\n\n        }\n\n        //支付失败回调\n        public override void OnPayFailed (string msg){\n\n        }\n\n        //支付取消回调\n        public override void OnPayCanceled (){  \n\n        }\n\n        //Android 退出回调\n        public override void OnExitConfirm (){\n\n        }\n\n        //Android 取消退出回调\n        public override void OnExitCancel (){\n\n        }\n\n        //微信分享成功回调（可选）\n        public override void OnWXShareSucceed (){\n\n        }\n\n        //微信分享失败回调（可选）\n        public override void OnWXShareFailed (){\n\n        }\n\n        //实名认证成功\n        public override void OnRealNameSucceed (){\n\n        }\n\n        //实名认证失败\n        public override void OnRealNameFailed (string error_msg){\n\n        }\n\n        /// 有未完成的订单回调，比如：礼包码.注意：多个未完成订单会在一个数组中一起回调。（只会在登录状态下回调）\n        /// @param resultList 订单信息List。\n        /// 单个未完成订单信息包含：     TransactionIdentifier ：订单标识 ，恢复购买时需要回传\n        ///                             \t\t Product_Id ：商品ID，\n        ///                                        Quantity：商品数量\n        public override void RestoredPayment(List> resultList){}\n\n        //用户同意所有协议\n        public override void OnProtocolAgreed() {}\n\n    \t//打开协议成功\n        public override void OnProtocolOpenSucceed() {}\n\n    \t//打开协议失败\n        public override void OnProtocolOpenFailed(string msg) {}\n\n    }\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/tdsdk/Login.html",
      "children": [
        {
          "title": "Login",
          "url": "/tdsdk/Login.html#login",
          "content": "LoginTapTap登录接口"
        },
        {
          "title": "示例代码",
          "url": "/tdsdk/Login.html#login-示例代码",
          "content": "示例代码XDSDK.Login();"
        },
        {
          "title": "API接口",
          "url": "/tdsdk/Login.html#login-api接口",
          "content": "API接口public static void Login()"
        },
        {
          "title": "API说明",
          "url": "/tdsdk/Login.html#login-api说明",
          "content": "API说明调用该接口会触发下列回调获取、查看用户信息以及支付接口请在获取到登录成功回调之后调用。\n\n类别\n回调方法\n\n\n\n\n登录成功\nvoid OnLoginSucceed(string token)\n\n\n登录失败\nvoid OnLoginFailed(string msg)\n\n\n登录取消\nvoid OnLoginCanceled()\n\n\n"
        }
      ]
    }
  ]
}