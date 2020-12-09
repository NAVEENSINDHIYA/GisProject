var map; 
var layers=new ol.layer.Vector;
var feature=new ol.Feature;
var geojson = new ol.format.GeoJSON;
var geometryType = 'Point';
var precision = 2;
var cursorStyle = 'crosshair';
var fillColor = [255, 255, 255, 0.5];
var strokeColor = [72, 72, 72, 1];
var textColor = [strokeColor[0], strokeColor[1], strokeColor[2], 1];
var textOutlineColor = [fillColor[0], fillColor[1], fillColor[2], 0.7];
var font = 'normal 14px Arial';
var maxFeatures=1;
var  draw;

var displaylength = document.getElementById('distance');
var displayarea = document.getElementById('area');
var displayradious = document.getElementById('radious');


function selectedType(gtype)
{   
 displaylength.innerHTML = '';
	displayarea.innerHTML = '';
	displayradious.innerHTML = '';
geometryType=gtype;
  
activateDraw(geometryType);

}

function activateDraw(geometryType) 
{

	
	hoverLayer.getSource().clear();
	
	//	vectorDraw.getSource().clear();

	  var wkt = new ol.format.WKT();

//deactivateDraw();

map.addLayer(layers);

setCursor(cursorStyle);





var	sourceDraw = new ol.source.Vector();
	
var	vectorDraw = new ol.layer.Vector({
		  source: sourceDraw,
		  style: new ol.style.Style({
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
		});

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
		

		draw= new ol.interaction.Draw({
			source: vectorDraw.getSource(),
			type: geometryType,
			// style: (feature) => {
			//   return getStyle(feature);
			// }
		  });
		  map.addInteraction(draw);

draw.on('drawstart', (e) => {

	
 
  layers.getSource().clear();
  
});
	

draw.on('drawend', (e) => {






  let feature = e.feature;
  let featureClone = feature.clone();
  featureClone.getGeometry().transform('EPSG:3857', 'EPSG:4326');
  
  modifiedWKT = wkt.writeFeature(featureClone);
  map.addLayer(vectorDraw);
  
  let coords= feature.getGeometry().getCoordinates();
let firstcoords= feature.getGeometry().getFirstCoordinate();
let area=getLengthOrArea(feature);


//console.log(wkt);
alctivateLayer(modifiedWKT,area,firstcoords)



  const feat = new ol.Feature({

	geometry: e.target
  }

  );










map.removeInteraction(draw);


});
draw.setActive(true);
 

}
function alctivateLayer(wkt,area,firstcoords)
{
var layer = findlayeByName(map.getLayerGroup(), 'name','Village'); 
var lonlat = ol.proj.transform(firstcoords, 'EPSG:3857', 'EPSG:4326');

latitude= lonlat[0];
logitude=lonlat[1];


features = [];
filterdata=[];


const styles = layer.getSource().getParams().STYLES;


const url =  layer.getSource().getFeatureInfoUrl(
 
	firstcoords,
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
	
	
	features = geojson.readFeatures(response);
	features.forEach((feat) => {
		console.log(feat)
		const extent=feat.getGeometry().getExtent();
	
		hoverLayer.getSource().addFeature(feat);
	
	
	map.getView().fit(extent,{ duration: 600});

		const props = { ...feat.getProperties() };
		console.log(props)
	});


	//const extent=a.getGeometry().getExtent();
	////alert(extent);
	
	var response = JSON.parse(response);
	
const a=response.features.map(x=>x.properties)[0];

let lat=latitude;
let lon=logitude;
let stateCode=a.ST_2011;
let districtCode=a.DT_2011;
let talukaCode=a.SDT_2011;
let villageCode=a.VIL_2011;



var data={"lat":lat,"lon":lon,"stateCode":stateCode,"districtCode":districtCode,"talukaCode":talukaCode,"villageCode":villageCode,"area":area,"wkt":wkt};
var dataObjectString = JSON.stringify(data);
//var b=$.base64.encode("hello");
console.log(dataObjectString);

var enc = Base64.encode(dataObjectString);

window.open('monument?id='+enc,"_blank");
	
	 


	

	
   })



}
}






function deactivateDraw() {
	
  setCursor('');
value = null;
try {
map.removeInteraction(draw);
layers.getSource().clear();
map.removeLayer(layers);

} catch (error) {}
}



function measure(m)
{
map=m
 // Read user-defined parameters

  units= map.getView().getProjection().getUnits();


layers = new ol.layer.Vector({
	source: new ol.source.Vector(),
	style: (feature ) => {
	  return getStyle(feature);
	}
  });
  addHoverLayer();
 // activateDraw(geometryType)



}
function addHoverLayer()
  {

	
	 hoverLayer = new ol.layer.Vector({
	 	source: new ol.source.Vector()
	   });
	 
	
	 
	if (hoverStyle) {
		
		hoverLayer.setStyle(hoverStyle);
	  }
	  map.addLayer(pointLayer);
	  if (highlightFeatures) {
		  
		map.addLayer(hoverLayer);
	
	  }
			
		
		
	  
  }

function getStyle(feature)
{
	return [
	  new ol.style.Style({
		fill: new ol.style.Fill({
		  color:fillColor
		})
	  }),
	  new ol.style.Style({
		stroke: new ol.style.Stroke({
		  color: strokeColor,
		  width: 2,
		  lineDash: [5, 5]
		}),
		text: new ol.style.Text({
		  textAlign: 'center',
		  textBaseline: 'middle',
		  text: getLengthOrArea(feature),
		  font: font,
		  fill: new ol.style.Fill({
			color: textColor
		  }),
		  offsetX: 0,
		  offsetY: 0,
		  rotation: 0,
		  stroke: new ol.style.Stroke({
			color: textOutlineColor,
			width: 3
		  })
		})
	  })
	];
  }




function setCursor(cursorType)
{
	if (map) {
	  const target = map.getTarget();
	  // jQuery hack to convert the mouse cursor to a crosshair
	  const jTarget = typeof target === 'string' ? $('#' + target) : $(target);
	  jTarget.css('cursor', cursorType);
	}
}


function getLengthOrArea(feature)
  {
		
		let value = '';
		const geom= feature.getGeometry();
	     
	 




		switch (geometryType)
		{
	  
		  case 'LineString':
			try {
			  value = parseFloat(geom.getLength().toString())
				.toFixed(precision)
				.toString();
			} catch (error) {}
			break;
		  case 'Polygon':
			try {
			  value = parseFloat(geom.getArea().toString())
				.toFixed(precision)
				.toString();
			} catch (error) {}
			break;
		  case 'Circle':
			try {
			  value = parseFloat(geom.getRadius().toString())
				.toFixed(precision)
				.toString();
			} catch (error) {}
			break;
		  default:
			break;
		}
		
	  
		if (value !== '')
		{
		 
		 
			value = value;
			displaylength.innerHTML = value + ' m';
			displayarea.innerHTML = value + ' m &sup2;';
			displayradious.innerHTML = value+ ' m';
	   
		}
		
		
	  
	  
	   
		
	  
	  
	 
		return value;
	  }
