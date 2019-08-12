const mapboxgl = require("mapbox-gl");
const markerBuilder = require('./marker.js')
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FuamFuYWNoYXQiLCJhIjoiY2p6OG1pNW4zMTk1dDNjcWl1cXg2cWxncSJ9.uLLeViGFF1ATBMV1rOCWvg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const marker = new mapboxgl.Marker(markerBuilder).setLngLat([-74.009151, 40.705086]).addTo(map);

markerBuilder('restaurant', marker)