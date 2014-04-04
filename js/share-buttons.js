(function(exports) {
var localWindow;
var localDocument;

    exports.init = function(windowParam, documentParam) {
        if(typeof windowParam === 'undefined') {
            localWindow = window;
        } else {
            window = windowParam;
        }
        if(typeof documentParam === 'undefined') {
            localDocument = document;
        } else {
            document = documentParam;
        }

        function bind(element, eventName, func) {
            if (element !== null) {
                if (element.addEventListener) {
                    element.addEventListener(eventName, function(e) {
                        e.preventDefault();
                        func();
                    }, false);
                }
                //IE 7,8
                else if (element.attachEvent) {
                    element.attachEvent('on' + eventName, function(e) {
                        e.preventDefault();
                        func();
                    }, false);
                }
            }
        }

        var open = function open(args) {
            return function() {
                localWindow.open(args.url + encodeURIComponent(localWindow.location), '_blank', 'toolbar=0,location=1,directories=1,status=1,menubar=0,scrollbars=1,resizable=1,width=' + args.width + ',height=' + args.height);
            };
        };

        bind(localDocument.getElementById('share-buttons-facebook'), 'click', open({
            url: 'https://www.facebook.com/sharer/sharer.php?u=',
            width: 650,
            height: 313
        }));
        bind(localDocument.getElementById('share-buttons-twitter'), 'click', open({
            url: 'https://twitter.com/intent/tweet?text=',
            width: 680,
            height: 260
        }));
        bind(localDocument.getElementById('share-buttons-linkedin'), 'click', open({
            url: 'http://www.linkedin.com/shareArticle?url=',
            width: 600,
            height: 500
        }));
        bind(localDocument.getElementById('share-buttons-googleplus'), 'click', open({
            url: 'https://plus.google.com/share?url=',
            width: 484,
            height: 510
        }));
        bind(localDocument.getElementById('share-buttons-pinterest'), 'click', open({
            url: 'http://pinterest.com/pin/create/button/?url=',
            width: 750,
            height: 288
        }));

        var script = localDocument.createElement('script');
        script.src = 'http://ojalehto.fi/share-counter/shares/total?url=' + encodeURIComponent(localWindow.location) + '&id=1&callback=shareButtons.setCount';
        localDocument.body.appendChild(script);
    }
    exports.setCount = function(jsonp) {
        if (!isNaN(jsonp.facebook)) {
            localDocument.getElementById('share-buttons-facebook-share-count').innerHTML = jsonp.facebook;
        }
        if (!isNaN(jsonp.twitter)) {
            localDocument.getElementById('share-buttons-twitter-share-count').innerHTML = jsonp.twitter;
        }
        if (!isNaN(jsonp.linkedIn)) {
            localDocument.getElementById('share-buttons-linkedin-share-count').innerHTML = jsonp.linkedIn;
        }
        if (!isNaN(jsonp.googlePlus)) {
            localDocument.getElementById('share-buttons-googleplus-share-count').innerHTML = jsonp.googlePlus;
        }
        if (!isNaN(jsonp.pinterest)) {
            localDocument.getElementById('share-buttons-pinterest-share-count').innerHTML = jsonp.pinterest;
        }
    };
})(typeof exports === 'undefined' ? this['shareButtons'] = {} : exports);
