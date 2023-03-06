const btn = document.querySelector(".btn");
let activeColor = document.querySelector(".is-active");
btn.addEventListener("click", function () {
  this.classList.toggle("is-active");
  const nav = document.querySelector(".nav-linksdis");
  nav.classList.toggle("nav-links");
  const liss = document.querySelector(".lis");
  liss.classList.toggle("liss");
  btn.classList.toggle("btnmove");
});

window.addEventListener("scroll", w);

function w() {
  if (scrollY >= 400) {
    const scrollmy = document.querySelector("#scrollmy");
    scrollmy.style.display = "block";
  } else {
    scrollmy.style.display = "none";
  }
}

scrollmy.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", ws);
window.addEventListener("load", ws);

function ws() {
  const wSA = document.querySelector("#welocome-section");
  let HomeWE = document.querySelector(".HomeWE");
  if (window.scrollY <= 800 && window.screen.width >= 700 && window.scrollY <= 650)  {
    HomeWE.style.cssText =
      "background: var(--lihover);color: var(--licolorHover);padding-right: 50px;padding-left: 50px;border-radius: 10px;cursor: pointer;justify-content: space-around;transition: ease-in-out 600ms;";
  } else {
    HomeWE.style.cssText = "transition: ease-in-out 600ms;";
  }
}
  window.addEventListener("scroll", skillsFU);

  function skillsFU() {
    let skill = document.querySelector("#skills");
    let skillsWE = document.querySelector(".skillsWE");
    if (window.scrollY <= 700 && window.screen.width >= 700 && window.scrollY >= 600) {
      skillsWE.style.cssText =
        "background: var(--lihover);color: var(--licolorHover);padding-right: 50px;padding-left: 50px;border-radius: 10px;cursor: pointer;justify-content: space-around;transition: ease-in-out 600ms;";
    } else {
      skillsWE.style.cssText = "transition: ease-in-out 600ms;";
  }

  }



  window.addEventListener("scroll", projectsFU);

  function projectsFU() {
    let projectWE = document.querySelector(".projectWE");
    if (window.scrollY <= 1380 && window.screen.width >= 700 && window.scrollY >= 849) {
      projectWE.style.cssText =
        "background: var(--lihover);color: var(--licolorHover);padding-right: 50px;padding-left: 50px;border-radius: 10px;cursor: pointer;justify-content: space-around;transition: ease-in-out 600ms;";
    } else {
      projectWE.style.cssText = "transition: ease-in-out 600ms;";
  }

}



window.addEventListener("scroll", Contact);

function Contact() {
  let ContactWE = document.querySelector(".ContactWE");
  if (window.screen.width >= 700 && window.scrollY >= 1700) {
    ContactWE.style.cssText =
      "background: var(--lihover);color: var(--licolorHover);padding-right: 50px;padding-left: 50px;border-radius: 10px;cursor: pointer;justify-content: space-around;transition: ease-in-out 600ms;";
  } else {
    ContactWE.style.cssText = "transition: ease-in-out 600ms;";
}

}

  
// // add my to befor #projects
// let projects = document.querySelector("#imgmy");

// // creat element
// let myinfodiv = document.createElement("div");
// let myimg = document.createElement("img");
// let myh2 = document.createElement("h2");
// let mydiv2 = document.createElement("div");

// // append my to befor #projects
// projects.before(myinfodiv);

// // appendchild my to myinfodiv
// myinfodiv.appendChild(myimg);
// myinfodiv.appendChild(myh2);
// myinfodiv.appendChild(mydiv2);

// // add class to myinfodiv
// myinfodiv.setAttribute("class", "classmyinfodiv");
// // add src to myimg
// myimg.setAttribute("src", "/photo.jpg");

// // creat contact
// let c =
//   '</div class="contact_bottom_img">' +
//   '<a href="https://www.facebook.com/mohamed404eg/" target="_blank" class="social-media">' +
//   ' <i class="ri-facebook-box-fill ri-2x"></i>' +
//   "</a>" +
//   '<a href="https://twitter.com/mohamed404eg" target="_blank" class="">' +
//   ' <i class="ri-twitter-fill ri-2x"></i>' +
//   "</a>" +
//   '<a href="#" class="">' +
//   '<i class="ri-at-line ri-2x"></i>' +
//   "</a>" +
//   '<a href="https://www.linkedin.com/in/mohamed404eg/" class="social-media" target="_blank">' +
//   '<i class="ri-linkedin-box-fill ri-2x"></i>' +
//   "</a>" +
//   '<a href="#" class="">' +
//   '<i class="ri-cellphone-fill ri-2x"></i>' +
//   "</a>" +
//   "</div>";

// // add to mydiv2
// mydiv2.innerHTML = c;

// // add src to myimg

// skills
let html = document.querySelector(".html");
let javascript = document.querySelector(".javascript");
let css = document.querySelector(".css");
let skills = document.querySelector("#skills");

window.onscroll = () => {
  if (window.scrollY >= skills.offsetTop - 600) {
    html.style.cssText = "width:100%";
    css.style.cssText = "width:100%";
    javascript.style.cssText = "width:100%";
  }
};

// add css js  .javascript-icon
// let javascriptIcon = document.querySelector(".javascript-icon");
// javascriptIcon.style.cssText = "display: block;";

window.addEventListener("scroll", projectAn);

function projectAn() {
  let projects = document.querySelector("#projects");
  let projectTile = document.querySelector(".project-tile");
  if (window.scrollY >= projects.offsetTop - 250) {
    projectTile.style.cssText =
      " animation: projectAn  1s; transition: ease-in 1s;";
  }
}
