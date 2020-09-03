var url='http://localhost:8085/';
function services()
{
	
	
	getStateList();
	getDistricts();
}



function getStateList()
{
	
	 $.ajax({url: url+"getSates", success: function(result){
		    console.log(result);
		 }});
}
function getDistricts()
{
	
	 $.ajax({url: url+"getDistricts", success: function(result){
		    console.log(result);
		 }});
}