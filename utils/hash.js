_hash = function (x) {
    var b, c, a = 0;
    if (0 == x.length) return a;
    for (b = 0, l = x.length; l > b; b++) c = x.charCodeAt(b), a = (a << 5) - a + c, a |= 0;
    return a
};