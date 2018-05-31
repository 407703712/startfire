define([], function () {

    return {   
        //baseUrl : App.sysDir,frameWorkExtend
        baseUrl:'../public/',
        paths : {
            wechatSDK : '//res.wx.qq.com/open/js/jweixin-1.0.0'                //微信SDK
            ,jquery : 'jquery/jquery-3.0.0.min'              //jquery库
            ,Swiper : '/swiper/swiper.min'                    //swiper库
            ,jqScroll:'jquery/jquery-scroll'                //滚动条监听库
            ,common:'common'                             //公共拓展方法库，需依赖jQuery
            ,layui:'layui/layui'                             //layui库
            ,xadmin:'layui/xadmin'                             //xadmin初始化layui样式的方法
        },
        shim : {
            'jqScroll': {exports:'jqScroll'},
            'layui': {exports:'layui'},
            'xadmin': {exports:'xadmin'}
        },
        waitSeconds: 20
    };

});