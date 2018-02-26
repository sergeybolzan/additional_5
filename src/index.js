module.exports = function check(str, bracketsConfig) {
 	let arr = [];
	let result = false;
	for(let i = 0; i < str.length; i++) {
		let prev = arr[arr.length - 1];
		let curr = str[i];

		for(let i = 0; i < bracketsConfig.length; i++) {
			if (prev == bracketsConfig[i][0] && curr == bracketsConfig[i][1]) {
				arr.pop();
				result = true;
				break;
			}
		}

		if (result == false) arr.push(curr);
		result = false;
	}
	return arr.length == 0;
}
