// function geoFindMe() {
//   const status = document.querySelector("#status");
//   const mapLink = document.querySelector("#map-link");
//   mapLink.href = "";
//   mapLink.textContent = "";
//   function successCallback(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     // get the latitude and longitude of the user, assign them to two variables latitude and longitude that are going to be used to create the link to the openstreetmap.org
//     status.textContent = "";
//     // Read about the href property here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/href
//     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

//     if (longitude && latitude < 20) {
//       mapLink.style.color = "green";
//     } else {
//       mapLink.style.color = "yellow";
//     }
//   }

//   function errorCallback(error) {
//     status = "unable to retrieve your location";
//     console.log(
//       `Code: ${GeolocationPositionError.code}, message: ${GeolocationPositionError.message}`
//     );
//     // Write a message to the user, to the paragraph element, saying that we were unable to retrieve
//     // her/his location
//     // Write to the console the code of the error and the message by using the 'code' and 'message'
//     // properties of the GeolocationPositionError object
//   }
//   if (!navigator.geolocation) {
//     status.textContent = "Geolocation is not supported by your browser";
//   } else {
//     status.textContent = "Locating…";
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//     /**
//      * Use the `getCurrentPosition()` method to request the position of the user
//      * This method should be given the 'successCallback' and 'errorCallback' functions as arguments
//      */
//   }
// }
// document.querySelector("#find-me").addEventListener("click", geoFindMe);

function geoFindMe() {
  const mapLink = document.querySelector("#map-link");
  const status = document.querySelector("#status");
  mapLink.href = "";
  mapLink.textContent = "";
  function successCallback(position) {
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    localStorage.setItem("Longitude", longitude);
    localStorage.setItem("Latitude", latitude);
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    status.textContent = "";
  }

  function errorCallback(error) {
    status.textContent = "could not find your location";
    console.log(
      `code: ${GeolocationPositionError.code}, msg: ${GeolocationPositionError.message}`
    );
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
}
document.querySelector("#find-me").addEventListener("click", geoFindMe);

localStorage.removeItem("latitude");
