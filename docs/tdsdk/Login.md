## Login
TapTap登录接口  

### 示例代码   
```
XDSDK.Login();
```

### API接口  

```
public static void Login()
```


### API说明  

调用该接口会触发下列回调
<p style="color:red">获取、查看用户信息以及支付接口请在获取到登录成功回调之后调用。</p>

类别 | 回调方法
--- | ---
登录成功 | void OnLoginSucceed(string token)
登录失败 | void OnLoginFailed(string msg)
登录取消 | void OnLoginCanceled()
