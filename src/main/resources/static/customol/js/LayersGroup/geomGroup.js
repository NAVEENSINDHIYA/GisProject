//var wmsurl='https://gis.ncog.gov.in/CoronaAPI/CoronaWMS';
var wmsurl='http://localhost:8080/geoserver/PostgresSql/wms'
var geomLayerGroup = new ol.layer.Group({
			layers : [
				
			          
			new ol.layer.Tile({
				source : new ol.source.TileWMS({
					url :'http://localhost:8080/geoserver/PostgresSql/wms',
				//	crossOrigin: 'anonymous',
					params : {
						'LAYERS' : 'geom',
						format_options:'dpi:180',
						version : '1.1.1',
						STYLES:''
					}
				}),
				showLegend: false,
				//maxResolution : 256,
				name : 'Geom',
				visible:true
			}),
			
			
			],
			name : 'GeomGroup'
		});
