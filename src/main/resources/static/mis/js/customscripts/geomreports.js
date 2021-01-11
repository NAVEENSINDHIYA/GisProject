
 function defaultfunction()
{
    
    var data=  getGeomreport();
    console.log(data);
    loadtable(data);
}


    function loadtable(data)
{
	

 if ( $.fn.DataTable.isDataTable( '#GeomReportList' ) ) {
    $("#GeomReportList").dataTable().fnDestroy();
    $('#GeomReportList').empty(); 
   }
   var gid=data.map(x=>x.gid);

   console.log(gid);
	var table=$('#GeomReportList').DataTable({
		pageLength : 10,
		dom: 'Bfrtip',
		
		 'processing': true,
		
		 "data":data ,
		
		columns : [{
			title : 'SR_NO',
			data : 'gid'
			
		}, {
			title : 'First Name',
			data : 'firstname'
		}, {
			title : 'Last Name',
			data : 'lastname'
		}, {
			title : 'STATE',
			data : 'statename'
		}, {
			title : 'DISTRICT',
			data : 'distictname',
			
		}, {
			title : 'TALUKA',
			data : 'talukaname',
			
		},{
			title : 'VILLAGE',
			data : 'villagename',
			
		} 
		,{title : 'Action',
            data: null, 
            className: "center",
            defaultContent:  '<button class="btn btn-danger btn-sm " id="delete">Delete </button>'
        },{title : 'Action',
            data: null, 
            className: "center",
            defaultContent: '<button class="btn btn-primary btn-sm" id="update">Update </button>'
        }

		 ]

	});

	$('#GeomReportList tbody').on('click', 'button#update', function ()
	{
        
		var data = table.row( $(this).closest('tr') ).data();

        
		id=data['gid'];
	
		$("#editId").val(id);
		$("#editASIMonumentFrom").submit();
		
	
	
    } )		
	
	 
	$('#GeomReportList tbody').on('click', 'button#delete', function ()
	{
        
		var data = table.row( $(this).closest('tr') ).data();

        
		id=data['gid'];

		
	var data=DeleteGeomreportbyId(id);
	loadtable(data);
	location.reload();
    } )		
	
	
	

}



   

