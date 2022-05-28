(function () {
    function getCookie(key) {
        var data = localStorage.getItem(key);
        return data;
    }

    function setStyle(style) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var css = document.createElement('style');
        head.appendChild(css);
        if (css.styleSheet) {
            // This is required for IE8 and below.
            css.styleSheet.cssText = style;
        } else {
            css.appendChild(document.createTextNode(style));
        }
    }

    var black = '\
    body {\
        background-color: #3a3e4a;\
        color: #d2d2d2;\
    }\
    #footer .flink .ba {\
        color: #ccc\
    }'

    if (getCookie("style") === "black") {
        setStyle(black)
    }
})();