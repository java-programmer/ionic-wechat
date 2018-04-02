# ionic-wechat

  目前npm上面的支付以及登陆未经过测试，所以等测试通过后会重新发布到npm上面,请大家耐心等待！！！

  这是一个微信cordova 插件的Typescript 转换实现，主要是为了帮助大家在ionic2及其以上版本直接调用Wechat cordova插件里面的JS方法.
  
  在此之前你需要安装 cordova-plugin-wechat插件
  ionic3及其以上版本前面需要加上ionic: ionic cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID 
  
  如果你已经安装过cordova-plugin-wechat插件,可以直接使用以下命令安装ionic-native： npm install ionic-wechat --save
  
  提供的转换方法如下: 
  isInstalled() 检测是否安装微信客户端
  auth() 微信登录验证
  share() 微信分享
  sendPaymentRequest() 微信支付
  
  
  



