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

///////////////
// Menu bar ///
///////////////
var menu = document.getElementById("menu");
var mainNav = document.getElementById("mainNav");

function menuShow () {
 
  if (mainNav.className == "main-nav menu-show") {
      mainNav.className = "main-nav";
      menu.className = "fa fa-bars";
      // menu.innerHTML = "=";
  } else {
     mainNav.className = "main-nav menu-show";
     menu.className = "fa fa-close";
      // menu.innerHTML = "x";
  }
}

menu.addEventListener("click", menuShow);


// This will close the menu bar to avoid being left open

function resize () {
	// console.log(window.innerWidth);
	if (window.innerWidth > "800") {
		mainNav.className = "main-nav";
		menu.className = "fa fa-bars";
	}
}

window.addEventListener("resize", resize);


////////////
// MODAL ///
////////////

var modal = document.getElementById("modal");
var close = document.getElementById("close-modal");
var open = document.getElementById("open-modal");
var modalBg = document.getElementById("modalBg");


function openModal() {
  modal.classList.add("modal-on");
  
}

function closeModal() {
  modal.classList.remove("modal-on");
}

open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modalBg.addEventListener("click", closeModal);