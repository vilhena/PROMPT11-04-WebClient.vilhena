/// <reference path="../Scripts/jquery-1.6.4.js" />


function show(){
    $("span.helpSample",$(this)).fadeIn();
};

function show2() {
    $("span.helpSample", $(this).parent()).fadeIn();
};

function hideAll(){
    $("span.helpSample").fadeOut();
}

function registerPHover() {
    $("p").hover(show,hideAll);
};

function registerInputSelected(){
    $("input")
        .focusin(show2);
    $("input")
        .focusout(hideAll);
    $("p :checkbox[name$=.IsRequired");
};

$(function () {
    $("span.helpSample").hide();
    registerPHover();
    registerInputSelected();
});