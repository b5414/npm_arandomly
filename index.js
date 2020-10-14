const {padLeft, dilute, minMax} = require('./source/globals.js');
const {bool, randBool, rand, randInt, random, randFloat, randBigFloat} = require('./source/numbers.js');

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

/**
 * @description Random element from array
 *
 * @param {array} arr - Not empty array
 * @returns {value} Element from array
 */
const oneOfArray = (arr)=>arr[rand(0, arr.length - 1)];

/**
 * @alias oneOfArray
 */
const randomElement = oneOfArray;

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

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
		const a = padLeft(result, 3);
		const b = dilute(a);
		return {text: `rolls (1-100): ${b}`, result, pad: a, padSpace: b};
	}
	return result;
};

const randomString = (leng = 9)=>{
	const astring = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	
	// float to 123123, take 
	return astring;
};

const randomArrayGen = (leng, obj = {})=>{
	if(!leng || typeof leng !== 'number' || typeof obj !== 'object' || Array.isArray(obj))return false;

	if(!obj.number)obj.number = false;
	if(!obj.float)obj.float = false;
	if(!obj.string)obj.string = false;
	if(!obj.bool)obj.bool = false;

	randomString();

	// float

	// console.log(obj);
	// if(min > max)[min, max] = [max, min];
	// return rand(min, max) / 100;
};

console.log(randomArrayGen(2, {}));
console.log(randomArrayGen(3, []));
console.log(randomArrayGen(0, []));

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

module.exports = {
	/* index */
	oneOfArray,
	randomElement,
	/* ~~~~~ */
	/* globals */
	padLeft,
	dilute,
	minMax,
	/* ~~~~~ */
	/* bool */
	bool,
	randBool,
	/* int */
	rand,
	randInt,
	/* float */
	random,
	randFloat,
	randBigFloat,
};
