console.log("JS jalan");

const navbar = document.querySelector("#navbar");
const darkToggle = document.querySelector("#dark-toggle");
const menuLinks = document.querySelectorAll(".menu-link");


// DARK MODE

const modeTersimpan = localStorage.getItem("darkMode");

if(modeTersimpan === "aktif"){
document.body.classList.add("dark-mode");
darkToggle.textContent="🌙 Light Mode";
}

darkToggle.addEventListener("click", ()=>{

document.body.classList.toggle("dark-mode");

const aktif=document.body.classList.contains("dark-mode");

darkToggle.textContent= aktif ?
"🌙 Light Mode" : "🌙 Dark Mode";

localStorage.setItem("darkMode",
aktif ? "aktif":"nonaktif");

});


// NAVBAR SCROLL

window.addEventListener("scroll",()=>{

if(window.scrollY>80){
navbar.classList.add("navbar-scroll");
}else{
navbar.classList.remove("navbar-scroll");
}

});

navbar.classList.add("navbar-scroll");

// SMOOTH SCROLL

menuLinks.forEach((link)=>{

link.addEventListener("click",(event)=>{

event.preventDefault();

const targetId=link.getAttribute("href");
const targetEl=document.querySelector(targetId);

targetEl.scrollIntoView({
behavior:"smooth"
});

});

});

// ANIMASI ANGKA STATISTIK

const counters = document.querySelectorAll(".stat-angka");

counters.forEach(counter => {

const target = +counter.getAttribute("data-target");

let count = 0;

const updateCounter = () => {

const increment = target / 100;

if(count < target){
count += increment;
counter.textContent = Math.floor(count);
requestAnimationFrame(updateCounter);
}else{
counter.textContent = target;
}

};

updateCounter();

});