/**
 * Elements that make up the popup.
 */
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

/**
 * Create an overlay to anchor the popup to the map.
 */
var overlay = new ol.Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250,
  },
});

/**
 * Add a click handler to hide the popup.
 * @return {boolean} Don't follow the href.
 */
closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};
window.onload=init;


function init()
{
  let india=[ 81.191694, 23.8086 ];
let jalandhar=[75.57917,31.32556];
var map = new ol.Map({
	overlays: [overlay],
        target: 'target-maps',
       
        view: new ol.View({
        	center : ol.proj.transform(india, 'EPSG:4326','EPSG:3857'),
       zoom:4.0,
       //   zoom :9.5,
			minZoom:4,
			maxZoom: 17
        }),
        layers:[
           CommonlayersGroup,indianMapLayersGroup,
           IdentifyLayerGroup,geomLayerGroup
    	],
      controls:   ol.control.defaults({
        zoom: false,
        attribution: true,
        rotate: false
      }).extend([]),
     // new ol.control.FullScreen()
    

      });
     
legend(map);
geom(map);
buffer(map);
controllers(map);
navigation(map);
switchlayers(map);
getMousePosition(map);
scaleline(map);
exportpdf(map);
identify(map);
//addGeom(map);
commonfunctions(map);
//swipe(map);
//geocoder(map);






}
