/**
 * Created by IntelliJ IDEA.
 * User: yotzapon
 * Date: 10/22/15
 * Time: 11:35 AM
 */
var prov_extent = $.getJSON('http://localhost/nhc_leafletmap/src/jsonp.php?filename=province_extend.json&callback=?', function (data) {console.log(data)});

function initmap() {

    //L.mapbox.accessToken = '<your access token here>';

    // set up the map
    //map = new L.Map('map');
    var map = L.map('map').setView([13.4925449478, 100.329052521], 6);

    //BBox Bangkok
    //x_min 	    x_max 	        y_min 	        y_max
    //100.329052521   100.938572013   13.4925449478   13.9552690081

    var prov_id = $('#prov_id');

    var southWest = L.latLng(13.4925449478, 100.329052521),
        northEast = L.latLng(13.9552690081, 100.938572013),
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



    map.fitBounds(bounds);

    map.addLayer(osm);



    // create the tile layer with correct attribution
    //var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    //var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    //var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});
    //
    //// start the map in South-East England
    //map.setView(new L.LatLng(51.3, 0.7),9);
    //map.addLayer(osm);
}