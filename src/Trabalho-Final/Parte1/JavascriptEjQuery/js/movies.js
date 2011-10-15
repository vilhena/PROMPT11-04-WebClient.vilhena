/// <reference path="../../../Scripts/jquery-1.6.4.js" />


$(function () {
    $("#list").click(function () {
        $("body").fadeOut(function () {
            $("#css").attr("href", "css/movieslist.css");
            $("body").fadeIn();
        });
    });

    $("#grid").click(function () {
        $("body").fadeOut(function () {
            $("#css").attr("href", "css/moviesgrid.css");
            $("body").fadeIn();
        });
    });

    $("#clean").click(function () {
        $("body").fadeOut(function () {
            $("#css").attr("href", "");
            $("body").fadeIn();
        });
    });

});