window.onload=init;
function init()
{
services();	
var map = new ol.Map({
        target: 'target-map',
       
        view: new ol.View({
        	center : ol.proj.transform([ 81.191694, 23.8086 ], 'EPSG:4326','EPSG:3857'),
			zoom :4.7,
			minZoom:4,
			maxZoom: 17
        }),
        layers:[
    		CommonlayersGroup,indianMapLayersGroup
    	],
    	controls: []

      });
//CommonlayersGroup,
measure(map);
controllers(map);
switchlayers(map);
getMousePosition(map);
scaleline(map);
exportpdf(map);
findbylocation(map)






}
