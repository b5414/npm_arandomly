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

const {dilute, pad, minMaxCheck} = require('./globals.js');

const rand = (min = 1, max = 100)=>{
	[min, max] = minMaxCheck(min, max);
	return Math.floor(min + Math.random() * (max + 1 - min));
};

const random = (min, max)=>rand(min, max) / 100;

const randomNumbersArray = (min, max, obj = {})=>{
	console.log(obj);
	if(min > max)[min, max] = [max, min];
	return rand(min, max) / 100;
};

//
//
//

const float = ()=>{
	return Math.random();
};

//
//
//

const randBool = ()=>!rand(0, 1);

const bool = (trueChance = 50)=>{
	if(trueChance < 0){
		trueChance;
	}
	trueChance = parseInt();

	if(trueChance !== 50){
		return random(0, 100) <= trueChance / 100;
	}else if(trueChance === 0){
		return false;
	}else if(trueChance === 100){
		return true;
	}
	return randBool();
};

module.exports = {randBool, rand, random, bool, randomNumbersArray};