/// <reference path="jquery-1.5.1.js" />
$(function () {

    jQuery.expr[':'].containsCI = function (a, i, m) {
        return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    var tableToFind = $("#data"); //change to table metadata

    var filterData = function () {
        var text = $("#search").val();

        if (text == "") {
            $("tr", tableToFind).show();
        }
        else {
            var items = $('tr:containsCI("' + text + '")', tableToFind);

            $("tr", tableToFind).hide();
            items.show();
            $("tr", tableToFind).first().show();
        }
    };


    tableToFind.append("<input type='text' id='search' name='search' />");
    tableToFind.append("<input type='button' id='find' value='Find' />");
    $("#find").click(filterData);
    $("#search").keyup(filterData);
});