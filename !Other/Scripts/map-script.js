function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

function createMap() {
    var bounds = [[0, 0], [472, 750]];
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -0.5,
        maxZoom: 2,
        maxBounds: bounds,
        maxBoundsViscosity: 0.2
    }).setView([0, 0], 0);
    var image = L.imageOverlay("!Other/Images/map.png", bounds, {
        maxZoom: 10
    }).addTo(map);
    map.fitBounds(bounds);

    map.on('click', onMapClick); 

    // Power Island
    var marker = L.marker([236.898438, 283.625]).addTo(map)
    marker.bindPopup("<a href=\"../Regions/Coal's-Mouth/City-of-Dawn-Lake\" class=\"internal alias leaflet-popup-link\" data-slug=\"Regions/Coal's-Mouth/City-of-Dawn-Lake\">Power Island</a><div class=\"leaflet-popup-text\">Power Island is the location of the final Aspect Cube. The Cube of Power.</div>");
    // New Horizon
    marker = L.marker([287.398438, 508.875]).addTo(map)
    marker.bindPopup("<a href=\"../Regions/Coal's-Mouth/City-of-Dawn-Lake\" class=\"internal alias leaflet-popup-link\" data-slug=\"Regions/Coal's-Mouth/City-of-Dawn-Lake\">New Horizon City</a><div class=\"leaflet-popup-text\">Power Island is the location of the final Aspect Cube. The Cube of Power.</div>");
    // Nazumukisre
    marker = L.marker([156.148438, 357.375]).addTo(map)
    marker.bindPopup("<a href=\"../Regions/Coal's-Mouth/City-of-Dawn-Lake\" class=\"internal alias leaflet-popup-link\" data-slug=\"Regions/Coal's-Mouth/City-of-Dawn-Lake\">Nazumukisre</a><div class=\"leaflet-popup-text\">Power Island is the location of the final Aspect Cube. The Cube of Power.</div>");
    // Watson
    marker = L.marker([286.898438, 353.875]).addTo(map)
    marker.bindPopup("<a href=\"../Regions/Coal's-Mouth/City-of-Dawn-Lake\" class=\"internal alias leaflet-popup-link\" data-slug=\"Regions/Coal's-Mouth/City-of-Dawn-Lake\">Watson City</a><div class=\"leaflet-popup-text\">Power Island is the location of the final Aspect Cube. The Cube of Power.</div>");
    // Tower of Navaressu 
    marker = L.marker([125.898438, 498.625]).addTo(map)
    marker.bindPopup("<a href=\"../Regions/Coal's-Mouth/City-of-Dawn-Lake\" class=\"internal alias leaflet-popup-link\" data-slug=\"Regions/Coal's-Mouth/City-of-Dawn-Lake\">Tower of Navaressu</a><div class=\"leaflet-popup-text\">Power Island is the location of the final Aspect Cube. The Cube of Power.</div>");
    // Bambourgh
    marker = L.marker([190.398438, 454.375]).addTo(map)
    marker.bindPopup("<a href=\"../Regions/Coal's-Mouth/City-of-Dawn-Lake\" class=\"internal alias leaflet-popup-link\" data-slug=\"Regions/Coal's-Mouth/City-of-Dawn-Lake\">Bambourgh</a><div class=\"leaflet-popup-text\">Power Island is the location of the final Aspect Cube. The Cube of Power.</div>");
    // Kozi's Kingdom 
    marker = L.marker([224.648438, 190.875]).addTo(map)
    marker.bindPopup("<a href=\"../Regions/Coal's-Mouth/City-of-Dawn-Lake\" class=\"internal alias leaflet-popup-link\" data-slug=\"Regions/Coal's-Mouth/City-of-Dawn-Lake\">Kozi's Kingdom</a><div class=\"leaflet-popup-text\">Power Island is the location of the final Aspect Cube. The Cube of Power.</div>");
    // Western Capitals 
    marker = L.marker([252.898438, 67.875]).addTo(map)
    marker.bindPopup("<a href=\"../Regions/Coal's-Mouth/City-of-Dawn-Lake\" class=\"internal alias leaflet-popup-link\" data-slug=\"Regions/Coal's-Mouth/City-of-Dawn-Lake\">Western Capitals</a><div class=\"leaflet-popup-text\">Power Island is the location of the final Aspect Cube. The Cube of Power.</div>");
    // Naeron
    marker = L.marker([270.148438, 665.625]).addTo(map)
    marker.bindPopup("<a href=\"../Regions/Coal's-Mouth/City-of-Dawn-Lake\" class=\"internal alias leaflet-popup-link\" data-slug=\"Regions/Coal's-Mouth/City-of-Dawn-Lake\">Naeron</a><div class=\"leaflet-popup-text\">Power Island is the location of the final Aspect Cube. The Cube of Power.</div>");
    
    var mediumMarkers = new L.FeatureGroup();
    //West Bay 
    marker = L.marker([300.898438, 525.125])
    marker.bindPopup("<a href=\"../Regions/Coal's-Mouth/City-of-Dawn-Lake\" class=\"internal alias leaflet-popup-link\" data-slug=\"Regions/Coal's-Mouth/City-of-Dawn-Lake\">West Bay</a><div class=\"leaflet-popup-text\">Power Island is the location of the final Aspect Cube. The Cube of Power.</div>");
    mediumMarkers.addLayer(marker)

    marker = L.marker([273.296875, 158.25])
    marker.bindPopup("<a href=\"../Regions/Coal's-Mouth/City-of-Dawn-Lake\" class=\"internal alias leaflet-popup-link\" data-slug=\"Regions/Coal's-Mouth/City-of-Dawn-Lake\">Rat Town</a><div class=\"leaflet-popup-text\">Power Island is the location of the final Aspect Cube. The Cube of Power.</div>");
    mediumMarkers.addLayer(marker)

    map.on('zoomend', function () {
        if (map.getZoom() <= 0) {
            map.removeLayer(mediumMarkers);
        }
        else {
            map.addLayer(mediumMarkers);
        }
    });
};