// export //const funcName = ()=>{}

// const activityMarkerDomEl = document.createElement("div");
// activityMarkerDomEl.style.width = "32px";
// activityMarkerDomEl.style.height = "39px";
// activityMarkerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// const hotelMarkerDomEl = document.createElement("div");
// hotelMarkerDomEl.style.width = "32px";
// hotelMarkerDomEl.style.height = "39px";
// hotelMarkerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

// const restaurantMarkerDomEl = document.createElement("div");
// restaurantMarkerDomEl.style.width = "32px";
// restaurantMarkerDomEl.style.height = "39px";
// restaurantMarkerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

import mapbox from "mapbox-gl";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",//cordinates : [-4353453]
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here
    //send activity, cordinates

    for(let key in iconURLs){
        if(key === type){
           iconURLs.codinates = coords;
        }
    }

    // const map = new mapboxgl.Map({
    //     container: "map",
    //     center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    //     zoom: 12, // starting zoom
    //     style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
    //   });

    // const markerDomEl = document.createElement("div");
    // markerDomEl.style.width = "32px";
    // markerDomEl.style.height = "39px";
    // markerDomEl.style.backgroundImage = "url()";

};

export default buildMarker;</