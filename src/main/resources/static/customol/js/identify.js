var map;
var maxFeatures =10;
var cursorStyle = 'crosshair';
var placeholder = 'Select query layer';
var zoomOnRowClick = true;
var hlightFeatures = true;

var clickEvent;
var vectorLayer6= new ol.layer.Vector;
var features= new ol.Feature;
var hoverLayer = new ol.layer.Vector({
    source: new ol.source.Vector()
  });
var latitude;
var logitude;
var geojson=new  ol.format.GeoJSON();
var WMSGetFeatureInfo=ol.format.WMSGetFeatureInfo;

function identify(maps)
{
	
	map=maps;
	
	 var layer = findlayeByName(map.getLayerGroup(), 'name','Airport'); 
	
	//activateClick(layer);
}

function findlayeByName(layer, key, value) {

	if (layer.get(key) === value) {
		return layer;
	}
	// Find recursively if it is a group
	if (layer.getLayers) {
		var layers = layer.getLayers().getArray(), len = layers.length, result;
		for (var i = 0; i < len; i++) {
			result = findlayeByName(layers[i], key, value);
			if (result) {
				return result;
			}
		}
	}
	return null;
}

function addHoverLayer()
{
	
	
	    if (placeholder) {
	      hoverLayer.setStyle(hoverStyle);
	    }
	    if (highlightFeatures) {

	      map.addLayer(hoverLayer);
	    }
}
function activateClick(layer)
{
	 hoverLayer.getSource().clear();
	 deactivateClick();
	 

// 	 clickEvent = (evt) =>
// 	 {

	    



// 	      let lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');

// 	      latitude= lonlat[0];
// 	     logitude=lonlat[1];

// 	     features = [];
// 	      filterdata=[];

// 	      if (layer instanceof ol.layer.Tile ||layer instanceof ol.layer.Image || layer instanceof ol.layer.Vector || layer instanceof ol.layer.Heatmap || layer instanceof ol.layer.Vector || layer instanceof ol.layer.Layer  || layer instanceof ol.layer.VectorTile)
// 	    { 
	    	

// 			var url = layer.getSource().getFeatureInfoUrl(
// 				evt.coordinate,
// 				map.getView().getResolution(),
// 				 'EPSG:3857', {
// 					'INFO_FORMAT' : 'application/json',
					
				
// 				});
			
// 			if (url)
// 			 {


// 				$.get(url, function(response) {
			


					
// 					response = JSON.parse(response);
					
// 						{
// 							{
// 								 dataId = response.features[0].id;
// 								dataId = dataId.split(".");
// 							//	alert(dataId);
// 								var coordinate = evt.coordinate;
  

//   content.innerHTML = '<p>You clicked here:</p><code>' + dataId + '</code>';
//   overlay.setPosition(coordinate);	
									
// 						    }
							
// 							}
									
// 							});
			
				
// 			  }
// 			  else{
// 				  alert("NOt Suported");
// 			  }

	        
// 	      }
// 	     else

// 	       {
// 	        alert('Currently only WMS query is supported. Please select another layer!')
	         
	         
	        
// 	      }
// 	    };
// 	    map.on('singleclick', clickEvent);
	
}


function deactivateClick() {
    setCursor('');
    if (clickEvent) {
      map.un('singleclick', sclickEvent);
    }
  }

function setCursor(cursorType) {
    if (map) {
      const target = map.getTarget();
      // jQuery hack to convert the mouse cursor to a crosshair
      const jTarget = typeof target === 'string' ? $('#' + target) : $(target);
      jTarget.css('cursor', cursorType);
    }
  }

function getFeatureInfoUrl( source,coordinate,resolution, srs)
   {

	const styles = source.getParams().hasOwnProperty('STYLES')
	? source.getParams().STYLES
	: '';
  return source.getGetFeatureInfoUrl(coordinate, resolution, srs,{
	INFO_FORMAT: 'application/json',
//	FEATURE_COUNT: maxFeatures,
//	STYLES: styles
  });

 // return url;
	    
	  }
