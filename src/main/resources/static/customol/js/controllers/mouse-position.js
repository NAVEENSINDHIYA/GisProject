function getMousePosition(map)
{
	var  latnong=fromLotlong(map.getView().getCenter());

	var pointerMoveListener = map.on('pointermove', (evt) => {
	       if (evt.dragging)
	        {
	         return;
	       }
	        else
	        {
	      
	 
	        latnong = fromLotlong(evt.coordinate);
	 
	        document.getElementById("latlon").innerHTML=latnong;
	       }
	      
	     });
	document.getElementById("latlon").innerHTML=latnong;


		     
	function fromLotlong(coords)
	{

		  let lonlat = ol.proj.transform(coords, 'EPSG:3857', 'EPSG:4326');	
	      let  formattedLatlong= [];
          return formattedLatlong=lonlat.map(x=>x.toFixed(4));

	
	  
	}


}