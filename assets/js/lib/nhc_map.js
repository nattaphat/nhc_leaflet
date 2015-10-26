/**
 * Created by IntelliJ IDEA.
 * User: yotzapon
 * Date: 10/22/15
 * Time: 11:35 AM
 */

L.mapbox.accessToken = 'pk.eyJ1IjoieW90emEiLCJhIjoiY2lnMXA5eWcxMTEzbHR6a3ZybnZhamlxYSJ9.1TE4ciL1rUigurFO2L2HZg';
var map = new L.Map('map');

function initmap() {

    var prov_id = $('#prov_id').val();
    var url = 'http://localhost/nhc_leafletmap/src/jsonp.php?filename=province_extend.json&callback=?&prov_id=' + prov_id;
    if (!prov_id) prov_id = 10;



    $.getJSON(url, function (bbox) {
        //console.log(bbox);
        // set up the map
        //var map = L.map('map').setView([13.4925449478, 100.329052521], 6);

        //BBox Bangkok
        //x_min 	    x_max 	        y_min 	        y_max
        //100.329052521   100.938572013   13.4925449478   13.9552690081

        var southWest = L.latLng(bbox.y_min, bbox.x_min),
            northEast = L.latLng(bbox.y_max, bbox.x_max),
            bounds = L.latLngBounds(southWest, northEast);

        var osm = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieW90emEiLCJhIjoiY2lnMXNpYmZuMTJwYXVybTNvbjJxbjNvciJ9.PVXO9b4mzrd87l_yIUk3nw', {
            maxZoom: 18,
            minZoom: 10,
            maxBounds: bounds,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        });

        map.addLayer(osm);
        map.fitBounds(bounds);
    });


}

function overlaySukhothaiProv()
{
    //Overlay Sukhothai Province
    L.mapbox.featureLayer()
        .loadURL('./data/sukhothai_prov.geojson')
        .addTo(map);
}

