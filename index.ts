import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 *packaging wechat typescript converter
 * author by xuchao
 * @export
 * @interface WechatShareOptions
 */
export interface WechatShareOptions {

  /**
   * The Share message 
   */
  message?: {
    /**
     * wechat share title
     */
    title?: string;

    /**
     * wechat share description
     */
    description?: string;

    /**
     * wechat share Media Tag Name(optional)
     */
    mediaTagName?: string;

    /**
      * wechat share YOUR_THUMBNAIL_IMAGE
      */
    thumb?: string;

    /**
     * wechat share media,this is object
     */
    media?: {
      /**
       * wechat share media,this is object
       */
      type: number;

      /**
       * wechat share webpageUrl 
       */
      webpageUrl: string;
    };
  };

  /**
   * The Share Sence
   */
  text?: string;

  /**
   * The Share Sence 
   */
  scene: number;
}

/**
 * webchat pay params
 * 
 * @export
 * @interface WechatPayOption
 */
export interface WechatPayOptions {
  /**
   * merchant id
   */
  mch_id: string;

  /**
   * prepay id returned from server
   */
  prepay_id: string;

  /**
   * nonce string returned from server
   */
  nonce: string;

  /**
   * timestamp
   */
  timestamp: string;

  /**
   * signed string
   */
  sign: string;

}


/**
 * @name wechat
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { wechat } from '@ionic-native/wechat';
 *
 *
 * constructor(private wechat: wechat) { }
 *
 * ...
 *
 *
 * this.wechat.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Wechat',
  plugin: 'cordova-plugin-wechat',
  pluginRef: 'Wechat',
  repo: 'https://github.com/xu-li/cordova-plugin-wechat',
  install: 'ionic cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID',
  installVariables: ['wechatappid'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Wechat extends IonicNativePlugin {


  /**
   * 
   * default 'snsapi_userinfo'
   * @type {string}
   * @memberof Wechat
   */
  scope: string;

  /**
   * timestamp example '_'+new date()
   * 
   * @type {string}
   * @memberof Wechat
   */
  state: string;


  /**
   * wechat share
   */
  Scene: {
    SESSION:  0, // 聊天界面
    TIMELINE: 1, // 朋友圈
    FAVORITE: 2  // 收藏
  };

  Type: {
    APP:     1,
    EMOTION: 2,
    FILE:    3,
    IMAGE:   4,
    MUSIC:   5,
    VIDEO:   6,
    WEBPAGE: 7
  };

  /**
   * check wechat
   * 
   * @returns {Promise<any>} 
   * @memberof Wechat
   */
  @Cordova()
  isInstalled(): Promise<any> {
    return;
  }

  /**
   * 
   * wechat login method
   * @param {string} scope desc
   * @param {string} state times
   * @returns {Promise<any>} 
   * @memberof Wechat
   */
  @Cordova()
  auth(scope: string, state: string): Promise<any> {
    return;
  }

  /**
   * 
   * 
   * @param {WechatShareOptions} shareOptions 
   * @returns {Promise<any>} 
   * @memberof Wechat
   */
  @Cordova()
  share(shareOptions: WechatShareOptions): Promise<any> {
    return;
  }

  /**
   * webchat pay method
   * 
   * @param {WechatPayOptions} payOption 
   * @returns {Promise<any>} 
   * @memberof Wechat
   */
  @Cordova()
  sendPaymentRequest(payOption: WechatPayOptions): Promise<any> {
    return;
  }

}
