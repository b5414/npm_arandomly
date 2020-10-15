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

	// let r = min + Math.random() * (max - min + 1);
	let r = Math.random() * (max - min) + min;
	// let r = max - min + 1;
	// console.log(r);
	// r = Math.random() * r;
	// console.log(r);
	// r = min + r;

	// if(bool(1))r = max;
	// else if(bool(1))r = min;
	return (r / 100).toFixed(decimal);
};

// let tf = true;
// for(let k = 0; tf; k++){
// 	let r = randBigFloat(0, 2, 16);
// 	console.log(r);
// 	// if(r === 0 || r > 1){
// 	if(k > 2){
// 		tf = false;
// 	}
// }

const aaaflaot = (min, max, decimal = 4)=>{
	let num = Math.pow(10, decimal);
	console.log(num);
	let r = rand(min * num, max * num);
	r = r / num;
	return (r / 100).toFixed(decimal);
};

const aaaflaot2 = (min, max, decimal = 4)=>{
	let r = 0;
	if(bool(1) && bool(1) && bool(1) && bool(1)){
		r = randBool() ? max : min;
	}else{
		const mpd = Math.pow(10, decimal);
		r = rand(min * mpd, max * mpd) / mpd;
	}
	return (r / 100).toFixed(decimal);
};

// let tf = true;
// for(let k = 0; tf; k++){
// 	let r = aaaflaot(0, 100, 10);
// 	// if(r < 0.00000001 || r >= 1){
// 	if(r >= 1){
// 		console.log(r);
// 		tf = false;
// 	}
// }

let arr = [];
for(let k = 0; k < 200; k++){
	let r = aaaflaot(90, 100);
	if(r > 0.9015 && r < 0.9995)k--;
	else arr.push(r);
}
arr.sort();
arr.forEach((e, i)=>{
	console.log(i, e);
});

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
