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

