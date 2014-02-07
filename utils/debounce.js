_debounce = function (a, b, c) {
    var d;
    return function () {
        var e = this,
            f = arguments,
            g = function () {
                d = null, c || a.apply(e, f)
            }, h = c && !d;
        clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
    }
};