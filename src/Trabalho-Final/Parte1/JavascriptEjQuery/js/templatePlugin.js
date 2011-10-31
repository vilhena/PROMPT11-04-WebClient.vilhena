/// <reference path="../../../Scripts/jquery-1.6.4.js" />

var template = function (templateName, args) {

    var replaceFunction = function (objectData) {
        return $("script#" + templateName)
                    .text()
                        .replace(/\$\(\w+\)/g, function (m) {
                                return objectData[m.substring(2, m.length - 1)].toString();
                            });
}

    if (args instanceof Array) { //Array must iterate over all objects
        $.each(args, function (index, object) { args[index] = replaceFunction(object); });
        return args;
    }
    else if (args != null) { //object
        return replaceFunction(args)
    } else { // returns the function (captures the templateName)
        return replaceFunction;
    }

};

