//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const {dilute, pad, minMaxCheck} = require('./source/globals.js');

const oneOfArray = (arr)=>arr[rand(0, arr.length - 1)];

const randomDateYear = (year = [])=>{
	if(!Array.isArray(year))year = [year];
	year.forEach((e, i)=>(year[i] = parseInt(e)));
	year.sort();

	let date = new Date();
	let max = 0;

	if(date.getFullYear() > year[year.length - 1]){
	}else{
		max = new Date().getTime();
	}
	// is today > biggest year

	let unix = 0;
	let until = true;

	while(until){
		unix = rand(0, max);
		date = new Date(unix);

		// date.getFullYear() !== year
	}

	return date;
};

const roll = (detailed = false)=>{
	const result = rand(1, 100);
	if(detailed){
		const a = pad(result, 3);
		const b = dilute(a);
		return {text: `rolls (1-100): ${b}`, result, pad: a, padSpace: b};
	}
	return result;
};

module.exports = {pad, dilute, randBool, rand, random, roll, oneOfArray};
