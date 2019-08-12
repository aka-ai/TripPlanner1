const mapbox = require('mapbox-gl')

const markerBuilder = (place, location) => {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";

    if (place === 'activity') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    } else if (place === 'hotel') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    } else if (place === 'restaurant') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }
    return new mapbox.Marker(markerDomEl).setLngLat(location).addTo(map);
}

export default markerBuilder;