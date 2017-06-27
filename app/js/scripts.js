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


///////////////////
// Slider Global //
///////////////////
images = [
    "img/globe.png",
    "img/globe2.png",
    "img/globe3.png",
    "img/globe4.png",
    "img/globe5.png"
];

globeCount = 0;

globeImage = document.getElementById("globeSlider");
globeNext = document.getElementById("globeNext");
globePrev = document.getElementById("globePrev");
globeP = document.getElementById("globeP");
globeH = document.getElementById("globeH");

function goNext() {

  if (globeCount < images.length - 1) {
    
    globeCount++;
    globeImage.src = images[globeCount];
    globeP.innerHTML = "0"+(globeCount + 1)+" / 05";
    globeH.innerHTML = "GLOBAL No "+(globeCount + 1);
    document.getElementsByClassName("circle__slider--active")[0].className = "circle circle__slider";
    document.getElementById("circle"+(globeCount+1)).className = "circle circle__slider--active";
    // console.log(document.getElementsByClassName("circle__slider")[globeCount]);

  } else {
    globeCount = 0;
    globeImage.src = images[globeCount];
    globeP.innerHTML = "0"+(globeCount + 1)+" / 05";
    globeH.innerHTML = "GLOBAL No "+(globeCount + 1);
    document.getElementsByClassName("circle__slider--active")[0].className = "circle circle__slider";
    document.getElementById("circle"+(globeCount+1)).className = "circle circle__slider--active";
    // console.log(document.getElementsByClassName("circle__slider")[globeCount]);
  }

  // console.log(globeCount);
}

function goPrev() {

  if (globeCount > 0) {
    
    globeCount--;
    globeImage.src = images[globeCount];
    globeP.innerHTML = "0"+(globeCount + 1)+" / 05";
    globeH.innerHTML = "GLOBAL No "+(globeCount + 1);
    document.getElementsByClassName("circle__slider--active")[0].className = "circle circle__slider";
    document.getElementById("circle"+(globeCount+1)).className = "circle circle__slider--active";

  } else {

    globeCount = images.length - 1;
    globeImage.src = images[globeCount];
    globeP.innerHTML = "0"+(globeCount + 1)+" / 05";
    globeH.innerHTML = "GLOBAL No "+(globeCount + 1);
    document.getElementsByClassName("circle__slider--active")[0].className = "circle circle__slider";
    document.getElementById("circle"+(globeCount+1)).className = "circle circle__slider--active";
  }
  // console.log(globeCount);
}


globeNext.addEventListener("click", goNext);
globePrev.addEventListener("click", goPrev);