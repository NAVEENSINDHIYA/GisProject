var apiurl="/";
function getGeomreport()
{
	
    var data=null;
	$.ajax({
		url:"/findAllgeom",
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
function DeleteGeomreportbyId(id)
{
	
    var data=null;
	$.ajax({
		url:"/GeomDeletedById/"+id,
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