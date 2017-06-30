// ==UserScript==
// @name         yt no recommendations
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Removes list of suggested videos from youtube
// @author       rluks
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

var items;
var removedText = "Video suggestions removed by 'yt no recommendations' (Tampermonkey script)";

function removeSuggestions(){

    items.innerHTML = removedText;

    var continuations = document.getElementById("continuations");
    continuations.innerHTML = "";
}

function checkSuggestions(){

    items  = document.querySelector("#related").querySelector("#items");

    if(items.className !== "style-scope ytd-watch-next-secondary-results-renderer"){
        return;
    }

    if(items.innerHTML !== removedText){
        removeSuggestions();
        setTimeout(checkSuggestions, 1000);
    }


}


(function() {
    'use strict';
    //setInterval(checkSuggestions, 1000);
    setTimeout(checkSuggestions, 1000);

})();