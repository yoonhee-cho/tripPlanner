// console.log("hello this is index.js in src folder");

//webpack will gathered all the js file in the src folder
// into one bundle.js and auto save it in the public folder
// so index.html only put bundle.js in script tag
// no need to mention js files in src folder

import mapboxgl from "mapbox-gl";
// import buildMarker from "./marker";

// const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
// marker.addTo(map);</

mapboxgl.accessToken = "pk.eyJ1IjoieW9vbm1hbmdvIiwiYSI6ImNrZHlxOHl1ejJlYTYyem55M2gya3JtNnkifQ.Kv6jngl4NaM-nmtjDOWrLA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

