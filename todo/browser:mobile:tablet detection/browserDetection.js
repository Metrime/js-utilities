(function (window, navigator) {
    "use strict";

    var ua = (window.navigator && navigator.userAgent) || "";

    function load(which){
        var el = document.createElement('link');
            el.setAttribute("rel", "stylesheet");
            el.setAttribute("type", "text/css");
            el.setAttribute("href", './assets/css/'+which+'.css');
            document.getElementsByTagName("head")[0].appendChild(el);
    }

    if(/webkit\W/i.test(ua)){
        load('webkit');
    }
    else if(/mozilla.*\Wfirefox\W/i.test(ua)){
        load('ff');
    }
    else if(navigator.appName === "Microsoft Internet Explorer" || /\bTrident\b/.test(ua)){
        load('ie');
    }
    else{
        load('all');
    };

    if(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i.test(ua)){
        window.mobile = true;
    }
    else if(/(ipad|android(?!.*mobile)|tablet)/i.test(ua)){
        window.tablet = true;
    }

}(window, navigator));

