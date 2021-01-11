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

function findbylocation(maps)
{
	
	map=maps;
	
	
	
	
	 var layer = findlayeByName(map.getLayerGroup(), 'name','Village'); 
	
	activateClick(layer);
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
	 
	 
	
	 
	 
	 
	 
	 
	 
	 
	 clickEvent = (evt) => {
console.log(vectorLayer6);
	     // if(layer!=null)
	     /* {
	    features = layer.getSource().getFeatures();
	      features.forEach((feature) => {
	    	  layer.getSource().removeFeature(feature);
	      }); */  
	   //  }



	      let lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');

	      latitude= lonlat[0];
	     logitude=lonlat[1];


	    //  this.geomService.getstaelistmap(latong,'Point').subscribe(data => this.statlistmap = data,);





	     features = [];
	      filterdata=[];

	      if (layer instanceof ol.layer.Tile ||layer instanceof ol.layer.Image || layer instanceof ol.layer.Vector || layer instanceof ol.layer.Heatmap || layer instanceof ol.layer.Vector || layer instanceof ol.layer.Layer  || layer instanceof ol.layer.VectorTile)
	        {
	    	
	        const url = _getFeatureInfoUrl(
	          layer.getSource(),
	          evt.coordinate,
	          map.getView().getResolution(),
	          map.getView().getProjection(),

	        );
	      }

/*	        if (url)
	        {
	        	
	        	
	        
	        	$.get(url, function(response)
	        			
	        			{	
					  response = JSON.parse(response);
					  
					 var a= response.features[0].properties.vill_id  
	        			
	        		 
	        		 
	        		 
	       

	            if (data.hasOwnProperty('features'))
	            {

	              // convert the GeoJSON response to Feature array
	              features = geojson.readFeatures(data);


	            
	              features.forEach((feat) => {
	                const props = { ...feat.getProperties() };
                   console.log(props.dist_id);

	                         });


	            
	             
	            }
	          });


	        }
	      }
	     else

	       {
	        alert('Currently only WMS query is supported. Please select another layer!')
	         
	         
	        
	      }*/
	    };
	    map.on('singleclick', clickEvent);
	 
	 
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

function _getFeatureInfoUrl( source,coordinate,resolution, srs)
   {

	    const styles = source.getParams().hasOwnProperty('STYLES')
	      ? source.getParams().STYLES
	      : '';
	     /* const url = source.getSource().getGetFeatureInfoUrl(
	    		  coordinate, resolution, 'EPSG:3857',
			      {'INFO_FORMAT': 'application/json'});	*/
	    
	    const url = source.getGetFeatureInfoUrl(coordinate, resolution, srs,{
	      INFO_FORMAT: 'application/json',
	      FEATURE_COUNT: maxFeatures,
	      STYLES: styles
	     
	    });
	      
	     /* const url = source.getGetFeatureInfoUrl(coordinate, resolution, 'EPSG:3857',
	    	  {'INFO_FORMAT': 'application/json'})*/

	    return url;
	  }