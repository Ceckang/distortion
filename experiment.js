"use strict";

document.addEventListener("DOMContentLoaded",loadScript);

async function loadScript(){

        let jsonObject = await fetch("https://kea-alt-del.dk/kata-distortion/");
        let mitJson = await jsonObject.json();

        console.log(mitJson);
        
       /*  const newDiv = document.createElement("div");
        console.log(newDiv);
        console.log(mitJson.id);
        
       const idDiv = newDiv.setAttribute(mitJson.id);
       console.log(idDiv);
        */
       //addElement();

    // create a new div element 
    let newDivId = document.createElement("div"); 
    // and give it some content 
    let newContentId = document.createTextNode("id: "+mitJson.id);

    let newDivQueue = document.createElement("div"); 
    let newContentQueue = document.createTextNode("inQueue: "+mitJson.inQueue);

    let newDivLog = document.createElement("div"); 
    let newContentLog = document.createTextNode("LoggedAt: "+mitJson.loggedAt);
    
    // add the text node to the newly created div    
    newDivId.appendChild(newContentId);  
    newDivQueue.appendChild(newContentQueue);
    newDivLog.appendChild(newContentLog); 
     
    // add the newly created element and its content into the DOM     
    document.body.appendChild(newDivId)
    document.body.appendChild(newDivQueue)
    document.body.appendChild(newDivLog)
    
    
    //var currentDiv = document.getElementById("div1"); 
    //document.body.insertBefore(newDiv, currentDiv); 
       
};

/* function addElement () { 
    // create a new div element 
    var newDiv = document.createElement("div"); 
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
  
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  } */



function addDiv(){
    //funktion der tilføjer en ny div til hvert json objekt

}
setInterval(function(){ 
    loadScript();    
}, 10000);

//interval.forEach(function(div){