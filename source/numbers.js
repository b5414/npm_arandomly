const {minMax} = require('./globals.js');

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

/**
 * @description Random bool value
 *
 * @return {boolean} True or False
 */
const randBool = ()=>!rand(0, 1);

/**
 * @description Random bool, with true chance percent
 *
 * @param {number} [trueChance=50] - Percentage chance to True
 * @return {boolean} True or False
 */
const bool = (trueChance = 50)=>{
	if(!trueChance && trueChance !== 0)trueChance = 50;
	else trueChance = parseInt(trueChance);

	if(trueChance <= 0)return false;
	else if(trueChance >= 100)return true;
	else if(trueChance !== 50)return rand(0, 100) <= trueChance;
	return randBool();
};

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

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

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

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
 * @param {number} [decimal=3] - Number of decimal places (0-38)
 * @return {number} Random float, with N numbers after dot
 */
const randBigFloat = (min = 0, max = 100, decimal = 3)=>{
	[min, max] = minMax(min, max);
	const mpd = Math.pow(10, decimal);
	return (rand(min * mpd, max * mpd) / mpd / 100).toFixed(decimal);
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
