var map;
var clickEvent;
var range = document.getElementById('range');
var value=document.getElementById('bufferrange').defaultValue;
var selecterange=value;

function buffer(m)
{
	map=m;
range.innerHTML=value;
	
	
	
}
$("#buffer").bind("click", function() {
   
	activatebuffer();
});
function activatebuffer()
{
	
	deactivateClick();
	setCursor(cursorStyle);
	
	clickEvent = (evt) => {
	//	map.removeLayer(vectorLayer_buffer);
	//	vectorSource.getSource().clear();
	var	features=[];
		var lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
  
		var lat= lonlat[0];
		var lon=lonlat[1];
		var coordMin = ol.proj.fromLonLat([lon,lat], 'EPSG:3857');
		var coordMax = ol.proj.fromLonLat([lon,lat], 'EPSG:3857');
	    var extent=[coordMin[0],coordMin[1],coordMax[0],coordMax[1]];
		
		
  
	   extent = ol.proj.transformExtent(extent, 'EPSG:4326', 'EPSG:3857');
  
		
		map.getView().fit(extent);
		  map.getView().setCenter(ol.proj.transform([lat, lon], 'EPSG:4326', 'EPSG:3857'));
  
		  map.getView().setZoom(12);
  
  
		getvillagebuffer(lat,lon,selecterange);
		console.log(value)
		var point = new ol.geom.Circle(ol.proj.transform([lat,lon],'EPSG:4326', 'EPSG:3857'),selecterange*1210);
		  console.log(point.getCenter());
		  console.log(point);
		  var pointFeature = new ol.Feature(point);
		  features.push(pointFeature);
  
  
		  var vectorSource = new ol.source.Vector({
			projection: 'EPSG:4326',
			  features: features
		  });
		 var vectorLayer_buffer = new ol.layer.Vector({
					source : vectorSource,
					style : customStyleFunction()
		  });
  console.log(vectorLayer_buffer)
		  map.addLayer(vectorLayer_buffer);
  
  
  
  
  
	  };
  
  
  
  
	  map.on('singleclick', clickEvent);
}
function customStyleFunction()
{
	return [ new ol.style.Style({
		fill : new ol.style.Fill({

		  opacity : 0.6,
		  color : 'rgba(255,255,204,0.3)'
		}),
		stroke : new ol.style.Stroke({
		  width : 2,

		  color : 'red',
		  radius : 1
		}),
		image : new ol.style.Circle({
		  fill : new ol.style.Fill({

			color : 'rgba(51, 204, 255,0.3)'
		  }),
		  stroke : new ol.style.Stroke({
			width : 1,
			color : 'blue'

		  }),
		  radius : 3
		}),
	  })];


}
var bufferrange=$('#bufferrange');
bufferrange.on('change', function () {
	
		range.innerHTML = '';
		
		 if(this.value!=="")
		 {
			range.innerHTML = this.value ;
			selecterange=this.value;
		 }
			
			
			
			
	   
		
		

	  });
	  function getvillagebuffer(lat,lon,value)
	  {
		 
		var  features = [];
		// $.ajaxSetup({
		// 	   async: false
		// 	 });
		// $.getJSON("getVillageBuffer", {
		// 	lat : lat,
		// 	lon : lon,
		// 	range : range
		// }, function(j) {
		// 	var geomP, feature;
	
		// 	console.log(lat+"---"+lon);		
	
		// 		for (var i = 0; i < j.length; i++) {
		// 			latitude=j[i].lon;
		// 			longitude=j[i].lat;			
		// 			geomP = new ol.geom.Point(  ol.proj.transform([parseFloat(latitude), parseFloat(longitude) ], 'EPSG:4326', 'EPSG:3857'));
		// 				feature = new ol.Feature(geomP);
		// 				features.push(feature);
		// 		}
		// });
		
	
	  }