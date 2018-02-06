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
		land_price = (land_price * 1.1).toFixed(2);
	}
	else if( money < land_price ) {
		alert ("You do not have enough CashMoney");
	}
	update_values();
}

function buy_trees() {
	//alert("money: " + money + "\ntrees: " + trees + "\nland: " + land);
	if( money >= tree_price && trees < land ) {
		money -= tree_price;
		trees++;
	}
	else if( trees >= land ) {
		alert ("You do not have enough land");
	}
	else if( money < tree_price ) {
		alert ("You do not have enough CashMoney");
	}
	update_values();
}

function update_values() {
	document.getElementById("score").value = money;
	document.getElementById("trees").value = trees;
	document.getElementById("land").value = land;
	document.getElementById("moretrees").innerHTML = "Buy More Trees $" + tree_price;
	document.getElementById("moreland").innerHTML = "Buy More Land $" + land_price;

}