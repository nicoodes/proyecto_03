////////////
// Slider //
////////////
var images = [
    "img/medium.jpg",
    "img/small-1.jpg",
    "img/small-2.jpg",
    "img/small-3.jpg",
    "img/small-4.jpg",
    "img/small-5.jpg",
    "img/small-6.jpg"
];

var text = [
    "Crazy app design<span>15 Dec 2016</span>",
    "Teto app design<span>15 Dec 2016</span>",
    "Pepe app design<span>15 Dec 2016</span>",
    "Toto app design<span>15 Dec 2016</span>",
    "Lili app design<span>15 Dec 2016</span>",
    "Choto app design<span>15 Dec 2016</span>",
    "Toti app design<span>15 Dec 2016</span>"
];


var portfCount = 0;

var portfImage = document.getElementById("portfSlider");
var portfNext = document.getElementById("portfNext");
var portfPrev = document.getElementById("portfPrev");
var portfP = document.getElementById("portfP");
var portfH = document.getElementById("portfH");

// slider on modal
var modalImg = document.getElementById("modalImg");
var modalNext = document.getElementById("modalNext");
var modalPrev = document.getElementById("modalPrev");


function goNext() {

  if (portfCount < images.length - 1) {
    
    portfCount++;
    portfImage.src = images[portfCount];
    modalImg.src = portfImage.src;
    portfP.innerHTML = "0"+(portfCount + 1)+" / 0" + images.length;
    portfH.innerHTML = text[portfCount];
    document.getElementsByClassName("circle__slider--active")[0].className = "circle circle__slider";
    document.getElementById("circle"+(portfCount+1)).className = "circle circle__slider--active";
    // console.log(document.getElementsByClassName("circle__slider")[portfCount]);

  } else {
    portfCount = 0;
    portfImage.src = images[portfCount];
    modalImg.src = portfImage.src;
    portfP.innerHTML = "0"+(portfCount + 1)+" / 0" + images.length;
    portfH.innerHTML = text[portfCount];
    document.getElementsByClassName("circle__slider--active")[0].className = "circle circle__slider";
    document.getElementById("circle"+(portfCount+1)).className = "circle circle__slider--active";
    // console.log(document.getElementsByClassName("circle__slider")[portfCount]);
  }

  // console.log(portfCount);
}

function goPrev() {

  if (portfCount > 0) {
    
    portfCount--;
    portfImage.src = images[portfCount];
    modalImg.src = portfImage.src;
    portfP.innerHTML = "0"+(portfCount + 1)+" / 0" + images.length;
    portfH.innerHTML = text[portfCount];
    document.getElementsByClassName("circle__slider--active")[0].className = "circle circle__slider";
    document.getElementById("circle"+(portfCount+1)).className = "circle circle__slider--active";

  } else {

    portfCount = images.length - 1;
    portfImage.src = images[portfCount];
    modalImg.src = portfImage.src;
    portfP.innerHTML = "0"+(portfCount + 1)+" / 0" + images.length;
    portfH.innerHTML = text[portfCount];
    document.getElementsByClassName("circle__slider--active")[0].className = "circle circle__slider";
    document.getElementById("circle"+(portfCount+1)).className = "circle circle__slider--active";
  }
  // console.log(portfCount);
}

portfNext.addEventListener("click", goNext);
portfPrev.addEventListener("click", goPrev);
modalNext.addEventListener("click", goNext);
modalPrev.addEventListener("click", goPrev);


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