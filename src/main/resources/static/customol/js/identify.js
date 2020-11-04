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
	


var	Groupcountt=0;
	
		map.getLayers().forEach(function (layerr, i) {
			Groupcountt=i+1;
			var groupnamee=layerr.get('name');
			if(groupnamee=='Identify')
			{
			var groupcontentt='';		
			
			groupcontentt+='';
		//	<span class="togglebutton" id=layer'+i+'"><label for="visible'+i+'"><input id="visible'+i+'" class="visible" type="checkbox"/><span class="toggle"></span></label></span>
			
		
		groupcontentt +=' <div class="card-collapse" ><div class="card-header" role="tab" id="headingOne"><h5 class="mb-0"> <a data-toggle="collapse" aria-expanded="true" href="#basemap-choicee'+i+'"  aria-controls="collapseOne" class="collapsed">'+groupnamee+':<span id="'+'layerscountt'+i+'"></span><i class="material-icons">keyboard_arrow_down</i></a></h5></div><div id="basemap-choicee'+i+'" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordionn" style=""><div class="card-body" id="'+'layerr'+i+'"></div> </div></div>'; 
							
		 $('#groupss').append($(groupcontentt));		
	   
			bindInputs('#layerr' + i, layerr);
		var	subGroupcountt=0;
			if (layerr instanceof ol.layer.Group) {
				
			  layerr.getLayers().forEach(function (sublayerr, j) {
				subGroupcountt=j+1;
		 var basecontentt = '';
				let layernamee=sublayerr.get('name');
					 
					 basecontentt += '<div class="togglebutton" id="layerr'+i+j+'"><label for="visiblee'+i+j+'"> <input id="visiblee'+i+j+'" type="checkbox" class="visible" /> <span class="toggle"></span>'+layernamee+'</label>  </div>';

					 $('#layerr'+i).append($(basecontentt));

				bindInputss('#layerr' + i + j, sublayerr);
			  });
			  $('#layerscountt'+i).append(subGroupcountt);
			 
			}
		}
		
		  });
		 
		  $('#groupscountt').append(Groupcountt);

		 
	



	
}
function bindInputss(layerid, layer)
{
	var visibilityInput = $(layerid + ' input.visible');
	
	visibilityInput.on('change', function () {
		
	  layer.setVisible(this.checked);
	  
	  if(layer.getVisible()==true)
	  {
		
		activateClick(layer); 
	  }
	  else{
		deactivateClick();
	  }
	});
	visibilityInput.prop('checked', layer.getVisible());
	

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
	
	console.log(layer)
	var layername=layer.get('name');
//	 hoverLayer.getSource().clear();
	 deactivateClick();
	 

	 clickEvent = (evt) =>
	 {

	    



	      let lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');

	      latitude= lonlat[0];
	     logitude=lonlat[1];

	     features = [];
	      filterdata=[];

	      if (layer instanceof ol.layer.Tile ||layer instanceof ol.layer.Image || layer instanceof ol.layer.Vector || layer instanceof ol.layer.Heatmap || layer instanceof ol.layer.Vector || layer instanceof ol.layer.Layer  || layer instanceof ol.layer.VectorTile)
	    { 
	    	

			var url = layer.getSource().getFeatureInfoUrl(
				evt.coordinate,
				map.getView().getResolution(),
				 'EPSG:3857', {
					'INFO_FORMAT' : 'application/json',
					
				
				});
			
			if (url)
			 {


				$.get(url, function(response) {
			


					
					response = JSON.parse(response);
					
						{
							{
								const a=response.features.map(x=>x.properties)[0];
								console.log(a);
							
								if(layername=='Rail')
								{

								
									
									 content.innerHTML = '<p style="color:green;">ID:<span style="color:black">' + a.bsid + '</span></p><p style="color:green;">Name:<span style="color:black">' + a.name + '</span></p>';
								}
							if(layername=='National Highway')
							{

							
								
								 content.innerHTML = '<p style="color:green;">ID:<span style="color:black">' + a.objectid + '</span></p><p style="color:green;">Name:<span style="color:black">' + a.name + '</span></p>';
							}
							if(layername=='Park Boundry')
							{
								
								 content.innerHTML = '<p style="color:green;">Statename:<span style="color:black">' + a.st_name + '</span></p><p style="color:green;">District:<span style="color:black">' + a.dist_name + '</span></p><p style="color:green;">Taluka:<span style="color:black">' + a.sub_dist + '</span></p><p style="color:green;">Village:<span style="color:black">' + a.vname + '</span></p><p style="color:green;">Park Name:<span style="color:black">' + a.park_name + '</span></p><p style="color:green;">Park Type:<span style="color:black">' + a.park_type + '</span></p>';
							}
								 overlay.setPosition(evt.coordinate);	
									
						    }
							
							}
									
							});
			
				
			  }
			  else{
				  alert("NOt Suported");
			  }

	        
	      }
	     else

	       {
	        alert('Currently only WMS query is supported. Please select another layer!')
	         
	         
	        
	      }
	    };
	    map.on('singleclick', clickEvent);
	
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
