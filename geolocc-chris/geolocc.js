// Statement checking if user has geolocaiton feature
if ("geolocation" in navigator){
    console.log("yes")
} else{
    console.log("no")
}

function geoFindMe(){
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';

    function successCallback(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        status.textContent = '';

        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function errorCallback(error){
        status.textContent = 'unable to retrieve location'
        console.log(`ERROR(${error.code}): ${error.message}`);
    }

    if (!navigator.geolocation){
        status.textContent = 'geolocation is not supported by your browser';
    } else {
        status.textContent = 'locating..'
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe)