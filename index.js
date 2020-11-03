const {padLeft, dilute, minMax} = require('./source/globals.js');
const {bool, randBool, rand, randInt, random, randFloat, randBigFloat} = require('./source/numbers.js');

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

/**
 * @description Roll a dice
 *
 * @param {number} [side=6] Cube sides
 * @returns {object} obj {visual, result}
 */
const dice = (side = 6)=>{
	const result = rand(1, side);
	const visual = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][result - 1] || false;
	return {text: `diced (1 of ${side}): ${result} ${visual ? visual : ''}`, visual, result};
};

/**
 * @description Roll random number 1 to 100
 *
 * @param {boolean} [detailed=false] Detailed object output
 * @returns {number | object} number 1-100 | obj {result, text, pad, padSpace}
 */
const roll = (detailed = false)=>{
	const result = rand(1, 100);
	if(detailed){
		const padPad = padLeft(result, 3);
		return {text: `rolls (1-100): ${b}`, result, pad: padPad, padSpace: dilute(padPad)};
	}
	return result;
};

/**
 * @description Slot machine
 *
 * @param {number} [spins=1] Arrays quantity
 * @returns {array} aaaaaaaaaa
 */
const slot = (spins = 1)=>{
	const visual = ['🍒', '🍎', '🍋', '🍑', '🍇', '🍉', '🥭', '🍓', '🍐'];
	const randomElement2 = (arr)=>{
		const index = rand(0, arr.length - 1);
		return {index, element: arr[index]};
	};
	const doSpin = ()=>[randomElement(visual), randomElement(visual), randomElement(visual)];

	let result = [];
	while(result.length < spins){
		result.push(doSpin());
	}
	return result;
};

(async()=>{
	// await new Promise((yes)=>{
	// 	setTimeout(yes, 100);
	// });

	console.log(slot(4));
})();

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
 * @description Random date from 1970 to 2038 (Yes, unix)
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

/**
 * @description Random value of element from object
 *
 * @param {object} obj - Not empty object
 * @returns {value} Value
 */
const oneValueOfObject = (obj)=>oneOfArray(Object.values(obj));

/**
 * @alias oneValueOfObject
 */
const randomObjValue = oneValueOfObject;

/**
 * @description Random element from object
 *
 * @param {object} obj - Not empty object
 * @returns {object} One element from object
 */
const oneOfObject = (obj)=>{
	const a = oneOfArray(Object.keys(obj));
	return {[a]: obj[a]};
};

/**
 * @alias oneOfObject
 */
const randomObjElement = oneOfObject;

/**
 * @description Random array generator
 *
 * @param {number} [leng] Length of array
 * @param {{number:number, float:number, string:number, bool:number}} [obj] Object with MAX length of random [number\float\string_length]
 * @returns {array} Array with random values
 */
const randomArrayGen = (leng, obj = {string: true})=>{
	if(!leng || typeof leng !== 'number' || typeof obj !== 'object' || Array.isArray(obj))return false;

	let arr = ['number', 'float', 'string', 'bool', 'date'];

	let k = 0;
	for(let [key, val] of Object.entries(obj)){
		if(arr.indexOf(key) === -1 || val === false){
			delete obj[key];
			continue;
		}
		k++;
	}
	if(k === 0)return false;

	const doShish = (val, huh)=>{
		switch(val){
			case 'string':
				if(huh === true)val = randomString();
				else val = randomString(huh);
				break;
			case 'number':
				if(huh === true)huh = 3;
				const mp = Math.pow(10, huh);
				val = parseInt(randBigFloat(0, 100, huh) * mp);
				while(huh < mp * 10)huh = huh * 10;
				break;
			case 'float':
				if(huh === true)huh = 3;
				val = randBigFloat(0, 100, huh);
				break;
			case 'date':
				if(huh === true)val = randomDate();
				else val = randomDateYear(huh);
				break;
			case 'bool':
				if(huh === true)val = randBool();
				else val = bool(huh);
				break;
		}
		return val;
	};

	arr = Object.keys(obj);

	let array = new Array(leng).fill(!0);
	array.forEach((e, i)=>{
		const val = oneOfArray(arr);
		array[i] = doShish(val, obj[val]);
		// todo check: each type - contained
	});
	return array;
};

/**
 * @description Random output from promises array
 *
 * @param {array} arr - Not empty array
 * @returns {value} One Promise output
 */
const randomRace = (arr)=>oneOfArray(arr);

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

module.exports = {
	/* numbers */
	bool,
	randBool,
	rand,
	randInt,
	random,
	randFloat,
	randBigFloat,

	/* globals */
	padLeft,
	dilute,
	minMax,

	/* index */
	roll,
	dice,

	oneOfArray,
	randomElement,
	oneOfObject,
	randomObjElement,
	oneValueOfObject,
	randomObjValue,

	randomString,
	randomDate,
	randomDateYear,
	randomDateYears,
	randomArrayGen,

	randomRace,
};
