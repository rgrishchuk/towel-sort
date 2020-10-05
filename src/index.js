
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (matrix == undefined) return [];
	let result = [];
	let reverse = false;
	matrix.forEach((item) => {
	 	if (reverse) {
	 		reverse = false;
	 		result = result.concat(item.reverse());	
	 	} else {
	 		reverse = true;
	 		result = result.concat(item);	
	 	}
	});
	return result;
}
