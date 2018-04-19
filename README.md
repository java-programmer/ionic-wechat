# ionic-wechat

  这是一个微信cordova 插件的Typescript 转换实现，主要是为了帮助大家在ionic2及其以上版本直接调用Wechat cordova插件里面的JS方法.
  
  在此之前你需要安装 cordova-plugin-wechat插件
  ionic3及其以上版本前面需要加上ionic: ionic cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID 
  
  原来的这个cordova-plugin-wechat 有个坑，如果是最新的cordova版本android 无法安装插件到源码中,这是因为cordova版本太高，不兼容这个插件所导致的。解决   方案是修改$your_project/plugins/cordova-plugin-wechat/scripts/android-install.js中的
  var targetDir = path.join(projectRoot, "platforms", "android", "src", packageName.replace(/./g, path.sep), "wxapi");
  修改为
  var targetDir = path.join(projectRoot, "platforms", "android", "app","src","main","java", packageName.replace(/./g, path.sep), "wxapi");

  修改后，重新装一下平台
  cordova platform remove android
  cordova platform add android
  
  如果你已经安装过cordova-plugin-wechat插件,可以直接使用以下命令安装ionic-native： npm install ionic-wechat --save
  
  提供的转换方法如下: 
  isInstalled() 检测是否安装微信客户端
  auth() 微信登录验证
  share() 微信分享
  sendPaymentRequest() 微信支付
  
  
  



