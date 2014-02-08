var shareButton = (function() {

    function bind(element, eventName, func, args) {
        if (element.addEventListener) {
            element.addEventListener(eventName, function(args) {
                return function(e) {
                    func(e, args);
                };
            }(args), false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, function(args) {
                return function(e) {
                    func(e, args);
                };
            }(args), false);
        }
    }

    function open(e, args) {
        e.preventDefault();
        window.open(args.url + encodeURIComponent(window.location), '_blank', 'toolbar=0,location=1,directories=1,status=1,menubar=0,scrollbars=1,resizable=1,width=' + args.width + ',height=' + args.height);
    }

    bind(document.getElementById('share-buttons-facebook'), 'click', open, {
        url: 'https://www.facebook.com/sharer/sharer.php?u=',
        width: 650,
        height: 313
    });
    bind(document.getElementById('share-buttons-twitter'), 'click', open, {
        url: 'https://twitter.com/intent/tweet?text=',
        width: 680,
        height: 260
    });
    bind(document.getElementById('share-buttons-linkedin'), 'click', open, {
        url: 'http://www.linkedin.com/shareArticle?url=',
        width: 600,
        height: 500
    });
    bind(document.getElementById('share-buttons-googleplus'), 'click', open, {
        url: 'https://plus.google.com/share?url=',
        width: 484,
        height: 510
    });

    var script = document.createElement('script');
    script.src = 'http://ojalehto.fi/share-counter/shares/total?url=' + encodeURIComponent(window.location) + '&id=1&callback=shareButton.saveTotal';
    document.body.appendChild(script);

    return {
        saveTotal: function(jsonp) {
            if (typeof(jsonp.all) !== 'undefined') {
                document.getElementById('share-buttons-share-count').innerHTML = jsonp.all;
                document.getElementById('share-buttons-share-count').style.display = 'block';
            }
        }
    };

})();