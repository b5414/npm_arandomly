const {padLeft, dilute, minMax} = require('./source/globals.js');
const {bool, randBool, rand, randInt, random, randFloat, randBigFloat} = require('./source/numbers.js');

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

/**
 * @description Roll random number 1 to 100
 *
 * @param {boolean} [detailed=false] Detailed object output
 * @returns {number | object} number 1-100 | obj {result, text, pad, padSpace}
 */
const roll = (detailed = false)=>{
	const result = rand(1, 100);
	if(detailed){
		const a = padLeft(result, 3);
		const b = dilute(a);
		return {text: `rolls (1-100): ${b}`, result, pad: a, padSpace: b};
	}
	return result;
};

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

/**
 * @description Random string from A-Z & a-z letters
 *
 * @param {number} [leng=4] Length of output
 * @param {string} [symbols="A-z alphabet"] Pool of letters\symbols\numbers
 * @returns {string} Random string
 */
const randomString = (leng = 4, symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')=>{
	let result = '';
	for(let k = 0; k < leng; k++)result = `${result}${symbols.charAt(Math.floor(Math.random() * symbols.length))}`;
	return result;
};

/**
 * @description Random date gen from 1970 to 2038 (Yes, unix)
 *
 * @param {number} [min=0] - Minimum unix secs (number)
 * @param {number} [max=2147483648] - Maximum unix secs (number)
 * @returns {date} Random Date
 */
const randomDate = (min = 0, max = 2147481337)=>new Date(rand(min, max) * 1000);

/**
 * @description Random date generator
 *
 * @param {value | array} [years] - The year or [years] (be parsed_Int)
 * @returns {date} Random Date with specified year
 */
const randomDateYear = (year = [2020])=>{
	if(!Array.isArray(year))year = [year];
	year.forEach((e, i)=>(year[i] = parseInt(e)));
	year = oneOfArray(year);
	return new Date(randomDate().setFullYear(year));
};

/**
 * @description Random dateS generator
 *
 * @param {[number]} [years] - The years you need
 * @returns {array} Random DateS with all specified yearS
 */
const randomDateYears = (years = [2020])=>{
	if(!Array.isArray(years))years = [years];
	years.forEach((e, i)=>(years[i] = new Date(randomDate().setFullYear(parseInt(e)))));
	return years;
};

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

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

// console.log(randomArrayGen(2, {}));
// console.log(randomArrayGen(3, []));
// console.log(randomArrayGen(0, []));

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

module.exports = {
	/* index */
	roll,
	oneOfArray,
	randomElement,
	randomString,
	randomDate,
	randomDateYear,
	randomDateYears,
	randomArrayGen,

	/* globals */
	padLeft,
	dilute,
	minMax,

	/* numbers */
	bool,
	randBool,
	rand,
	randInt,
	random,
	randFloat,
	randBigFloat,
};
