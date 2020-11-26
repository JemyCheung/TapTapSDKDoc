## InitSDK
初始化SDK

### 示例代码  

```
XDSDK.InitSDK("xxxx", 1, "", "", false);
```

### API接口  

```
public static void InitSDK(string appid, int aOrientation, string channel, string version, bool enableTapDB)
```

### API参数说明  

参数 | 必选 | 备注
:--- | :--- | :---
appid | Y | 心动AppID
aOrientation | Y | 屏幕方向，0表示横屏，1表示竖屏
channel | N | 渠道号
version | N | 版本号
enableTapDB | Y | 是否开启TapDB
