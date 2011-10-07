/// <reference path="../Scripts/jquery-1.6.4.js" />


var readNavData = function () {
    var items = [];
    $("link[rel=prev], link[rel=index], link[rel=next]")
        .each(function () {
        items.push({
            type: $(this).attr("rel"),
            link: $(this).attr("href")
        });
    });

    return items;
};


var renderNavData = function (data) {

    $(document.body).append("<hr>");
    var parent = $('<p>').appendTo(document.body);

    $.each(data, function (idx, item) {
        if (idx > 0)
            $(parent).append('<span>|</span>');

        $('<a>')
            .attr("href", item.link)
            .text(item.type)
            .appendTo(parent);
    });
};


$(function () {
    renderNavData(readNavData());
});
