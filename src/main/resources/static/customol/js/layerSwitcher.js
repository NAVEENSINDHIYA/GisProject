
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
			        var layername = this.getProperties();
			        basecontent += '<div class="input-group" id="radio-basemap-'+index+'">';
			     
			        if(index==0) {
			        	
			        	 basecontent +=  '<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="radio" name="radio-basemap"  checked="checked">'+layername.name+'<span class="circle"><span class="check"></span></span></label></div>';
			           
			        }
			        else {
			        
			          basecontent +=   '<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="radio" name="radio-basemap"  >'+layername.name+'<span class="circle"><span class="check"></span></span></label></div>';
			        }
			        basecontent += '</div>';
			      
			        $('#layers'+ind).append($(basecontent));
			        
			      
			        
			        
			        
			        $('#layers'+ind).bind( "change", function(event) {
				        var newbase = $('input[name=radio-basemap]:checked');
				     
				        var btntext = newbase[0].nextSibling.nodeValue;
				       
				        for (var i=0; i<sublayers.length;i++) {
				            var layername = sublayers[i].getProperties();
				            var baseopacity;
				            var selectedLayers;
				            if (layername.name == btntext) {
				            	selectedLayers=sublayers[i];
				            	sublayers[i].setVisible(true);
				            	
				            
				            	
				            	 $('#slider-range-min'+ind).slider({value: 100,slide:function(e, ui) {
						            	selectedLayers.setOpacity(ui.value/100 );
						            	
						            	 
						            }});
				             
				          
				            }
				            else {
				            	sublayers[i].setVisible(false);
				            }
				        }

				    });
			        
			      
                      
			    });

			  $('#layerscount'+ind).append(sublayers.length);
		        
		        console.log('#layerscount'+ind);
		        console.log(sublayers.length);
		 }
		 
		
	}

