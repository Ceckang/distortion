"use strict!"
/* function loadJson(path, element){
    fetch(path)
       .then(function(response){
           return response.text();
       })
       .then(function(data){
           console.log(document.querySelector(element))         

           document.querySelector(element).innerHTML = data;
           //document.querySelector("#recieve").appendChild(document.querySelector("template").content.cloneNode(true));
       })
}
loadJson("https://kea-alt-del.dk/kata-distortion/", "template")


setInterval(function(){ 
    loadScript();    
}, 10000); */

let myVar = setInterval(myTimer, 1000);
document.addEventListener("DOMContentLoaded",loadScript);

async function loadScript(){

        let jsonObject = await fetch("https://kea-alt-del.dk/kata-distortion/");
        let mitJson = await jsonObject.json();

        console.log(mitJson);


        
};
function addDiv(){
loadScript();
const mydiv = document.createElement("div");   
document.body.appendChild(mydiv);

}


function myTimer() {

    
    for(let i=0; i<25; i++){
        const mydiv = document.createElement("div");   
       //app.appendChild(mydiv);
       document.body.appendChild(mydiv);
}
}

function clearIntervalFunction() {
    clearInterval(myVar);}



//setInterval(function(){ 
    //const app = document.createElement("div");
   // console.log("app", app);
   // app.setAttribute("id", "app");
/*     for(let i=0; i<25; i++){
         const mydiv = document.createElement("div");

          
    
        //app.appendChild(mydiv);
        document.body.appendChild(mydiv);
} */
//}, 10000);




/* const app = document.createElement("div");
console.log("app", app);
app.setAttribute("id", "app");
for(let i=0; i<25; i++){
     const mydiv = document.createElement("div");
    // document.querySelector("#app").appendChild(mydiv);
    app.appendChild(mydiv);
}
document.body.appendChild(app); */

/* const divs = document.querySelectorAll("#app div");
divs.forEach(function(div){
    //div.style.transform = `translate(50vw, 50vh)`;
div.addEventListener("mouseenter", function(){
    div.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
    div.style.backgroundColor = `hsl(${Math.random()*1360}, ${Math.random()*100}%, 50%)`;
})
}) */