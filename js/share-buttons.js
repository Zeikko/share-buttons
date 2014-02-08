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
        window.open(args.url + encodeURIComponent(window.location), '_blank');
    }

    bind(document.getElementById('share-button-facebook'), 'click', open, {url: 'https://www.facebook.com/sharer/sharer.php?u='});
    bind(document.getElementById('share-button-twitter'), 'click', open, {url: 'https://twitter.com/intent/tweet?text='});
    bind(document.getElementById('share-button-linkedin'), 'click', open, {url: 'http://www.linkedin.com/shareArticle?url='});

    var script = document.createElement('script');
    script.src = 'http://ojalehto.fi/share-counter/shares/total?url=' + encodeURIComponent(window.location) + '&id=1&callback=shareButton.saveTotal';
    document.body.appendChild(script);

    return {
        saveTotal: function(jsonp) {
            document.getElementById('share-count').innerHTML = jsonp.all;
        }
    };

})();