var map;
var clickEvent;
var vectorLayer6=ol.layer.vector;
var features= ol.Feature[10];
var geojson = new ol.format.GeoJSON;
var hoverLayer =ol.layer.Vector;

  var highlightFeatures=true;
 var cursorStyle= 'pointer';
 var hoverStyle= [
	new ol.style.Style({
	  fill: new ol.style.Fill({
		color: [255, 255, 0, 0.5]
	  }),
	  stroke: new ol.style.Stroke({
		color: [0,204,0,1],
		width: 4
	  })
	})
  ]

function addGeom(m)
{
map=m;

//addHoverLayer();
}
$("#geom").bind("click", function() {
    var layer = findlayeByName(map.getLayerGroup(), 'name','Village'); 
activateGeomLayer(layer);

  });
function addHoverLayer()
  {
	hoverLayer = new ol.layer.Vector({
		source: new ol.source.Vector()
	  });
	  
	//	hoverLayer.setStyle(hoverStyle);
	
	  
  
		map.addLayer(hoverLayer);
	  
  }
  function customStyleFunction ()
  {
   return  [
            new ol.style.Style({
              fill: new ol.style.Fill({
                color: [255, 255, 0, 0.5]
              }),
              stroke: new ol.style.Stroke({
                color: [0,204,0,1],
                width: 4
              })
            })
          ];
  }
function activateGeomLayer(layer)
{
console.log(layer);
//hoverLayer.getSource().clear();
layer.getSource().clear();
  map.removeLayer(layer);
deactivateClick();
setCursor(cursorStyle);
//addHoverLayer();

clickEvent = (evt) =>
{

 if(vectorLayer6!=null)
 {
 var features = vectorLayer6.getSource().getFeatures();
 features.forEach((feature) => {
   vectorLayer6.getSource().removeFeature(feature);
 });
}



 var lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');

 latitude= lonlat[0];
 logitude=lonlat[1];


//  this.geomService.getstaelistmap(latong,'Point').subscribe(data => this.statlistmap = data,);





 features = [];
 filterdata=[];

 if (layer instanceof ol.layer.Tile ||layer instanceof layer.Image || layer instanceof layer.Vector || layer instanceof layer.Heatmap || layer instanceof layer.Vector || layer instanceof layer.Layer  || layer instanceof layer.VectorTile)
   {

   const url =  layer.getSource().getFeatureInfoUrl(
	 
	 evt.coordinate,
	 map.getView().getResolution(),
	 map.getView().getProjection(),
	 {'INFO_FORMAT' : 'application/json'}

   );

   if (url) {
	
	$.get(url, function(response) {
	    

	
	
		
		var response = JSON.parse(response);
		
	const a=response.features.map(x=>x.properties)[0];
	var stateCode=a.ST_2011
	console.log(stateCode);

	
		

	
		
		 


		

		
	   })
	


   }
 }
else

  {
  alert(
	 'Currently only WMS query is supported. Please select another layer!'
	
   );
 }


}
map.on('singleclick', clickEvent);








}
function addHoverLayer()
{
	
	
	    
	      hoverLayer.setStyle(hoverStyle);
	
	   

	      map.addLayer(hoverLayer);
	    
}
function setCursor(cursorType) {
    if (map) {
      const target = map.getTarget();
      // jQuery hack to convert the mouse cursor to a crosshair
      const jTarget = typeof target === 'string' ? $('#' + target) : $(target);
      jTarget.css('cursor', cursorType);
    }
  }
// function deactivateClick() {
//     setCursor('');
//     if (clickEvent) {
//       map.un('singleclick', sclickEvent);
//     }
//   }
function _getFeatureInfoUrl( source,coordinate,resolution, srs)
{

 //const styles = source.getParams().STYLES;
const url=source.getGetFeatureInfoUrl(coordinate, resolution, srs,{
 INFO_FORMAT: 'application/json',
	FEATURE_COUNT:10,
	//LAYERS: styles
});

 return url;
	 
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