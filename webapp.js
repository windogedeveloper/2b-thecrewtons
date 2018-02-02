// JavaScript Document

// global variables
var money = 0;
var trees = 1;
var land = 5;
var tree_price = 1;
var land_price = 10;

function crouton_click() {
	money += trees;
	update_values();
}

window.onload = function() {
	// load cookies (if they exist)
	
	// update values
	update_values();
	// add event listeners
	document.getElementById("tree").addEventListener("click", crouton_click);
	document.getElementById("moretrees").addEventListener("click", buy_trees);
	document.getElementById("moreland").addEventListener("click", buy_land);
};

function buy_land() {
	if( money >= land_price ) {
		money -= land_price;
		land += 5;
		land_price *= 1.1;
	}
	update_values();
}

function buy_trees() {
	if( money >= tree_price && trees < land ) {
		money -= tree_price;
		trees++;
	}
	else if( trees >= land ) {
		alert ("You do not have enough land");
	}
	else if( money > tree_price ) {
		alert ("You do not have enough CashMoney");
	}
	else if( money > land_price ) {
		alert ("You do not have enough CashMoney");
	}
	update_values();
}

function update_values() {
	document.getElementById("score").value = money;
	document.getElementById("trees").value = trees;
	document.getElementById("land").value = land;

}