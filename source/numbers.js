const {minMaxCheck} = require('./globals.js');

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

/**
 * @brief Random int from A to B
 *
 * @param {number} [min=0] - Minimum (number, inclusive)
 * @param {number} [max=100] - Maximum (number, inclusive)
 * @return {number}
 */
const rand = (min = 0, max = 100)=>{
	[min, max] = minMaxCheck(min, max);
	return Math.floor(min + Math.random() * (max + 1 - min));
};

/**
 * @alias rand
 */
const randInt = rand;

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

/**
 * @brief Random float from A to B
 *
 * @param {number} [min=0] - Minimum (number, inclusive)
 * @param {number} [max=100] - Maximum (number, inclusive)
 * @return {number} - 0.00 to 1.00
 */
const random = (min, max)=>rand(min, max) / 100;

/**
 * @alias random
 */
const randFloat = random;

/**
 * @brief Random float from A to B, with C symbols after point
 *
 * @param {number} [min=0] - Minimum (number, inclusive)
 * @param {number} [max=100] - Maximum (number, inclusive)
 * @param {number} [decimal=2] - Symbols after dot (number)
 * @return {number} - 0.0(n*0) to 10*n
 */
const randBigFloat = (min, max, decimal = 2)=>{
	Math.random();
};

// console.log(randFloat(1, 100, 10));

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

/**
 * @brief Random bool
 *
 * @return {boolean} - true or false
 */
const randBool = ()=>!rand(0, 1);

/**
 * @brief Random bool
 *
 * @param {integer} [min=0] - Chance to recieve true (number)
 * @return {boolean} - true or false
 */
const bool = (trueChance = 50)=>{
	if(trueChance < 0){
		trueChance = 0;
	}
	trueChance = parseInt(trueChance);

	if(trueChance !== 50){
		return random(0, 100) <= trueChance / 100;
	}else if(trueChance === 0){
		return false;
	}else if(trueChance === 100){
		return true;
	}
	return randBool();
};

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

module.exports = {
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
