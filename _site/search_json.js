window.ydoc_plugin_search_json = {
  "XDSDK": [
    {
      "title": "TapTap SDK documents",
      "content": "快速开始\n初始化\n登录\n\n微信登录\nTapTap登陆\nQQ登录\n心动登录\n苹果登录\n登录状态\n退出登录\n\n\n角色\n用户中心\n支付\n游客升级\n退出\n微信分享\n实名认证\n游客绑定\n客服\nTapDB\nTapTap论坛\nXDLive直播\n防沉迷\n协议页面\n",
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
          "title": "登陆",
          "url": "/tdsdk/xdquickstart.html#登陆",
          "content": "登陆"
        },
        {
          "title": "步骤",
          "url": "/tdsdk/xdquickstart.html#登陆-步骤",
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
      "title": "",
      "content": "",
      "url": "/tdsdk/InitSDK.html",
      "children": [
        {
          "title": "InitSDK",
          "url": "/tdsdk/InitSDK.html#initsdk",
          "content": "InitSDK/** * @param appid 心动AppID\n * @param aOrientation 屏幕方向，0表示横屏，1表示竖屏\n * @param channel 渠道号\n * @param version 版本号\n * @param enableTapDB 是否开启TapDB\n */\npublic static void InitSDK(string appid, int aOrientation, string channel, string version, bool enableTapDB)\n\n\n参数\n必选\n\n\n\n\nappid\nY\n\n\naOrientation\nY\n\n\nchannel\nN\n\n\nversion\nN\n\n\nenableTapDB\nY\n\n\n"
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
          "content": "SetCallback XDCallback实现并设置回调方法脚本需要实现的回调请参考以下代码    XDSDK.SetCallback (new XDSDKHandler ());    public class XDSDKHandler : XDCallback {\n        //初始化成功回调\n        public override void OnInitSucceed (){\n\n        }\n\n        //初始化失败回调\n        public override void OnInitFailed (string msg){\n\n        }\n\n        //登录成功回调\n        public override void OnLoginSucceed (string token){\n\n        }\n\n        //登录失败回调\n        public override void OnLoginFailed (string msg){\n\n        }\n\n        //登录取消回调\n        public override void OnLoginCanceled (){\n\n        }\n\n        //游客绑定成功回调\n        public override void OnGuestBindSucceed (string token){\n\n        }\n\n        //游客绑定失败回调（可选）\n        public override void OnGuestBindFailed(string msg){\n\n        }\n\n        //登出回调\n        public override void OnLogoutSucceed (){\n\n        }\n\n        //支付完成回调\n        public override void OnPayCompleted (){\n\n        }\n\n        //支付失败回调\n        public override void OnPayFailed (string msg){\n\n        }\n\n        //支付取消回调\n        public override void OnPayCanceled (){  \n\n        }\n\n        //Android 退出回调\n        public override void OnExitConfirm (){\n\n        }\n\n        //Android 取消退出回调\n        public override void OnExitCancel (){\n\n        }\n\n        //微信分享成功回调（可选）\n        public override void OnWXShareSucceed (){\n\n        }\n\n        //微信分享失败回调（可选）\n        public override void OnWXShareFailed (){\n\n        }\n\n        //实名认证成功\n        public override void OnRealNameSucceed (){\n\n        }\n\n        //实名认证失败\n        public override void OnRealNameFailed (string error_msg){\n\n        }\n\n    /// 有未完成的订单回调，比如：礼包码.注意：多个未完成订单会在一个数组中一起回调。（只会在登录状态下回调）\n    /// @param resultList 订单信息List。\n    /// 单个未完成订单信息包含：     TransactionIdentifier ：订单标识 ，恢复购买时需要回传\n    ///                             \t\t Product_Id ：商品ID，\n    ///                                        Quantity：商品数量\n    public override void RestoredPayment(List> resultList){\n        }\n\n        //用户同意所有协议\n        public override void OnProtocolAgreed() {}\n\n    \t//打开协议成功\n        public override void OnProtocolOpenSucceed() {}\n\n    \t//打开协议失败\n        public override void OnProtocolOpenFailed(string msg) {}\n\n    }\n"
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
          "content": "Login调用该接口进行登录。public static void Login()示例代码XDSDK.Login();调用该接口会触发下列回调。获取、查看用户信息以及支付接口请在获取到登录成功回调之后调用。\n\n类别\n回调方法\n\n\n\n\n登录成功\nvoid OnLoginSucceed(string token)\n\n\n登录失败\nvoid OnLoginFailed(string msg)\n\n\n登录取消\nvoid OnLoginCanceled()\n\n\n"
        }
      ]
    }
  ]
}