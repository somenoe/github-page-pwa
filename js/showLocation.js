var content = document.getElementById("GeoLocation");

function start() {
    if (!navigator.geolocation) {
        content.innerHTML = "Geolocation is not supported by this browser.";
        return;
    }
    // show waring section
    document.getElementById("setting").style.display = "block";
    getLocation();
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
    // wait then get location again
    delay().then(() => getLocation());
}

function showPosition(position) {
    content.innerHTML = content.innerHTML
        + `${new Date().toLocaleTimeString()} : ${position.coords.latitude}, ${position.coords.longitude}`
        + "<br>";
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            content.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            content.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            content.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            content.innerHTML = "An unknown error occurred.";
            break;
    }
}
