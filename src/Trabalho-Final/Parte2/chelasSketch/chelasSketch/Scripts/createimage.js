/// <reference path="jquery-1.5.1.js" />


$(function () {

    var switchToFile = function () {
        $("#fileContainer").show();
        $("#canvasContainer").hide();
    };

    var switchToDraw = function () {
        $("#fileContainer").hide();
        $("#canvasContainer").show();
    };

    var fillImgValue = function () {
        $("#imagebase64").val(document.getElementById("imageView").getContext("2d").canvas.toDataURL());
    };

    $("#ckfile").click(switchToFile);
    $("#ckdraw").click(switchToDraw);


    $("#canvasContainer").hide();

    $("form").submit(fillImgValue);
});