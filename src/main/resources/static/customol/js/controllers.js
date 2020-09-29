
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
	
	

  
	

    var geolocation = new ol.Geolocation({
      tracking: true
    });


    geolocation.on('change:position', function() {
      var coordinate = geolocation.getPosition();
      map.getView().setCenter(coordinate);
    
    });
   
  
}