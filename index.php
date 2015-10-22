<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Mapbox Styles -->
    <link rel="stylesheet" type="text/css" href="assets/js/lib/mapbox.js/mapbox.css" />

    <!-- Leaflet Styles -->
    <link rel="stylesheet" type="text/css" href="assets/js/lib/leaflet/dist/leaflet.css" />

    <!-- Site Styles -->
    <style>
        html, body, #map {
            height:100%;
            width:100%;
            padding:0px;
            margin:0px;
        }
    </style>

    <title>NHC-IGIS</title>
</head>
<body>

    <div id="map"></div>
    <input type='hidden' name='prov_id' id='prov_id' value="<?php echo $_GET['prov_id'];?>">


    <!-- jQuery JS -->
    <script type="text/javascript" src="assets/js/lib/jquery/dist/jquery.min.js"></script>

    <!-- Mapbox JS -->
    <script type="text/javascript" src="assets/js/lib/mapbox.js/mapbox.js"></script>

    <!-- Leaflet JS -->
    <script type="text/javascript" src="assets/js/lib/leaflet/dist/leaflet.js"></script>

    <!-- Site JS -->
    <script src="assets/js/lib/nhc_map.js"></script>

    <script type="text/javascript">

        $(document).ready(function() {
            initmap();
        });

    </script>
</body>
</html>