var map;
function geocoder(m)
  {
  //  map=m;


// popup
// var popup = new ol.Overlay.Popup();
// map.addOverlay(popup);

// var  geocoder = new Geocoder('nominatim', {
//     provider : 'google',
//     key : 'AIzaSyClQ0GOW55zhw4PvFh73FyGLHdSd4bJfpM',
//     lang : 'en',
//     placeholder : 'Search...',
//     limit : 5,
//     autoComplete: true,
//     keepOpen : false,
//     countrycodes:'in',
//     });
//     map.addControl(geocoder);

var geocoder = new Geocoder('nominatim', {
  provider: 'google',
  key: 'AIzaSyClQ0GOW55zhw4PvFh73FyGLHdSd4bJfpM',
  lang: 'en-US', //en-US, fr-FR
  placeholder: 'Search for ...',
  targetType: 'text-input',
  limit: 5,
  keepOpen: true
});
map.addControl(geocoder);

geocoder.on('addresschosen', function(evt) {
  // it's up to you
  console.info(evt);
});


    // geocoder.on('addresschosen', function (evt) {
    //     console.info(evt);
    //   window.setTimeout(function () {
    //     popup.show(evt.coordinate, evt.address.formatted);
    //   }, 3000);
    // });
  }