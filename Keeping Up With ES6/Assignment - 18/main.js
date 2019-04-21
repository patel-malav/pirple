/* Author: Malav P. Patel
 * GitHub: http://github.com/patel-malav
 * Title: Geo Location with W3 geolocation & Google Maps API.
 * Topic: Priple/Assignment - 18
 */

 // Enter The API KE HERE
let apiKey = 'YOUR API KEY',
    url = 'https://www.google.com/maps/embed/v1/place?key=';


// Function to get location permission from user and showing in google maps embed iframe.
function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const iframe = document.querySelector('iframe');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

        // google maps api..
        iframe.src = url + apiKey + '&q=' + latitude + ',' + longitude;
    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

}

// addEventListener
window.onload = function() {
    document.querySelector('#find-me').addEventListener('click', geoFindMe);
}
