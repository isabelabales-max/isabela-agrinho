// ACCORDION

document.querySelectorAll(".accordion").forEach(btn=>{

btn.addEventListener("click",()=>{

const content=btn.nextElementSibling;

if(content.style.display==="block"){
content.style.display="none";
}else{
content.style.display="block";
}

});

});

// FONTE

let currentFont=16;

document.getElementById("increaseFont")
.addEventListener("click",()=>{

currentFont+=2;

document.documentElement.style.fontSize=
currentFont+"px";

});

document.getElementById("decreaseFont")
.addEventListener("click",()=>{

currentFont-=2;

if(currentFont<12) currentFont=12;

document.documentElement.style.fontSize=
currentFont+"px";

});

// TEMA

document.getElementById("toggleTheme")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

// LEITURA POR VOZ

let speech;

document.getElementById("readPage")
.addEventListener("click",()=>{

window.speechSynthesis.cancel();

const content =
document.getElementById("main-content").innerText;

speech =
new SpeechSynthesisUtterance(content);

speech.lang="pt-BR";

window.speechSynthesis.speak(speech);

});

document.getElementById("stopReading")
.addEventListener("click",()=>{

window.speechSynthesis.cancel();

});