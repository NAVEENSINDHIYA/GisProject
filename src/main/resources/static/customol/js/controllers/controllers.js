
var map;
function controllers(maps)
{
	map=maps;
}

function zoomIn()
{
		
map.getView().animate({
	      zoom: map.getView().getZoom() + 1,
	      duration: 500
	    });



	
}

function zoomOut()
{
	map.getView().animate({
	      zoom: map.getView().getZoom() - 1,
	      duration: 500
	    });
}

function defaultmap()
{
	//for Gujarat
//	var extent =  [ 66.9973, 19.4081, 75.5887, 24.9398];
	//for India
	var extent = [68.17665, 7.96553, 97.40256, 35.49401];
extent = ol.proj.transformExtent(extent, 'EPSG:4326', 'EPSG:3857');
map.getView().fit(extent);
 map.getView().animate({
     zoom: 4.7,
     duration: 600
   });

}
function fullscreen()
{

	var elem = document.getElementById('target-map');
	if (elem.requestFullscreen) {
	  elem.requestFullscreen();
	} else if (elem.msRequestFullscreen) {
	  elem.msRequestFullscreen();
	} else if (elem.mozRequestFullScreen) {
	  elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
	  elem.webkitRequestFullscreen();
	}   
}
function geolocation()
{
	
	// if (navigator.geolocation) {
	// 	navigator.geolocation.getCurrentPosition(showPosition);
	//   } else { 
	// 	alert( "Geolocation is not supported by this browser.");
	//   }

  
	

    var geolocation = new ol.Geolocation({
      tracking: true
    });


    geolocation.on('change:position', function() {
	  var coordinate = geolocation.getPosition();
	  let lat=coordinate[1];
	  let lon=coordinate[0];
	  if(lat!=null && lon!=null)
      {
        var coordMin = ol.proj.fromLonLat([lon,lat], 'EPSG:3857');
        var coordMax = ol.proj.fromLonLat([lon,lat], 'EPSG:3857');
        var extent=[coordMin[0],coordMin[1],coordMax[0],coordMax[1]];
        map.getView().fit(extent,map.getSize());
	  }
	  else 
	  {
		  alert("Position not found");
	  }

   //   map.getView().setCenter(coordinate);
    
    });
   
  
}
function showPosition(position) {
alert(position)
	var l= "Latitude: " + position.coords.latitude ;
	var lon="<br>Longitude: " + position.coords.longitude;
  }
