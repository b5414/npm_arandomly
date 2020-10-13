const {minMaxCheck} = require('./globals.js');

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
 * @param {integer} [True_Chance=50] - Percent chance to get true (number)
 * @return {boolean} true or false
 */
const bool = (trueChance = 50)=>{
	if(!trueChance)trueChance = 50;
	else if(trueChance < 0)trueChance = 0;
	trueChance = parseInt(trueChance);

	if(trueChance === 0)return false;
	else if(trueChance === 100)return true;
	else if(trueChance !== 50)return rand(0, 100) <= trueChance;
	return randBool();
};

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

/**
 * @brief Random int from A to B
 *
 * @param {number} [min=0] - Minimum (number, inclusive)
 * @param {number} [max=100] - Maximum (number, inclusive)
 * @return {number} - Number between
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
 * @brief Random float from 0.AA to 0.BB, with C symbols after point
 *
 * @param {number} [min=0] - Minimum .A (number, inclusive)
 * @param {number} [max=100] - Maximum .B (number, inclusive)
 * @param {number} [decimal=2] - Symbols after dot (number)
 * @return {number} 0 to 1 (or to more than 1), with N numbers after dot
 */
const randBigFloat = (min = 0, max = 100, decimal = 3)=>{
	let r = (min + Math.random() * (max + 1 - min)) / 100;
	const b = `${r}`.indexOf('.');
	return +`${r}`.slice(0, b + decimal + 1);
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
