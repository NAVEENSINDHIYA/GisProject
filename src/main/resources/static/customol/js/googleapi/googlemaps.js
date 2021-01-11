function mapLocation() {
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;

    function initialize() {
        directionsDisplay = new google.maps.DirectionsRenderer();
       
        var mapOptions = {
            zoom: 4.5 ,
            center:new google.maps.LatLng(23.232683,72.641768),
        };
        map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
        directionsDisplay.setMap(map);
        google.maps.event.addDomListener(document.getElementById('routebtn'), 'click', calcRoute);
    }

    function calcRoute() {
        var start = new google.maps.LatLng(23.1508, 72.3600);
         var end = new google.maps.LatLng(23.1642, 72.6549);

        var bounds = new google.maps.LatLngBounds();
        bounds.extend(start);
        bounds.extend(end);
        map.fitBounds(bounds);
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map);
            } else {
                alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
            }
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
}
mapLocation();