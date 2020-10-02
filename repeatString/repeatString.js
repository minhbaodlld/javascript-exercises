function repeatString(inputString, repeat){
	let result = '';
	loop: while (repeat > 0){
		
		result += inputString;
		repeat--;
	}
	if (repeat < 0){
		result = 'ERROR' 
	}
	return result
}
module.exports = repeatString;