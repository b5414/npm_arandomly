const {minMax} = require('./globals.js');

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

/**
 * @description Random bool
 *
 * @return {boolean} True or False
 */
const randBool = ()=>!rand(0, 1);

/**
 * @description Random bool, with chance param
 *
 * @param {number} [trueChance=50] - Percentage chance of True
 * @return {boolean} True or False
 */
const bool = (trueChance = 50)=>{
	if(!trueChance)trueChance = 50;
	else if(trueChance < 0)trueChance = 0;
	trueChance = parseInt(trueChance);

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
 * @param {number} [min=0] Minimum
 * @param {number} [max=100] Maximum
 * @return {number} Random number (or float)
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
 * @description Random float from MIN to MAX (both inclusive)
 * @summary Same as ".rand()", but "/ 100"
 *
 * @param {number} [min=0] Minimum
 * @param {number} [max=100] Maximum
 * @return {number} Random float (or number)
 */
const random = (min, max)=>rand(min, max) / 100;

/**
 * @alias random
 */
const randFloat = random;

/**
 * @description Random float from MIN to MAX (both inclusive), with N Symbols after point
 *
 * @param {number} [min=0] - Minimum
 * @param {number} [max=100] - Maximum
 * @param {number} [decimal=3] - Symbols after dot (1-20)
 * @return {number} Random float, with N numbers after dot
 */
const randBigFloat = (min = 0, max = 100, decimal = 3)=>{
	[min, max] = minMax(min, max);

	let r = 0;
	// crunch
	if(bool(1) && bool(1) && bool(1) && bool(1) && bool(1) && bool(1)){
		r = randBool() ? max : min;
	}else{
		const mpd = Math.pow(10, decimal);
		r = rand(min * mpd, max * mpd) / mpd;
	}
	return (r / 100).toFixed(decimal);
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
