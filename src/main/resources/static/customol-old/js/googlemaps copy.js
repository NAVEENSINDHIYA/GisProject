
// function myMap() {
  
//    var directionsDisplay = new google.maps.DirectionsRenderer();
//    var map;
//    var mapProp= {
//       center:new google.maps.LatLng(23.232683,72.641768),
//       zoom:4.5,
//     };
//      map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    
//     directionsDisplay.setMap(map);
    
    
//     google.maps.event.addDomListener(document.getElementById('routebtn'), 'click', calcRoute);
   

//     }
//     function calcRoute()
//     {
//         var directionsService = new google.maps.DirectionsService();
//         var directionsDisplay = new google.maps.DirectionsRenderer();
//         var start = new google.maps.LatLng(23.1508, 72.3600);
//         var end = new google.maps.LatLng(23.1642, 72.6549);
//         var request = {
//           origin: start,
//           destination: end,
//           travelMode: google.maps.TravelMode.DRIVING
//         };
//         directionsService.route(request, function(response, status) {
//           if (status == google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(response);
//             directionsDisplay.setMap(map);
//           } else {
//             alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
//           }
//         });
//     } 