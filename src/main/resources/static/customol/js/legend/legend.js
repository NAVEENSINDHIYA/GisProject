var map;
var legendImg;
var ImageArray=[];
function legend(m)
{
 map=m;
//  map.getLayers().forEach(function (grouplayers) {







  
//   grouplayers.getLayers().forEach(function (layer) {
   
// 	     if(layer.getVisible()==true)
// 	     {
//          console.log(layer);
//        //  const layername = layer.params["LAYERS"] ;
//       //   console.log(layername);

//        }

//     });
//   });
 
//  const grouplayers = map.getLayers().getArray();

//  grouplayers.forEach((sublayers) => {
  
  
  
//  // alert(sublayers.get('name'));
  
//  sublayers.forEach((layer) => {
//     if(layer.getVisible()==true)
//   {
   
//        alert(layer.get('name'));
//    //  const layername = layer.getSource().getParams().LAYERS ;
    
//  // this.legendImg = gidcGisUrl + '?REQUEST=GetLegendGraphic&sld_version=1.0.0&layer=' + layername + '&format= image/png &legend_options=fontSize:13;fontName:san-sarif;bgColor:0xffffff;forceLabels:on'+'&WIDTH=12&HEIGHT=12&Scale=1';
 
//   //this.ImageArray.push( this.legendImg);
//   }
//  });

//   });

}
function updateLegend(layer) {
    let layername=layer.getSource().getParams().LAYERS;
   var graphicUrl = '?REQUEST=GetLegendGraphic&sld_version=1.0.0&layer=' + layername + '&format= image/png &legend_options=fontSize:13;fontName:san-sarif;bgColor:0xffffff;forceLabels:on'+'&WIDTH=12&HEIGHT=12&Scale=1';
   var img = document.getElementById('legend');
   img.src = graphicUrl;
 };