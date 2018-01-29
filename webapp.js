// JavaScript Document

// global variables
var money = 0;
var trees = 1;
var land = 1;

function crouton_click() {
	money++;
	document.getElementById("score").value = money;
}

document.getElementById("tree").addEventListener("click", function(){
	crouton_click();
});