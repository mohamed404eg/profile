const btn = document.querySelector(".btn");

const scrollmy = dc=document.getElementById("scrollmy");





btn.addEventListener("click" , function(){

this.classList.toggle("is-active")


const nav = document.querySelector(".nav-linksdis");
nav.classList.toggle("nav-links")
 const liss = document.querySelector(".lis");
 liss.classList.toggle("liss")

});

window.onscroll = function() {
if(scrollY >= 400)

{

    const scrollmy = dc=document.getElementById("scrollmy");
    scrollmy.style.display = "block";


}
else {
    scrollmy.style.display = "none";

}
};

scrollmy.onclick = function () {

    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
};



// add my to befor #projects
let projects = document.querySelector("#projects");



// creat element
let myinfodiv = document.createElement("div");
let myimg = document.createElement("img");
let myh2 = document.createElement("h2");
let mydiv2 =document.createElement("div");




// append my to befor #projects
projects.before(myinfodiv)


// appendchild my to myinfodiv 
myinfodiv.appendChild(myimg);
myinfodiv.appendChild(myh2);
myinfodiv.appendChild(mydiv2);

// add class to myinfodiv
myinfodiv.setAttribute("class","classmyinfodiv");


// add src to myimg
myimg.setAttribute("src","/photo.jpg")

// creat contact
let c = '</div class="contact_bottom_img">'+'<a href="https://www.facebook.com/mohamed404eg/" target="_blank" class="social-media">'+' <i class="ri-facebook-box-fill ri-2x"></i>'+'</a>'+'<a href="https://twitter.com/mohamed404eg" target="_blank" class="">'+' <i class="ri-twitter-fill ri-2x"></i>'+'</a>'+'<a href="#" class="">'+'<i class="ri-at-line ri-2x"></i>'+'</a>'+'<a href="https://www.linkedin.com/in/mohamed404eg/" class="social-media" target="_blank">'+'<i class="ri-linkedin-box-fill ri-2x"></i>'+ '</a>'+'<a href="#" class="">'+
                '<i class="ri-cellphone-fill ri-2x"></i>'+
                
                '</a>'+
    
            '</div>';


// add to mydiv2 
mydiv2.innerHTML = c;