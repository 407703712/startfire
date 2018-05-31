// TODO 此处可预留对App里面的配置进行特定的修改
require(['../public/require-public-config.js'], function(requireConfig) {
    "use strict";
 
    require.config(requireConfig);//用最新的配置配置require

    //开始正式启动页面
    require(['jquery','common','layui','xadmin','jqScroll'], 
        function($,common,layui,xadmin) {
                console.log('hellow,world!');
                // common.init();
                // $('div').waypoint(function() {
                //     if ($($(this)[0].element).attr('id')=="demo2") {
                //         $($(this)[0].element).addClass('animated fadeInLeft');
                //     }  
                //       console.log($($(this)[0].element));  
                // },{offset:"700px"});
        }
    );
});