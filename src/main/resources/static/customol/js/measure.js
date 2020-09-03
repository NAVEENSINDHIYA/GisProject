    var map; 
    var layers=new ol.layer.Vector;
    var feature=new ol.Feature;
    var geometryType;
    var precision = 2;
    var cursorStyle = 'crosshair';
    var fillColor = [255, 255, 255, 0.5];
    var strokeColor = [72, 72, 72, 1];
    var textColor = [strokeColor[0], strokeColor[1], strokeColor[2], 1];
    var textOutlineColor = [fillColor[0], fillColor[1], fillColor[2], 0.7];
    var font = 'normal 14px Arial';
  
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
	activateDraw();
	
}

function activateDraw() 
{
    deactivateDraw();
  
    map.addLayer(layers);

    setCursor(cursorStyle);
    draw= new ol.interaction.Draw({
      source: layers.getSource(),
      type: geometryType,
      style: (feature) => {
        return getStyle(feature);
      }
    });
    
    
  
    draw.on('drawstart', (e) => {
    
    	
     
      layers.getSource().clear();
    });
   draw.on('drawend', (e) => {

      let feature = e.feature;
    let coords= feature.getGeometry().getCoordinates();
   
   
    Addpolygongeometry(coords);

   

      const feat = new ol.Feature({

        geometry: e.target
      }

      );
     
 
 //  getLengthOrArea(feat);
  
    });
    draw.setActive(true);
    map.addInteraction(draw);
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
  
 function  Addpolygongeometry(p)
 {
	 
	    let cordinate = '';
	    switch (geometryType) {
	  

	      case 'LineString':
	        try {
	          cordinate = 'POINT(('+p+'))';
	        } catch (error) {}
	        break;
	      case 'Polygon':
	        try {
	          cordinate = 'POLYGON(('+p+'))';
	        } catch (error) {}
	        break;
	      case 'Circle':
	        try {
	          cordinate = 'CIRCLE(('+p+'))';
	        } catch (error) {}
	        break;
	      default:
	        break;
	    }
	    if (cordinate !== '') {
	    	
	      cordinate += cordinate;
	    
	     
	    }
	   
	    return cordinate;
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
