log = (function () {
    var logconsole = document.getElementById("log");

    return function (data) {
        logconsole.firstChild.nodeValue =
        "-----[" + new Date().toLocaleTimeString() + "]-----\n" +
        data + "\n" +
        logconsole.firstChild.nodeValue;
    }
})();
    