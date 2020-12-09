var map
var GisUrl='https://gis.ncog.gov.in/GISWeb/wms';
var hoverLayer =ol.layer.Vector;
var geojson = new ol.format.GeoJSON;
var vectorSource;
var hoverStyle= [
	new ol.style.Style({
	  fill: new ol.style.Fill({
		color: [255, 255, 0, 0.5]
	  }),
	  stroke: new ol.style.Stroke({
		color: [0,204,0,1],
		width: 4
	  })
	})
  ];

var statelist=[];
var districtlist=[];
var talukalist=[];
var villagelist=[];
var cql;
var Alllayers=[];
var Alllayersname= [];
var layersname="Village,Taluka,District,State";
var layer="VillageIndia,TalukaIndia,DistrictIndia,StateIndia";
function navigation(m)
{
	map=m;
	zoomOnRowClick = true;
highlightFeatures = true;
	getstate();
	addHoverLayer();
	
}
function addHoverLayer()
  {
	 hoverLayer = new ol.layer.Vector({
	 	source: new ol.source.Vector()
	   });
	  
	 
	if (hoverStyle) {
		
		hoverLayer.setStyle(hoverStyle);
	  }
	  if (highlightFeatures) {
		  
		map.addLayer(this.hoverLayer);
	  }
			
		
		
	  
  }

function getstate()
{
	 statelist=[];
	 districtlist=[];
	 talukalist=[];
	 villagelist=[];
	var options="";
	var j=getState();
	
	if(j)
		{
			 var statename="";
				// options=' <option  disabled selected>State</option>';
				  for ( var i = 0; i < j.length; i++) {
					
					
						 
					  options += '<option value="' + j[i].statecode+ '" >'
						+ j[i].statename + '</option>';
					  statelist.push({"statecode":j[i].statecode,"minx":j[i].minx,"miny":j[i].miny,"maxx":j[i].maxx,"maxy":j[i].maxy});
					  
						
					
				  }
				 
				  $("select#state").html(options);
				  
				  
		}
		
	$("#state").change(function(){
		
		var selectedstatecode = $(this).children("option:selected").val();
		
		 var s=statelist.find(x=>x.statecode==selectedstatecode);
	     var extent=[s.minx,s.miny,s.maxx,s.maxy];
		zoom(extent);
		 removestatelayer(selectedstatecode);
		getDistricts(selectedstatecode);

	

	  var vectorSource = new ol.source.Vector({
		url: 'https://gis.ncog.gov.in/GISWeb/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:StateIndia&PROPERTYNAME=geom,stcode11&CQL_FILTER=stcode11=%27'+selectedstatecode +'%27&maxFeatures=50&outputFormat=json',
		format :new ol.format.GeoJSON()
	 
		
	});

 var vectorLayer1 = new ol.layer.Vector({
	 source: vectorSource,
	 style: customStyleFunction,
	 
	 
 });

 map.addLayer(vectorLayer1);


	})
	
}
function customStyleFunction()
     {


            return [new styles.Style({
                  stroke: new styles.Stroke({
                     color: '#00ff00',
                     width: 2
                 })
             })];



        }


function zoom(extent)
{
	
	 extent = ol.proj.transformExtent(extent, 'EPSG:4326', 'EPSG:3857');
     map.getView().fit(extent), { duration: 200 };
     
     
     
    
}
function clearmap()
{
	const layers = map.getLayers().getArray();
	   layers.forEach((layer) => {
	     if(layer.getVisible()==true)
	     {
	    layer.setVisible(false)
	     }
	  });
}
function   removestatelayer(selectedcode)
  {
	clearmap();
   Alllayersname=layersname.split(',');
    Alllayers=layer.split(',');


     for (var j=0;j<Alllayers.length;j++)
     {
       if ( Alllayers[j]=="TalukaIndia")
         {
         cql="STCODE11="+selectedcode;
         }
       else  if (Alllayers[j]=="VillageIndia")
         {
         cql="ST_2011="+selectedcode;

         }
       else
         {
         cql="stcode11="+selectedcode;
         }

       if  (Alllayers[j]=="VillageIndia")
         {

       new_lyr = new ol.layer.Tile({
           source : new ol.source.TileWMS({
             url : GisUrl,
            // crossOrigin: 'anonymous',
             params : {
              'LAYERS' : Alllayers[j],
               CQL_FILTER :cql,
               version : '1.1.1',
               transparent : 'true'
             }
             }),
           maxResolution : 256,


             })





         }
       else if  (Alllayers[j]=="TalukaIndia")
       {

       var new_lyr =
        new ol.layer.Tile({
         source : new ol.source.TileWMS({
           url : GisUrl,
          // crossOrigin: 'anonymous',
           params : {
            'LAYERS': Alllayers[j],
             CQL_FILTER :cql,
             version : '1.1.1',
             transparent : 'true'
           }
           }),
         maxResolution : 800,//1024,

      //	 name : Alllayersname[j]
           })

       }
       else

         {

         var new_lyr = new ol.layer.Tile({
           source : new ol.source.TileWMS({
             url :GisUrl,
            // crossOrigin: 'anonymous',
             params : {
              'LAYERS': Alllayers[j],
               CQL_FILTER :cql,
               version : '1.1.1',
               transparent : 'true'
             }
             }),
        //	 name : Alllayersname[j]
             })
         }
	   //  newlyr=new_lyr;
	  
        map.addLayer(new_lyr);
     }

  }


