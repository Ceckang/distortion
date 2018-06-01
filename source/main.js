"use strict";

document.addEventListener("DOMContentLoaded",loadScript);

async function loadScript(){

        let jsonObject = await fetch("https://kea-alt-del.dk/kata-distortion/");
        let mitJson = await jsonObject.json();

        console.log(mitJson);

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
    
    //TODO:
    // lav en funktion der tager 3 prametre og spytter de 3 content elementer ud
    // put de tre content in i en container-div
    // lav en max-limit for setInterval
    // function ---
};

setInterval(function(){ 
    loadScript();    
}, 10000);
