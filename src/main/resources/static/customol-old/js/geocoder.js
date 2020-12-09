var map;
function geocoder(m)
  {
    map=m;





var geocoder = new Geocoder('nominatim', {
  provider : 'osm',
  key : ' AIzaSyClQ0GOW55zhw4PvFh73FyGLHdSd4bJfpM',
  lang : 'en',
  //targetType: 'text-input',
  placeholder : 'Search location',
  autoComplete: true,
  limit : 5,
  keepOpen : false
});
map.addControl(geocoder);





//Listen when an address is chosen
geocoder.on('addresschosen', function(evt){
  var feature = evt.feature,
      coord = evt.coordinate,
      address = evt.address;
      geocoder.getSource().clear();
  geocoder.getSource().addFeature(feature);
  // some popup solution
  content.innerHTML = '<p>'+ address.formatted +'</p>';
  overlay.setPosition(coord);
});



  }
