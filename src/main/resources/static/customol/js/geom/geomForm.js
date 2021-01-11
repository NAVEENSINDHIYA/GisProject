$(document).ready(function() {
    var url_string = window.location;
    var url = new URL(url_string);
    var data = url.searchParams.get("id");
    var d=JSON.parse(Base64.decode(data));
console.log(d);
    let stateCode=d.stateCode;
    let districtCode=d.districtCode;
    let talukaCode=d.talukaCode;
    let villageCode=d.villageCode;
    let lat=d.lat;
    let lon=d.lon;
    let wkt=d.wkt;

    loadstate(stateCode);
    loaddistrict(stateCode,districtCode);
    loadtaluka(districtCode,talukaCode);
    loadvillage(talukaCode,villageCode);
    
    document.getElementById("lat").value =lat.toFixed(4);
    document.getElementById("lon").value =lon.toFixed(4);
    document.getElementById("wktGeom").value = wkt;
 
 
});
function loadstate(stateCode)
{
var stateId_Hidden=stateCode;
var j=getState();

var options = '<option  value="' + "--Select--" + '" disabled selected>'+"--Select--" + '</option>';

for (var i = 0; i < j.length; i++) {
    
    
     if (stateId_Hidden == j[i].statecode) 
     { 	
        
         options += '<option value="' + j[i].statecode + '" selected="selected">' + j[i].statename+ '</option>';
         
        
     }
    else {
        options += '<option value="' + j[i].statecode + '">' + j[i].statename+ '</option>';
    }
}
$("select#selectedstate").html(options);
}

function loaddistrict(stateCode,districtCode)
{
var distictId_Hidden=districtCode;
var j=getDistrict(stateCode);

var options = '<option  value="' + "--Select--" + '" disabled selected>'+"--Select--" + '</option>';

for (var i = 0; i < j.length; i++) {
    // alert( " j[i].stcode11 == " + j[i].stcode11);
    
     if (distictId_Hidden == j[i].districtcode) 
     { 	
        // alert("if"+stateId_Hidden);
         options += '<option value="' + j[i].districtcode + '" selected="selected">' + j[i].districtname+ '</option>';
         
        // loadDistrict(j[i].stcode11);
     }
    else {
        options += '<option value="' + j[i].districtcode + '">' + j[i].districtname+ '</option>';
    }
}
$("select#selecteddistrict").html(options);
}
function loadtaluka(districtCode,talukaCode)
{
var talukaId_Hidden=talukaCode;
var j=getTalukas(districtCode);

var options = '<option  value="' + "--Select--" + '" disabled selected>'+"--Select--" + '</option>';

for (var i = 0; i < j.length; i++) {
    // alert( " j[i].stcode11 == " + j[i].stcode11);
    
     if (talukaId_Hidden == j[i].talukacode) 
     { 	
        // alert("if"+stateId_Hidden);
         options += '<option value="' + j[i].talukacode + '" selected="selected">' + j[i].talukaname+ '</option>';
         
        // loadDistrict(j[i].stcode11);
     }
    else {
        options += '<option value="' + j[i].talukacode + '">' + j[i].talukaname+ '</option>';
    }
}
$("select#selectedtaluka").html(options);

}
function loadvillage(talukaCode,villageCode)
{

var villageId_Hidden=villageCode;
var j=getVillage(talukaCode);

var options = '<option  value="' + "--Select--" + '" disabled selected>'+"--Select--" + '</option>';

for (var i = 0; i < j.length; i++) {
    // alert( " j[i].stcode11 == " + j[i].stcode11);
    
     if (villageId_Hidden == j[i].villagecode) 
     { 	
        // alert("if"+stateId_Hidden);
         options += '<option value="' + j[i].villagecode + '" selected="selected">' + j[i].villagename+ '</option>';
         
        // loadDistrict(j[i].stcode11);
     }
    else {
        options += '<option value="' + j[i].villagecode + '">' + j[i].villagename+ '</option>';
    }
}
$("select#selectedvillage").html(options);

}