function getDistricts(selectedstatecode)
{
	
	if(selectedstatecode!=null)
		{
		
	districtlist=[];
	 talukalist=[];
	 villagelist=[];
	var options="";
	var j=getDistrict(selectedstatecode);
		if(j)
		{
		
			 var districtname="";
			
				
				  for ( var i = 0; i < j.length; i++) {
					  
						  
					  options += '<option value="' + j[i].districtcode+ '" >'
						+ j[i].districtname + '</option>';
					 
					  districtlist.push({"districtcode":j[i].districtcode,"minx":j[i].minx,"miny":j[i].miny,"maxx":j[i].maxx,"maxy":j[i].maxy});
					  
					  
						  
						
					}
				 
				  $("select#district").html(options);
		}
	
	
	
	$("#district").change(function(){
		var selecteddistrictcode = $(this).children("option:selected").val();
		
		 var s=districtlist.find(x=>x.districtcode==selecteddistrictcode);
		
	     var extent=[s.minx,s.miny,s.maxx,s.maxy];
		zoom(extent);
		removedistrictlayer(selecteddistrictcode)
		getTaluka(selecteddistrictcode)
	});
		}
	
}

function removedistrictlayer(selectedcode)
{
	clearmap();
	Alllayersname=layersname.split(',');
	   Alllayers=layer.split(',');
	   
	   for (var j=0;j<Alllayers.length;j++)
	      {

	        if ( Alllayers[j]=="TalukaIndia")
	          {
	          cql="DTCODE11='"+selectedcode+"'";
	          }

	        else if (Alllayers[j]=="VillageIndia")
	          {
	          cql="DT_2011='"+selectedcode+"'";
	          }
	        else
	        {

	          cql="dtcode11='"+selectedcode+"'";
	        }
	       // alert("district...."+Alllayers[j])
	        if  (Alllayers[j]=="VillageIndia")
	          {
	         // alert("if...."+cql_dist);
	          var new_lyr = new ol.layer.Tile({
	            source : new ol.source.TileWMS({
	              url : GisUrl,
	              params : {
	                layers : Alllayers[j],
	                CQL_FILTER :cql,
	                version : '1.1.1',
	                transparent : 'true'
	              }
	              }),
	               maxResolution :256,

	              });
	          }
	        else if  (Alllayers[j]=="TalukaIndia")
	        {
	         // alert("else ifff...."+Alllayers[j]);
	        var new_lyr = new ol.layer.Tile({
	          source : new ol.source.TileWMS({
	            url : GisUrl,
	            params : {
	              layers : Alllayers[j],
	              CQL_FILTER :cql,
	              version : '1.1.1',
	              transparent : 'true'
	            }
	            }),
	          maxResolution :800,

	            });
	        }
	        else
	          {
	         // alert("else...."+Alllayers[j]);
	         // alert("cql...."+cql_dist);
	           var new_lyr = new ol.layer.Tile({
	            source : new ol.source.TileWMS({
	              url : GisUrl,
	              params : {
	                layers : Alllayers[j],
	                CQL_FILTER :cql,
	                version : '1.1.1',
	                transparent : 'true'
	              }
	              }),
	              //maxResolution : 256,

	              });
	          }
	        //  newlyr=new_lyr;
	         map.addLayer(new_lyr);

	      }

}

