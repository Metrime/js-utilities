require('utils/string/core')

_.string.hash = function () {
    var b, c, a = 0;
    if (0 == this.length) return a;
    for (b = 0, l = this.length; l > b; b++) c = this.charCodeAt(b), a = (a << 5) - a + c, a |= 0;
    return a
};