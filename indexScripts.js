function date(){
	var response = document.getElementById("date");
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd = '0'+dd
	} 

	if(mm<10) {
		mm = '0'+mm
	} 

	today = mm + '/' + dd + '/' + yyyy;
	response.innerHTML = today;
}

var x = document.getElementById("demo");

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

        alert("Browser does not support/denied geolocation");

}

function myFunction() {
    alert("I am an alert box!");
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

var buton=document.getElementById("buton");
var allchar="0123456789ABCDEF";

buton.addEventListener("click",myFun);

function myFun(){
  var  randcol= "";
for(var i=0; i<6; i++){
   randcol += allchar[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor= "#"+randcol;
}
document.getElementById("demo").innerHTML =
"The full URL of this page is:<br>" + window.location.href;

// Warning before leaving the page (back button, or outgoinglink)
window.onbeforeunload = function() {
   return "Do you really want to leave our brilliant application?";
   //if we return nothing here (just calling return;) then there will be no pop-up question at all
   //return;
};

function chBackcolor(color) {
   document.body.style.background = color;
}

function myFunction() {
    alert("I am an alert box!");
}