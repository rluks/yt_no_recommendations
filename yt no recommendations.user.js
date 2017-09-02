// ==UserScript==
// @name         yt no recommendations
// @namespace    http://tampermonkey.net/
// @version      0.4.1
// @description  Removes list of suggested videos from youtube
// @author       rluks
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

var items;
var removedText = "Video suggestions removed by 'yt no recommendations' (Tampermonkey/Greasemonkey script)";
var checkedTimes = 0;

function removeSuggestions(){
    items.innerHTML = removedText;
}

function checkSuggestions(){

    checkedTimes++;
    
    items = document.querySelector("#related");

    if(items.innerHTML !== removedText){
        removeSuggestions();
        setTimeout(checkSuggestions, 1000);
    }else{
        if(checkedTimes < 10)
            setTimeout(checkSuggestions, 5000);
    }


}


(function() {
    'use strict';
    setTimeout(checkSuggestions, 1000);
    
    document.addEventListener('visibilitychange', function(){
        setTimeout(checkSuggestions, 1000);
    });

})();