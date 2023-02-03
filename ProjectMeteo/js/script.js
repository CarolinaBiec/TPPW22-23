fetch("https://api.openweathermap.org/data/2.5/weather?q=Turin&appid=da25dd83d9127d2fb4825e3adbafa134")
    .then(data => {
        return data.json()
    })
    .then(response => {
        console.log(response);
    })


////Geolocation//////
if(Modernizr.geolocation){
    navigator.geolocation.getCurrentPosition(success, fail);
}


function success(posizione) {
    var latitude = posizione.coords.latitude;
    var longitude = posizione.coords.longitude;

    console.log("Lat: " + latitude);
    console.log("Lon: " + longitude);
}

function fail(message) {
    console.log(message);
}


//inizializzo mappa
var map = L.map('mappa').setView([45.0689665, 7.6869564], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([45.0689665, 7.6869564]).addTo(map);
