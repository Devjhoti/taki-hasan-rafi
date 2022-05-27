function downloadCv(){
    window.location.assign("https://drive.google.com/uc?export=download&id=1miinjOMENUtYC8V5BkAOBL7BGKWuotSb")
}

var box = document.getElementById("box-js")

function box1e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/11.jpg)`;
  bg.style.backgroundSize = "100%";

}
function box2e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/22.jpg)`;
  bg.style.backgroundSize = "100%";
}
function box3e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/33.jpg)`;
  bg.style.backgroundSize = "100%";
}
function box4e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/44.jpg)`;
  bg.style.backgroundSize = "100%";
}
function mail() {
    // window.location.assign("mailto:takihr@hanyang.ac.kr")
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width = "0px";

  setTimeout(() => {
    slideJs.style.width = "100%";
    slideJs.innerHTML = `
    <a href="mailto:takihr@hanyang.ac.kr">takihr@hanyang.ac.kr</a>
`
  }, 1000);
}
function phone() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width = "0px";

  setTimeout(()=>{
    slideJs.style.width="100%";
    slideJs.innerHTML=`
                    <p>+82 10-8574-4563</p>
    `;
  },1000);
}
function linkedin() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width="0px";
  setTimeout(() => {
    slideJs.style.width = "100%";
  slideJs.innerHTML = `
                    <a target="#_blank" href="https://t.ly/W5cr">My Linkedin Profile</a>
  `
  }, 1000);
}
function fb() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width="0px";
  setTimeout(() => {
    slideJs.style.width = "100%";
  slideJs.innerHTML = `
  <a target="#_blank" href="https://www.facebook.com/takibass07">My facebook profile </a>
  `;
  }, 1000);
}
function git() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width="0px";
  setTimeout(() => {
    slideJs.style.width = "100%";
  slideJs.innerHTML = `
  <a target="#_blank" href="https://github.com/takihasan">Github</a>
  `;
  }, 1000);
}
function reserchgate() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width="0px";
  setTimeout(() => {
    slideJs.style.width = "100%";
  slideJs.innerHTML = `
  <a href="https://www.researchgate.net/profile/Taki-Hasan-Rafi">Reserchgate</a>
  `;
  }, 1000);
}
function map() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width="0px";
  setTimeout(() => {
    slideJs.style.width = "100%";
  slideJs.innerHTML = `
  <div id="gmap" class="mapouter"><div class="gmap_canvas"><iframe width="1080" height="202" id="gmap_canvas" src="https://maps.google.com/maps?q=Room%20503,%20ITBT,%20Hanyang%20University,%20Seoul,%20Republic%20of%20Korea.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net"></a><br><style>.mapouter{position:relative;text-align:right;height:202px;width:1080px;}</style><a href="https://www.embedgooglemap.net">free map for website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:202px;width:1080px;}</style></div></div>
  `;
  }, 1000);
}
