//let myAge = 37;
//console.log(myAge);


//function increment(){
//	console.log("The button was clicked");
//}



//function countdown(){
//		console.log(5);
//		console.log(5);
//		console.log(2);
//		console.log(2);
//		console.log(1);

//}


//------------------------------------------------------

let saveEl = document.getElementById("save-el");
let countEL = document.getElementById("count-el");

let count = 0;

function increment(){
//	count = count + 1;       //same as line 30
	count += 1;
	countEL.innerText = count;
}

//increment();

//-----------------------------------------------------------



function save(){

//	let countStr = count += " - ";

	let countStr = count + " - ";

	saveEl.textContent += countStr;       //textContent same as innerText

	console.log(countStr);

	count = 0;                           //reset counter to 0
	countEL.innerText = count;
}



function reset(){

	count = 0;
	countEL.innerText = count;

}




//---------------------------------------------------------


