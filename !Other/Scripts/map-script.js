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
    var image = L.imageOverlay("!Other/Images/map.png", bounds,{
        maxZoom: 10
    }).addTo(map);
    map.fitBounds(bounds);

    // Power Island
    var marker = L.marker([236.898438, 283.625]).addTo(map)
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

    
    //map.on('click', onMapClick); 
}

