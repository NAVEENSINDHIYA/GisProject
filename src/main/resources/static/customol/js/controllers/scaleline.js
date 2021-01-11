function scaleline(map)
{
	 let target = map.getTarget();
	 console.log(target);
	 const scaleLineControl = new ol.control.ScaleLine({
	      target: document.getElementById(scale),
	      
	    });
	 map.addControl(scaleLineControl);
	
	  
}

