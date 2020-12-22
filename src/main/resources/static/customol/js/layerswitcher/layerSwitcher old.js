

	function switchlayers(map)
	{
		
		
		const layerGroups = map.getLayers().getArray();
		const groupCount=layerGroups.length
		  $('#groupscount').append(groupCount);
		
		const groupcount=layerGroups.length;

		for(var j=0;j<layerGroups.length;j++)
		
		{
			 var groupname=layerGroups[j].get('name');				
				
				 var groupcontent='';		
			
				 groupcontent+='';
					 
				 groupcontent +=' <div class="card-collapse" ><div class="card-header" role="tab" id="headingOne"><h5 class="mb-0"> <a data-toggle="collapse" href="#basemap-choice'+j+'"  aria-controls="collapseOne" class="collapsed">'+groupname+':<span id="'+'layerscount'+j+'"></span><i class="material-icons">keyboard_arrow_down</i></a></h5></div><div id="basemap-choice'+j+'" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" style=""><div class="card-body" id="'+'layers'+j+'"></div> <div id="'+'slider-range-min'+j+'" ></div></div></div>'; 
								 
			  $('#groups').append($(groupcontent));		
			
			
		     if(layerGroups[j].getVisible()==true)
		     {
		    	 let sublayers=new Array();
		    	
		        for(var i=0;i<layerGroups[j].getLayers().getArray().length;i++)
		        	{
		        	sublayers.push(layerGroups[j].getLayers().getArray()[i]);	
		        	
		        	
		        	}
		        
		      
		        getlayersfunction(sublayers,j);		       
		        sublayers=[];		       
		     
			     
		     }
		     
		    
		  }
	
		
		 
		 function getlayersfunction(sublayers,ind)
		 {
				 
			 $.each(sublayers, function(index)
					 {
				
				
			    	
			        var basecontent = '';
					var layer = this.getProperties();
					console.log(layer.name+"-"+layer.visible);
					
					 
				
			        if(layer.visible==true) {
						
						
					basecontent +=   '<div class="togglebutton"><label ><input id="check'+ind+'" type="checkbox" name="radio-basemap"   checked=""><span class="toggle"></span>'+layer.name+'</label></div>';
					
			        }
				   else
				    {
			        
			          basecontent +=   '<div class="togglebutton"><label ><input id="check'+ind+'" type="checkbox" name="radio-basemap"  ><span class="toggle"></span>'+layer.name+'</label></div>';
				 
					}
				
				
			      
			        $('#layers'+ind).append($(basecontent));
			        
			      
			        
			        
				});
			 
		
		
			  $('#layerscount'+ind).append(sublayers.length);
		        
		    
		 }
		 
		
	}

