log(emails);

var cats;

var data = emails;

var lines = data.split("\n");


function parseDate(datestring) {
    var datesplit = datestring.split("/");
    return new Date(datesplit[0], datesplit[1] - 1, datesplit[2]);
};

function getNewCat(action, eventDate, name, mother) {
    var cat = {};
    cat.action = action;
    cat.eventDate = eventDate;
    cat.name = name;
    cat.mother = mother;
    return cat;
}

function parseCatLine(catline) {
    var cats = [];

    var action;
    var eventDate;
    var name;
    var mother;

    var eventIndex = catline.indexOf(" ");
    
    action = catline.substr(0, eventIndex);

    var sizeofDate = "13/02/2007".length;
    var lineDate = catline.substr(eventIndex+1,sizeofDate);

    eventDate = parseDate(lineDate);

    var sizeofMother = "(mother ".length;
    var motherIndex = catline.indexOf("(mother ");
    if ( motherIndex > 0) {
        //exists mother
        var motherIndexEnd = catline.indexOf("):", motherIndex);
        mother = catline.substr(motherIndex + sizeofMother, motherIndexEnd - motherIndex - sizeofMother);
    }

    var indexofnames = catline.indexOf(": ", eventIndex + 1 + sizeofDate);

    var catsnames = catline.substr(indexofnames + 2).split(", ");

    for (var i = 0; i < catsnames.length; i++) {
        cats[cats.length] = getNewCat(action, eventDate, catsnames[i], mother);
    }

    return cats;
};




for (var i = 0; i < lines.length; i++) {
    if (
        lines[i].indexOf("died") === 0
        || lines[i].indexOf("born") === 0
    ) {
        log(lines[i]);
        var cats = parseCatLine(lines[i]);
        for (var j = 0; j < cats.length; j++) {
            log(cats[j].action);
            log(cats[j].name);
            log(cats[j].mother);
            log(cats[j].eventDate);
        }
        
    }
}

