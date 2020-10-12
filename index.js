const pad = (n, len = 3)=>{
	if(`${n}`.length < len){
		n = `0${n}`;
		return pad(n, len);
	}
	return n;
};

const dilute = (me, dule = ' ')=>`${me}`.split('').join(`${dule}`);

const randBool = ()=>!rand(0, 1);

const rand = (min, max)=>{
	if(min > max)[min, max] = [max, min];
	return Math.floor(min + Math.random() * (max + 1 - min));
};

const random = (min = 0, max = 100)=>rand(min, max) / 100;

const oneOfArray = (arr)=>arr[rand(0, arr.length - 1)];

const roll = (detailed = false)=>{
	const result = rand(1, 100);
	if(detailed){
		const a = pad(result, 3);
		const b = dilute(a);
		return {text: `rolls (1-100): ${b}`, result, pad: a, padSpace: b};
	}
	return result;
};

module.exports = {pad, dilute, randBool, rand, random, roll, oneOfArray};
