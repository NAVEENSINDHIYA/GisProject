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
										visible : false,
										source : new ol.source.OSM(),
										name : 'OSM'
									}), 
									new ol.layer.Tile({
										visible : true,
										source: new ol.source.TileImage({url: 'http://maps.google.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i375060738!3m9!2spl!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0'}),
										name : 'Google Map'
									})		
				
			],
			name : 'Basemaps'
		});
