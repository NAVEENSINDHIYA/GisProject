var CommonlayersGroup = new ol.layer.Group({
			layers : [
					
							new ol.layer.Tile({
										visible : false,
										preload : Infinity,
										 opacity: 1,
										source : new ol.source.BingMaps(
												{
													key : 'Auw0s19PwLEd-w-GFNBPzqs2lekVJE5KjKtxg0EwzB6nuvocKYwMJ7ZJnfnltPgM',     //'AkGbxXx6tDWf1swIhPJyoAVp06H0s0gDTYslNWWHZ6RoPqMpB9ld5FY1WutX8UoF',
													imagerySet : 'Aerial'
												// use maxZoom 19 to see stretched tiles instead of the BingMaps
												// "no photos at this zoom level" tiles
												// maxZoom: 19
												}),
										name : 'Aerial'
									}),
							new ol.layer.Tile({
										visible : false,
										preload : Infinity,
										source : new ol.source.BingMaps({
													key :'Auw0s19PwLEd-w-GFNBPzqs2lekVJE5KjKtxg0EwzB6nuvocKYwMJ7ZJnfnltPgM',     //'AkGbxXx6tDWf1swIhPJyoAVp06H0s0gDTYslNWWHZ6RoPqMpB9ld5FY1WutX8UoF',
													imagerySet : 'AerialWithLabels',
												// use maxZoom 19 to see stretched tiles instead of the BingMaps
												// "no photos at this zoom level" tiles
												// maxZoom: 19
												}),
										name : 'Aerial+Labels'
									}),
									new ol.layer.Tile({
										visible : true,
										source : new ol.source.OSM(),
										name : 'OSM'
									}), 		
				
			],
			name : 'Basemaps'
		});
