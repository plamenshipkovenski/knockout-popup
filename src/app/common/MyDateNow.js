define(function () {

    var droopleDate,
        now = new Date(),
        at = 'at',
        space = ' ',
        comma = ',',
        timeMarker = 'am',
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        month = months[now.getMonth()],
        day = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        mins = now.getMinutes();

    if (mins.toString().length == 1) {
        mins = '0' + mins;
    }

    if (hour > 12) {
        hour = hour % 12;
        timeMarker = 'pm';
    }
    droopleDate = (month + space + day + comma + space + year + space + at + space + hour + ':' + mins + space + timeMarker).toUpperCase();

    return {
        droobleFormat: droopleDate,
        droobleFake: 'march 7, 2013 at 7:30 pm'.toUpperCase()
    }
});