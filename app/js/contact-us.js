/////////////////
//Google maps ///
/////////////////
var map;
var marker;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.522458, lng: 0.036780},
    zoom: 16
  });

  marker = new google.maps.Marker({
  	position: {lat: 51.522458, lng: 0.031380},
  	map: map
  });
}