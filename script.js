const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




function later() {
let elem_con = document.querySelector(".elem-container")
let fix = document.querySelector(".fix-img")

elem_con.addEventListener("mouseenter" , () => {
    fix.style.display = 'block'
}
)

elem_con.addEventListener("mouseleave" , () => {
    fix.style.display = 'none'
}
)


var elems = document.querySelectorAll(".elem")

elems.forEach((e) => {
  e.addEventListener("mouseenter" , () => {
    var img = e.getAttribute("data-image")
    fix.style.backgroundImage = `url(${img})`
  }
  )
}
)

}


later()

function swiperanime() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    
  });
}

swiperanime();


function blackbar() {
  const head = document.querySelectorAll(".heap");
const paras = document.querySelectorAll(".pp");
const posti = document.querySelector(".img-sec");
const imgArr = ["https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-800.jpg","https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp","https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-800.jpg"]

function reset(){
  head.forEach((h,i) =>{
    let pa = paras[i];
    h.style.color = "rgba(255, 255, 255, 0.49)";
    pa.style.color = "rgba(255, 255, 255, 0.49)";
    pa.style.display = "none";

  })
}

head.forEach((h,i) => {
  h.addEventListener('click' , () => {

    reset();

    let pa = paras[i];
    let pic = imgArr[i]

console.log(pic);


    h.style.color = "white";
    pa.style.color = "white";
    pa.style.display = "inline";
    posti.style.backgroundImage = `url(${pic})`
    
  }
  )
}
)
}

blackbar()
// responsive

function menubtn() {
  let menu = document.querySelector(".nav h3")
let down = document.querySelector(".full-scr") 
let nav_img = document.querySelector(".nav img") 
let f = 0;

menu.addEventListener("click" , () => {
  if(f==0){

    down.style.top = 0
    nav_img.style.opacity= 0
    f = 1
  }else{
  down.style.top = "-100%"
  nav_img.style.opacity= 1
  f=0
  }
}
)
}


function loader() {
  let load = document.querySelector(".loader")
setTimeout(() => {
  load.style.top= "-100%"
}, 4200);
}

menubtn();

loader()