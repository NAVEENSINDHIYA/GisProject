var map;
var clickEvent;
var vectorLayer6=ol.layer.Vector;
var features= ol.Feature[10];
var geojson = new ol.format.GeoJSON;
var hoverLayer =ol.layer.Vector;
var vectorSource;
var zoomOnRowClick;
var maxFeatures;
  var highlightFeatures;
 var cursorStyle;
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
  ];
 
  var	pointStyle =[ 
   
  new ol.style.Style({
	 fill: new ol.style.Fill({
	   color: 'rgba(255, 255, 255, 0.2)'
	 }),
	 stroke: new ol.style.Stroke({
	   color: 'red',
	   width: 1
	 }),
	 image: new ol.style.Circle({
	   radius: 3,
	   fill: new ol.style.Fill({
		 color: 'red'
	   })
	 })
   })
 ];



function addGeom(m)
{
map=m;
maxFeatures = 1;
cursorStyle = 'crosshair';
zoomOnRowClick = true;
highlightFeatures = true;

addHoverLayer();
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
	 
	pointLayer = new ol.layer.Vector({
		source: new ol.source.Vector()
	   });
	 if(pointStyle)
	 {
		pointLayer.setStyle(pointStyle);
	 }
	if (hoverStyle) {
		
		hoverLayer.setStyle(hoverStyle);
	  }
	  map.addLayer(pointLayer);
	  if (highlightFeatures) {
		  
		map.addLayer(hoverLayer);
	
	  }
			
		
		
	  
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
hoverLayer.getSource().clear();
pointLayer.getSource().clear();



deactivateClick();
setCursor(cursorStyle);
 


clickEvent = (evt) =>
{

//	onFeatureSelected(evt);

//  if(vectorLayer6!=null)
//  {
	 
//  var f = vectorLayer6.getSource().getFeatures();
//  f.forEach((fe) => {
//    vectorLayer6.getSource().removeFeature(fe);
//  });
//}


    

 var lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');

 latitude= lonlat[0];
 logitude=lonlat[1];


//  this.geomService.getstaelistmap(latong,'Point').subscribe(data => this.statlistmap = data,);





 features = [];
 filterdata=[];

 if (layer instanceof ol.layer.Tile ||layer instanceof layer.Image || layer instanceof layer.Vector || layer instanceof layer.Heatmap || layer instanceof layer.Vector || layer instanceof layer.Layer  || layer instanceof layer.VectorTile)
   {


	
	const styles = layer.getSource().getParams().STYLES;
  

const url =  layer.getSource().getFeatureInfoUrl(
	 
	 evt.coordinate,
	 map.getView().getResolution(),
	 map.getView().getProjection(),
	 {
		 'INFO_FORMAT' : 'application/json',
		 'FEATURE_COUNT': maxFeatures,
	     'STYLES': styles
	
	}

   );
   
   

   if (url) {
	
	$.get(url, function(response) {
	    
		hoverLayer.getSource().clear();
		pointLayer.getSource().clear();
		
		
		features = geojson.readFeatures(response);
		demo.showSwal('success-message');
		features.forEach((feat) => {
			console.log(feat)
			const extent=feat.getGeometry().getExtent();
		
			hoverLayer.getSource().addFeature(feat);
		
		
		map.getView().fit(extent,{ duration: 600});
	
			const props = { ...feat.getProperties() };
			console.log(props)
		});
		var response = JSON.parse(response);
		
		
	const a=response.features.map(x=>x.properties)[0];
	console.log(a);
	let lat=latitude;
	let lon=logitude;
	let stateCode=a.ST_2011;
	let districtCode=a.DT_2011;
	let talukaCode=a.SDT_2011;
	let villageCode=a.VIL_2011;
	let villageName=a.VIL_NAME11;
	//selectedstate(stateCode);
	//selecteddistrict(districtCode);
	//selectedtaluka(talukaCode);
	//selectedvillage(villageCode);
	
	
	var data={"lat":lat,"lon":lon,"stateCode":stateCode,"districtCode":districtCode,"talukaCode":talukaCode,"villageCode":villageCode};
	var dataObjectString = JSON.stringify(data);
	//var b=$.base64.encode("hello");
	//console.log(b);
	
	var enc = Base64.encode(dataObjectString);
	console.log(enc);
	window.open('addgeom?id='+enc,"_blank");
		
		 


		

		
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

 function onFeatureSelected(evt= ol.Feature) {
console.log(evt);
    hoverLayer.getSource().clear();

    if (evt !== null)
     {

     // const projCode: string = this.selected.getLayer().getSource().getProjection().getCode();
      const viewProjCode = map.getView().getProjection().getCode();
     const projCode='EPSG:3857';
    // const projCode='EPSG:4326';


      const feat = evt.clone();

        feat.setGeometry(feat.getGeometry().transform(projCode, viewProjCode));

      hoverLayer.getSource().addFeature(feat);


     

        map.getView().fit(feat.getGeometry().getExtent(), {
          duration: 500
        });
      }


    
  }
function removeHoverLayer() {
   
      map.removeLayer(hoverLayer);
    
  }
function setCursor(cursorType) {
    if (map) {
      const target = map.getTarget();
      // jQuery hack to convert the mouse cursor to a crosshair
      const jTarget = typeof target === 'string' ? $('#' + target) : $(target);
      jTarget.css('cursor', cursorType);
    }
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


	
