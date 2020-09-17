

function switchlayers(map)
	{
		
var	Groupcount=0;
	bindallopacity();
		map.getLayers().forEach(function (layer, i) {
			Groupcount=i+1;
			var groupname=layer.get('name');
			var groupcontent='';		
			
			groupcontent+='';
		//	<span class="togglebutton" id=layer'+i+'"><label for="visible'+i+'"><input id="visible'+i+'" class="visible" type="checkbox"/><span class="toggle"></span></label></span>
			groupcontent +=' <div class="card-collapse" ><div class="card-header" role="tab" id="headingOne"><h5 class="mb-0"> <a data-toggle="collapse" href="#basemap-choice'+i+'"  aria-controls="collapseOne" class="collapsed">'+groupname+':<span id="'+'layerscount'+i+'"></span><i class="material-icons">keyboard_arrow_down</i></a></h5></div><div id="basemap-choice'+i+'" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" style=""><div class="card-body" id="'+'layer'+i+'"></div> <div id="'+'slider-range-min'+i+'" ></div></div></div>'; 
							
		 $('#groups').append($(groupcontent));		
	   
			bindInputs('#layer' + i, layer);
		var	subGroupcount=0;
			if (layer instanceof ol.layer.Group) {
				
			  layer.getLayers().forEach(function (sublayer, j) {
				subGroupcount=j+1;
		 var basecontent = '';
				let layername=sublayer.get('name');
					 
					 basecontent += '<div class="togglebutton" id="layer'+i+j+'"><label for="visible'+i+j+'"> <input id="visible'+i+j+'" type="checkbox" class="visible" /> <span class="toggle"></span>'+layername+'</label>  <input id="opacity" class="opacity" type="range" min="0" max="1" step="0.01"/></div>';

					 $('#layer'+i).append($(basecontent));

				bindInputs('#layer' + i + j, sublayer);
			  });
			  $('#layerscount'+i).append(subGroupcount);
			 
			}
			
		  });
		 
		  $('#groupscount').append(Groupcount);

		 
		
	}
	function bindallopacity()
	{
		$('#opacity').hide();
		var allopacity=$('#allopacity');
		allopacity.on('change', function () {
			
			
		  });
	}
	function bindInputs(layerid, layer) {



		var visibilityInput = $(layerid + ' input.visible');
	
		visibilityInput.on('change', function () {
			
		  layer.setVisible(this.checked);
		});
		visibilityInput.prop('checked', layer.getVisible());
	  
		var opacityInput = $(layerid + ' input.opacity');
		
		opacityInput.on('input change', function () {
		
		  layer.setOpacity(parseFloat(this.value));
		});
		opacityInput.val(String(layer.getOpacity()));
	  }

