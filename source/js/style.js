(function () {
    function getCookie(key) {
        var data = localStorage.getItem(key);
        return data;
    }

    function setStyle(style) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var css = document.createElement('style');
        head.appendChild(css)
        if (css.styleSheet) {
            // This is required for IE8 and below.
            css.styleSheet.cssText = style;
        } else {
            css.appendChild(document.createTextNode(style));
        }
    }

    var white = '\
    body {\
        background-color: #fcfcfc;\
        color: #51525d;\
    }\
    #footer .flink .ba {\
        color: #51525d\
    }'

    if (getCookie("style") === "white") {
        setStyle(white)
    }
})();