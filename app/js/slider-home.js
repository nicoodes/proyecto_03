///////////////////
// Slider Global //
///////////////////
var images = [
    "img/globe.png",
    "img/globe2.png",
    "img/globe3.png",
    "img/globe4.png",
    "img/globe5.png"
];

var globeCount = 0;

var globeImage = document.getElementById("globeSlider");
var globeNext = document.getElementById("globeNext");
var globePrev = document.getElementById("globePrev");
var globeP = document.getElementById("globeP");
var globeH = document.getElementById("globeH");

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



/////////////////////////
// Slider Testimonials //
/////////////////////////


var opinionCount = 0;
var opinionOn = document.getElementsByClassName("opinion-on");
var opinionP = document.getElementById("opinionP");

function goNextOpinion() {

  if (opinionCount < 4) {
    
    opinionCount++;
    opinionP.innerHTML = "0"+(opinionCount + 1)+" / 05";
    document.getElementsByClassName("circle__slider2--active")[0].className = "circle circle__slider2";
    document.getElementById("circle0"+(opinionCount+1)).className = "circle circle__slider2--active";
    // console.log(document.getElementsByClassName("circle__slider2")[opinionCount]);
   // console.log("circle0"+(opinionCount+1));
  } else {
      opinionCount = 0;
      opinionP.innerHTML = "0"+(opinionCount + 1)+" / 05";
      
      document.getElementsByClassName("circle__slider2--active")[0].className = "circle circle__slider2";
      document.getElementById("circle0"+(opinionCount+1)).className = "circle circle__slider2--active";
    }

  opinionOn[0].className = "opinion";
  document.getElementById("opinion"+(opinionCount+1)).className = "opinion-on";

}

function goPrevOpinion() {

  if (opinionCount > 0) {
    
    opinionCount--;
    
    opinionP.innerHTML = "0"+(opinionCount + 1)+" / 05";
    
    document.getElementsByClassName("circle__slider2--active")[0].className = "circle circle__slider2";
    document.getElementById("circle0"+(opinionCount+1)).className = "circle circle__slider2--active";

  } else {

    opinionCount = 4;
    
    opinionP.innerHTML = "0"+(opinionCount + 1)+" / 05";
    
    document.getElementsByClassName("circle__slider2--active")[0].className = "circle circle__slider2";
    document.getElementById("circle0"+(opinionCount+1)).className = "circle circle__slider2--active";
  }
  opinionOn[0].className = "opinion";
  document.getElementById("opinion"+(opinionCount+1)).className = "opinion-on";
}


opinionNext.addEventListener("click", goNextOpinion);
opinionPrev.addEventListener("click", goPrevOpinion);