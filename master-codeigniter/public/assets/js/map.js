
var marker;

var markes;

var map = L.map('mapid');


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
  maxZoom: 18
}).addTo(map);

L.control.scale().addTo(map);

 

  $.ajax({
    url: BASE_URL+'/leads/mapall',   
    dataType: 'json'    
  })
  .done(function(result) {

  // console.log(result);

  for (let i = 0; i < result.length; i++) {  

    

    view = map.setView([result[i].lat,result[i].long],2);

    marker =  L.marker([result[i].lat,result[i].long]).addTo(map);

    marker.bindPopup(result[i].country).addTo(map);  

  }

 
});




