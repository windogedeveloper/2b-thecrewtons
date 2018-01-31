// JavaScript Document

// global variables
var money = 0;
var trees = 1;
var land = 1;

function crouton_click() {
	money += trees;
	update_values();
}

window.onload = function() {
	// add event listeners
	document.getElementById("tree").addEventListener("click", crouton_click);
	document.getElementById("moretrees").addEventListener("click", buy_trees);
};

function buy_land() {
	update_values();
}

function buy_trees() {
	if( money >= 50 ) {
		money -= 50;
		trees++;
	}
	update_values();
}

function update_values() {
	document.getElementById("score").value = money;
	document.getElementById("trees").value = trees;
	document.getElementById("land").value = land;

}