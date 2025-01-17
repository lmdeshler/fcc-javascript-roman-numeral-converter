const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const roman = () => {
	const numberArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
 	const romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
	let numberConvert = number.value
	let	romanText = "";

	for (let i = 0; i < numberArray.length; i++) {
    while (numberArray[i] <= numberConvert) {
      romanText += romanArray[i]
      numberConvert -= numberArray[i]
    }
 
	
}
 return romanText 
}


 const checkBtn = () => { 
	if(!number.value){ 
		output.textContent = "Please enter a valid number"
		}else if(number.value <0){
			output.textContent = "Please enter a number greater than or equal to 1"
			} else if(number.value >=4000){
				output.textContent = "Please enter a number less than or equal to 3999"}
				else{
					output.innerHTML = roman(number)
					}
					}

convertButton.addEventListener("click", checkBtn);