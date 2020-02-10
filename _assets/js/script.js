//-- SPINNER ------------------------------
var overlay = document.getElementById("preloader-overlay");
var solar = document.getElementById('solar');

window.addEventListener('load', function(){
    overlay.style.display = 'none';
    solar.style.display ="block";
});

//-- FULLPAGE ------------------------------
$(document).ready(function() {     
    $('#wrapper').fullpage();    
});

//-- SCRIPT END ----------------------------
//------------------------------------------