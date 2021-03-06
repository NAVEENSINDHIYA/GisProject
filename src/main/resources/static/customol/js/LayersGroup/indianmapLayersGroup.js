//var wmsurl='https://gis.ncog.gov.in/CoronaAPI/CoronaWMS';
var wmsurl='https://gis.ncog.gov.in/GISWeb/wms';
//var wmsurl='https://gis.ncog.gov.in/GeoserverWebAPI/wms62'
var st="STCODE11='03'";
var di="dtcode11 ='037'";
var ta="dtcode11 ='037'";
var vil="DT_2011 ='037'";

var indianMapLayersGroup = new ol.layer.Group({
			layers : [
				
			          
			new ol.layer.Tile({
				source : new ol.source.TileWMS({
					url :wmsurl,// 'http://192.168.1.89:8090/geoserver/cite/wms',
					crossOrigin: 'anonymous',
					params : {
						'LAYERS' : 'VillageIndia',
						format_options:'dpi:180',
						version : '1.1.1',
				//		CQL_FILTER : vil
					}
				}),
				showLegend: true,
				maxResolution : 256,
				name : 'Village',
				visible:true
			}),

			new ol.layer.Tile({
				source : new ol.source.TileWMS({
					url : wmsurl,//'http://192.168.1.89:8090/geoserver/cite/wms',
					crossOrigin: 'anonymous',
					params : {
						layers : 'TalukaIndia',
						version : '1.1.1',format_options:'dpi:110',
				//		CQL_FILTER : ta
					}
				}),
				showLegend: true,
				maxResolution : 1024,
				name : 'Taluka',
				visible:true
			}),

			new ol.layer.Tile({
				source : new ol.source.TileWMS({
					url :wmsurl,// 'http://192.168.1.89:8090/geoserver/cite/wms',
					crossOrigin: 'anonymous',
					params : {
						layers : 'DistrictIndia',
					//	CQL_FILTER : di,
						version : '1.1.1',format_options:'dpi:110'
						//version : '1.1.1',CQL_FILTER : 'dtcode11 IN (001,003,004)' ,format_options:'dpi:110' 
					}
				}),
				showLegend: true,
				maxResolution : 2048,
				name : 'District',
				visible:true
					
			})
		,


	 
			new ol.layer.Tile({
				source : new ol.source.TileWMS({
					url :   wmsurl,// 'http://192.168.1.89:8090/geoserver/cite/wms',
					crossOrigin: 'anonymous',
					params : {
						layers : 'StateIndia',
					//	CQL_FILTER : st,
						version : '1.1.1',format_options:'dpi:110',
						//CQL_FILTER : di
						//version : '1.1.1',CQL_FILTER : 'STCODE11 IN (01,02,004)' ,format_options:'dpi:110' 
					}
				}),
				styles:'IndiaState',
				showLegend: true,
				visible:true,
				name : 'State'
			}),
			],
			name : 'India Boundaries'
		});
