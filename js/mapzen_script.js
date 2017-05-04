/**
 * Created by Marc-Antoine on 2017-05-02.
 */

// Adds a map to the 'map' div
//var map = L.Mapzen.map('map');
// Sets the center of the map to be the San Francisco Bay Area at zoom level 12
//map.setView([37.7749, -122.4194], 12);

// Sets API Key
L.Mapzen.apiKey = 'mapzen-DJETAGd';

if (document.getElementById("map") == null) {
    var map = L.Mapzen.map('mini_map', {
        center: [46.8748099, -71.29067620000001],
        zoom: 13,
        tangramOptions: {
            scene: L.Mapzen.BasemapStyles.BubbleWrap
        }
    });
} else {
    var map = L.Mapzen.map('map', {
        center: [46.8748099, -71.29067620000001],
        zoom: 13,
        tangramOptions: {
            scene: L.Mapzen.BasemapStyles.BubbleWrap
        }
    });
}

// Adds a Mapzen Search box (a.k.a. geocoder) to the map. You can either specify your key in the
// geocoder function or in a global var and add options to geocoder as follow.
var geocoderOptions = {
    placeholder: 'Search a location'
};
var geocoder = L.Mapzen.geocoder(geocoderOptions);
geocoder.addTo(map);

// Adds a geolocation control to the map to ask for geolocation authorisation and then go to the geolocation.
var locator = L.Mapzen.locator();
locator.setPosition('bottomright');
locator.addTo(map);

// Adds a URL hash to a map, so you can link to map location and state.
// The Hash function accepts components whose state can be linked.
L.Mapzen.hash({
    map: map,
    geocoder: geocoder
});