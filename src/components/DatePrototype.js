//for german translation
Date.prototype.dayname = function () {
    let currentDayNumber = this.getDay();

    let weeknames = [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
    ];

    return weeknames[currentDayNumber];
};

Date.prototype.normalTimeformat = function () {
    return this.toLocaleString([], {hour: '2-digit', minute:'2-digit'});
};