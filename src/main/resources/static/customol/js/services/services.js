var apiurl="https://api3.ncog.gov.in/BaseRest/";
function getState()
{
	var data=null;
	$.ajax({
		url:apiurl+"getstate",
		method:"POST",
		dtaType:"json",
		async: false,
		data:{},
		success:function(j)
		{
			
			 data=j;  
				  
		},
		error:function (error)
		{
			alert(error);
		}
	});
	return data;
	
	
}

function getDistrict(id)
{
	//var code={};
	// code.statecode=id;
	// var codobject=JSON.stringify(code);
	 var data=null;
	$.ajax({
		url:apiurl+"getdistrict/"+id,
		method:"POST",
		async: false,
		contentType:"application/json;charset=utf-8",
		
	//	data:codobject,
		success:function(j)
		{
			data=j;
		},
			error:function(error)
			{
				alert(error);
			}
			
			
		});
	return data;
		}

function getTalukas(id)
{
//	var code={};
///	 code.districtcode=id;
//	 var codobject=JSON.stringify(code);
	var options="";
	var data=null;
	$.ajax({
		url:apiurl+"gettaluka/"+id,
		method:"POST",
		async: false,
		contentType:"application/json;charset=utf-8",
		
	//	data:codobject,
		success:function(j)
		{
			
			 data=j;
		},
		error:function(error)
		{
			alert(error);
		}
		
		
	});
	return data;
}
function getVillage(id)
{
//	var code={};
//	 code.talukacode=id;
//	 var codobject=JSON.stringify(code);
	var options="";
	var data=null;
	$.ajax({
		url:apiurl+"getvillage/"+id,
		method:"POST",
		async: false,
		contentType:"application/json;charset=utf-8",
		
	//	data:codobject,
		success:function(j)
		{
			
			 data=j;
		},
		error:function(error)
		{
			alert(error);
		}
		
		
	});
	return data;
}



