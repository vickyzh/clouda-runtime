define("mbaas",function(module) {
    var lightapp = this;
    var vvt = module.vtt = {};
    var tts = module.tts = {};
    
    /**
     * @object vtt
     * @memberof clouda.mbaas
     * @instance
     * @namespace clouda.mbaas.vtt clouda.mbaas.vtt
     */
    
    
    var voiceRecognition = new delegateClass("voice","voiceRecognition");
    var say = new delegateClass("voice","tts","say");
    
    module.VVT_STATUS={};
    module.VVT_STATUS.START_RECORDING = 0;
    module.VVT_STATUS.NONE = 1;
    module.VVT_STATUS.SPEECH_START = 2;
    module.VVT_STATUS.SPEECH_END = 4;
    module.VVT_STATUS.FINISH = 5;
    module.VVT_STATUS.PLAY_BEGINE_TONE_START = 6;
    module.VVT_STATUS.PLAY_BEGINE_TONE_END = 7;
    module.VVT_STATUS.PLAY_END_TONE_START = 8;
    module.VVT_STATUS.PLAY_END_TONE_END = 9;
    module.VVT_STATUS.UPDATE_RESULTS = 10;
    module.VVT_STATUS.AUDIO_DATA = 11;
    module.VVT_STATUS.USER_CANCELED = 61440;
    module.VVT_STATUS.ERROR = 65535;
    
    // for(var name in module.VVT_STATUS){
        // module.VVT_STATUS
    // }
    /**
     * 启动识别
     *
     * @function scanQrcode
     * @memberof clouda.mbaas.vtt
     * @instance
     *
     * @param {{}} options 由onsuccess 和 onfail组成
     * @param {function} options.onsuccess 成功的回调
     * @param {function} [options.onfail] 失败的回调
     * @param {boolen} [options.voicePower] 
     * @param {int} [options.speechMode] 
     * @param {function} [options.onfail] 
     * @returns null
     * 
     */
     vvt.startCapture = function(options){
        if (options.voicePower){
             voiceRecognition.enableVoicePower(successCallback, errorCallback, options.voicePower);
        }
        if (options.speechMode){
             voiceRecognition.setSpeechMode(successCallback, errorCallback, options.speechMode);
        }
        voiceRecognition.startVoiceRecognition(function(string){//success callback
                // options.onsuccess.apply(this,arguments);
                plg.voiceRecognition.setStatusChangeListener(
                  function(result) {
                    if (result.status === module.VVT_STATUS.FINISH ){
                        options.onsuccess.apply(this,arguments);
                    }else if (result.status === module.VVT_STATUS.USER_CANCELED) {
                        options.onfail.call(this,clouda.STATUS.USER_CANCELED);
                    }else if (result.status === module.VVT_STATUS.ERROR) {
                        options.onfail.call(this,result.status);
                    }
                  },
                  function(error) {
                    lightapp.error(ErrCode.VVT_ERR,error.code,options);
                  }
                );
            
        },function(nativeErr){
            lightapp.error(ErrCode.BTY_ERROR,nativeErr,options);
        },options);
     };
     
     vvt.speakFinish = function(options){
        voiceRecognition.speakFinish(function(string){//success callback
            options.onsuccess.call(this,"OK");
        },function(nativeErr){
            lightapp.error(ErrCode.BTY_ERROR,nativeErr,options);
        },options);
     };
     
     vvt.terminateCapture = function(options){
        voiceRecognition.stopVoiceRecognition(function(string){//success callback
            if (typeof string=='string'){
                options.onfail.apply(this,arguments);
            }else{
                lightapp.error(ErrCode.VVT_ERR,ErrCode.UNKNOW_CALLBACK,options);
            }
        },function(nativeErr){
            lightapp.error(ErrCode.BTY_ERROR,nativeErr,options);
        },options);
     };
     
     /**
     * @object tts
     * @memberof clouda.mbaas
     * @instance
     * @namespace clouda.mbaas.vtt clouda.mbaas.tts
     */
    module.TTS_TYPE = {
      DICT_EN: 'dict_en',
      DICT_UK: 'dict_uk',
      TRANS_EN: 'trans_en',
      TRANS_ZH: 'trans_zh',
    };
   
   /**
     * 语音外放
     *
     * @function say
     * @memberof clouda.mbaas.tts
     * @instance
     *
     * @param {string} say word
     * @param {{}} options 由onsuccess 和 onfail组成
     * @param {function} options.onsuccess 成功的回调
     * @param {function} [options.onfail] 失败的回调
     * @param {string} [options.type] 类型
     * @returns null
     * 
     */
     tts.say = function(word,options){
         //say: function(successCallback, errorCallback, text, type) {
        say(function(string){//success callback
            if (typeof string=='string'){
                options.onsuccess.apply(this,arguments);
            }else{
                lightapp.error(ErrCode.VVT_ERR,ErrCode.UNKNOW_CALLBACK,options);
            }
            
        },function(nativeErr){
            lightapp.error(ErrCode.BTY_ERROR,nativeErr,options);
        },word,options.type);
     };
});