function getTaluka(selecteddistrictcode)
{
	if(selecteddistrictcode!=null)
	{
		 talukalist=[];
		 villagelist=[];
var options="";
var j=getTalukas(selecteddistrictcode)

	if(j)
	{
		
		 var talukaname="";
			// options=' <option  disabled selected>State</option>';
			  for ( var i = 0; i < j.length; i++) {
				
				  if(j[i].talukacode!=null)
					  {
				  options += '<option value="' + j[i].talukacode+ '" >'
					+ j[i].talukaname + '</option>';
				  talukalist.push({"talukacode":j[i].talukacode,"minx":j[i].minx,"miny":j[i].miny,"maxx":j[i].maxx,"maxy":j[i].maxy});
				  
					  }
					
				}
			  $("select#taluka").html(options);
	}

	}

$("#taluka").change(function(){
	var selectedtalukacode = $(this).children("option:selected").val();
	getVillages(selectedtalukacode);
	 var s=talukalist.find(x=>x.talukacode==selectedtalukacode);
		
     var extent=[s.minx,s.miny,s.maxx,s.maxy];
	zoom(extent);
	removetalukalayer(selectedtalukacode);
	
})
}
function removetalukalayer(selectedcode)
{
	clearmap();
	Alllayersname=layersname.split(',');
	   Alllayers=layer.split(',');
	for (var j=0;j<Alllayers.length;j++)
    {

      if ( Alllayers[j]=="TalukaIndia")
        {
        cql="SDTCODE11='"+selectedcode+"'";
        }
      else  if (Alllayers[j]=="VillageIndia")
        {
        cql="SDT_2011='"+selectedcode+"'";
        }
     /* else
        {
        cql="dtcode11='"+dist+"'";
        }*/
     // alert("district...."+Alllayers[j])
      if  (Alllayers[j]=="VillageIndia")
        {
       // alert("if...."+Alllayers[j]);
       var new_lyr = new ol.layer.Tile({
          source : new ol.source.TileWMS({
            url :  GisUrl,
            params : {
              layers : Alllayers[j],
              CQL_FILTER :cql,
              version : '1.1.1',
              transparent : 'true'
            }
            }),
          maxResolution : 856,

            });
        }
      else if  (Alllayers[j]=="TalukaIndia")
      {
       // alert("else ifff...."+Alllayers[j]);
     var new_lyr = new ol.layer.Tile({
        source : new ol.source.TileWMS({
          url :  GisUrl,
          params : {
            layers : Alllayers[j],
            CQL_FILTER :cql,
            version : '1.1.1',
            transparent : 'true'
          }
          }),
        //maxResolution : 1024,//1024,

          });
      }

       map.addLayer(new_lyr);


    }
}
function getVillages(selectedtalukacode)
{
	var options="";
	var j=getVillage(selectedtalukacode)

		if(j)
		{
			
			 var villagename="";
				// options=' <option  disabled selected>State</option>';
				  for ( var i = 0; i < j.length; i++) {
					
					  if(j[i].villagecode!=null)
						  {
					  options += '<option value="' + j[i].villagecode+ '" >'
						+ j[i].villagename + '</option>';
					  villagelist.push({"villagecode":j[i].villagecode,"minx":j[i].minx,"miny":j[i].miny,"maxx":j[i].maxx,"maxy":j[i].maxy});
						  }
						
					}
				  $("select#village").html(options);
		}


}

$("#village").change(function(){
	var selectedvillagecode = $(this).children("option:selected").val();
	
	
	
	
	
	 var s=villagelist.find(x=>x.villagecode==selectedvillagecode);
		
     var extent=[s.minx,s.miny,s.maxx,s.maxy];
	zoom(extent);
	removevillagelayer(selectedvillagecode);
})
function removevillagelayer(selectedcode)
{
	clearmap();
	Alllayersname=layersname.split(',');
	   Alllayers=layer.split(',');
	 for (var j=0;j<Alllayers.length;j++)
     {

        if (Alllayers[j]=="VillageIndia")
         {
         cql="VIL_2011='"+selectedcode+"'";
         }
      /* else
         {
         cql="dtcode11='"+dist+"'";
         }*/
      // alert("district...."+Alllayers[j])
       if  (Alllayers[j]=="VillageIndia")
         {
        // alert("if...."+Alllayers[j]);
         var new_lyr = new ol.layer.Tile({
           source : new ol.source.TileWMS({
             url : GisUrl,
             params : {
               layers : Alllayers[j],
               CQL_FILTER :cql,
               version : '1.1.1',
               transparent : 'true'
             }
             }),
           maxResolution : 256,

             });
         }
       else if  (Alllayers[j]=="TalukaIndia")
       {
        // alert("else ifff...."+Alllayers[j]);
       var new_lyr = new ol.layer.Tile({
         source : new ol.source.TileWMS({
           url : GisUrl,
           params : {
             layers : Alllayers[j],
             CQL_FILTER :cql,
             version : '1.1.1',
             transparent : 'true'
           }
           }),
         maxResolution : 800,//1024,

           });
       }

         map.addLayer(new_lyr);

     }


}