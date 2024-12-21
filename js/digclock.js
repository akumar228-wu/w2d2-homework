// Time data function
function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm; //Empty variable

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= "12";
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm;
    document.getElementById("clock").innerText = time;
    var utchr = d.getUTCHours();

    // Calculate time difference between GMT and local hour
    var timeDiff = hr - utchr;

    // Convert negative time difference to positive (adjusted time difference)
    var adjTimeDiff = timeDiff < 0 ? -timeDiff : timeDiff;

    // Determine time zone
    var timeZone;
    if (timeDiff == 0) {
        timeZone = "GMT";
    } else if (timeDiff < 0) {
        timeZone = "GMT+" + adjTimeDiff;
    } else {
        timeZone = "GMT-" + adjTimeDiff;
    }
    // Add time zone to the end of the time format
    time += " " + timeZone;

    // Display the updated time with time zone
    document.getElementById("clock").innerText = time;

    // setInterval(currentTime, 1000);
    setTimeout(currentTime, 1000);
}
currentTime();