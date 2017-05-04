/**
 * Created by Marc-Antoine on 2017-05-02.
 */

// Sets API Key
L.Mapzen.apiKey = 'mapzen-DJETAGd';

//Decide which div to use.
var mapsDivPath = document.getElementById("map") == null ? "mini_map" : "map";

//Creates the the map using the name of a container, the longitude and latitude, the zoom parameter and other options
//such as the map's overall look.
var map = L.Mapzen.map(mapsDivPath, {
    center: [46.8748099, -71.29067620000001],
    zoom: 13,
    tangramOptions: {
        //scene: L.Mapzen.BasemapStyles.Tron
        //scene: L.Mapzen.BasemapStyles.BubbleWrap
        //scene: L.Mapzen.BasemapStyles.Refill
        scene: L.Mapzen.BasemapStyles.Walkabout
        //scene: L.Mapzen.BasemapStyles.Cinnabar
        //scene: L.Mapzen.BasemapStyles.Zinc
    }
});


// Adds a Mapzen Search box (a.k.a. geocoder) to the map. You can either specify your key in the
// geocoder function or in a global var and add options to geocoder as follow.
var geocoderOptions = {
    placeholder: 'Search a location'
};

//Adds the oprions to the geocoder and add it to the specified map.
var geocoder = L.Mapzen.geocoder(geocoderOptions);
geocoder.addTo(map);

// Adds the options to the locator and then add it to the map.
var locator = L.Mapzen.locator();
locator.setPosition('bottomright');
locator.addTo(map);

// Adds a URL hash to a map, so you can link to map location and state.
// The Hash function accepts components whose state can be linked.
L.Mapzen.hash({
    map: map,
    geocoder: geocoder
});