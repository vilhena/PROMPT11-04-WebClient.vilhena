/// <reference path="../Scripts/jquery-1.6.4.js" />

function recursive(node, top, level) {
    $(top).append('<li>' + $(node).text() + '</li>');
    if (level < 5) {
        alert(level);
        var x = $(node).after("H" + (level + 1)).toArray();

        for (var i = 0; i < x.length; i++) {
            recursive(x[i], top, level + 1);
        }
    }
};


function buildTOC() {
    var top = $("H1");
    
    var ul = $("<ul>");

    $.each(top, function (node) {
        recursive(this, ul, 1);
    });

    var div = $("<div>").append(ul);

    $(document.body).append(div);
};


$(function () {
    buildTOC();
});
