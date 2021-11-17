/**
 * @description "A" to "BBA"
 *
 * @param {string | number} n - Value to padding
 * @param {number} [len=3] - Number of pads
 * @param {string | number} [pad=0] - Pad ("B" - value)
 * @returns {string} Padded string
 */
const padLeft = (n, len = 3, pad = 0)=>{
	while(`${n}`.length < len)n = `${pad}${n}`;
	return n;
};

/**
 * @description "AAA" to "ABABA" (explode + implode)
 *
 * @param {string | number} value - Value to dilute
 * @param {string | number} [glue=' '] - Implode glue ("B" - value)
 * @returns {string}
 */
const dilute = (value, glue = ' ')=>`${value}`.split('').join(`${glue}`);

/**
 * @description A and B to [A, B] or [B, A]
 *
 * @param {number} any Number
 * @param {number} any Number
 * @returns {array} array [min, max] of numbers
 */
const minMax = (min, max)=>(min > max ? [max, min] : [min, max]);

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

/**
 * @description Random bool
 *
 * @return {boolean} True or False
 */
const bool = ()=>Math.random() < 0.5;

/**
 * @alias bool
 */
const randBool = bool;

/**
 * @description Random bool, with true chance percent
 *
 * @param {number} [trueChance=50] - Percentage chance to get True
 * @return {boolean} True or False
 */
const boolChance = (trueChance)=>{
	trueChance = parseInt(trueChance);
	if(!trueChance && trueChance !== 0)trueChance = 50;

	if(trueChance < 1)return false;
	else if(trueChance > 99)return true;
	else if(trueChance !== 50)return rand(0, 100) <= trueChance;
	return randBool();
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * @description Random number from MIN to MAX (both inclusive)
 *
 * @param {number} [min=0] Minimum value
 * @param {number} [max=100] Maximum value
 * @return {number} Random value
 */
const rand = (min = 0, max = 100)=>{
	[min, max] = minMax(min, max);
	return Math.floor(min + Math.random() * (max + 1 - min));
};

/**
 * @alias rand
 */
const randInt = rand;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * @description Random number from MIN to MAX (both inclusive)
 * @summary Same as ".rand()", but +"/ 100"
 *
 * @param {number} [min=0] Minimum value
 * @param {number} [max=100] Maximum value
 * @return {number} Random number
 */
const random = (min, max)=>rand(min, max) / 100;

/**
 * @alias random
 */
const randFloat = random;

/**
 * @description Random float from MIN to MAX (both inclusive), with N Symbols after point
 *
 * @param {number} [min=0] - Minimum value
 * @param {number} [max=100] - Maximum value
 * @param {number} [decimal=3] - Number of decimal places (0-18)
 * @return {number} Random float, with N numbers after dot
 */
const randBigFloat = (min = 0, max = 100, decimal = 3)=>{
	[min, max] = minMax(min, max);
	const mpd = Math.pow(10, decimal);
	return parseFloat((rand(min * mpd, max * mpd) / mpd / 100).toFixed(decimal));
};

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

/**
 * @description Roll a dice
 *
 * @param {number} [side=6] Cube sides
 * @returns {object} obj {result, text, visual}
 */
const dice = (side = 6)=>{
	const result = rand(1, side);
	const visual = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][result - 1] || false;
	return {result, text: `diced (1 of ${side}): ${result} ${visual ? visual : ''}`, visual};
};

/**
 * @description Roll random number 1 to 100
 *
 * @returns {object} obj {result, text, pad, padSpace}
 */
const roll = ()=>{
	const result = rand(1, 100);
	const padPad = padLeft(result, 3);
	return {result, text: `rolls (1-100): ${result}`, pad: padPad, padSpace: dilute(padPad)};
};

/**
 * @description Slot machine
 *
 * @param {number} [spins=1] Suitable for animations OR if slot machines > 1
 * @param {number} [reels=3] Number of reels (cylinders with fruits)
 * @param {array} [visual] Reels content
 * @returns {array} Array of arrayS with objectS = {value, visual}
 */
const slot = (spins = 1, reels = 3, visual = false)=>{
	if(!visual || !Array.isArray(visual))visual = ['🍒', '🍎', '🍋', '🍑', '🍇', '🍉', '🥭', '🍓', '🍐'];

	const doSpin = ()=>{
		const fewreels = [];
		while(fewreels.length < reels){
			const value = rand(0, visual.length - 1);
			fewreels.push({value, visual: visual[value]});
		}
		return fewreels;
	};

	return [...new Array(spins)].map(()=>doSpin());
};

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
const randomArrElement = oneOfArray;

/**
 * @description Random string from A-Z & a-z letters
 *
 * @param {number} [leng=4] Length of output
 * @param {string} [symbols="A-z alphabet"] Pool of letters\symbols\numbers
 * @returns {string} Random string
 */
const randomString = (leng = 4, symbols)=>{
	if(!symbols)symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let result = '';
	while(result.length < leng)result += symbols.charAt(Math.floor(Math.random() * symbols.length));
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
 * @param {value | array} [years] - The year or [years] (will be parseInt)
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

				while((val === 0 && huh > 1) || val === 'number')val = parseInt(randBigFloat(0, 99, huh) * mp);

				if(val !== 0){
					while(val < mp / 10)val = val * 10;
					while(val >= mp)val = val / 10;
					val = parseInt(val);
				}
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
				else val = boolChance(huh);
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

/**
 * @description Random code generator (for sms)
 *
 * @param {number} [len=4] Length or code
 * @param {bool} [simple=true] Its easy to type for a person
 */
const randomSmsCode = (leng = 4, simple = true)=>{
	const prefab = Array.from(String(rand(10 ** (leng - 1), 10 ** leng - 1)));
	if(!simple)return prefab.join('');

	const result = [];
	for(let k = 0; k < leng; k++){
		if(k === 0 || randBool()){
			result.push(prefab[k]);
			continue;
		}

		let a = +prefab[k - 1];
		if(boolChance(25))a = oneOfArray(result);
		result.push(a);
	}

	return result.join('');
};

/**
 * @alias randomSmsCode
 * @description Alias with simple always true
 *
 * @param {number} [len=4] Length or code
 */
const randomCode = (len = 4)=>randomSmsCode(len, true);

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

module.exports = {
	/* basic */
	bool,
	randBool,
	rand,
	random,
	randInt,
	randFloat,
	randBigFloat,

	boolChance,

	/* stuff */
	padLeft,
	dilute,
	minMax,

	/* joy */
	roll,
	dice,
	slot,

	/* js object */
	oneOfArray,
	randomArrElement,
	oneOfObject,
	randomObjElement,
	oneValueOfObject,
	randomObjValue,

	/* etc */
	randomCode,
	randomSmsCode,
	randomString,
	randomArrayGen,
	randomDate,
	randomDateYear,
	randomDateYears,

	randomRace,
};
