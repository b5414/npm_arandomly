const _padLeft = (n: string, leng: number = 3, padWith: string = '0')=>{
	while(`${n}`.length < leng)n = `${padWith}${n}`;
	return n;
};

const _padRight = (n: string, leng: number = 3, padWith: string = '0')=>{
	while(`${n}`.length < leng)n = `${n}${padWith}`;
	return n;
};

const _spin = (fruits: string[], reels: number)=>{
	const fewreels = [];
	while(fewreels.length < reels){
		const result = rand(0, fruits.length - 1);
		fewreels.push({result, visual: fruits[result]});
	}
	return fewreels;
};

//
//
// number

export const rand = (min: number = 0, max: number = 100)=>Math.floor(min + Math.random() * (max + 1 - min));

export const bigint = (min: bigint | number = 0, max: bigint | number = 100)=>BigInt(rand(Number(min), Number(max)));

export const bool = ()=>Math.random() < 0.5;

export const boolChance = (trueChance: number)=>{
	if(!trueChance && trueChance !== 0)trueChance = 50;

	if(trueChance < 1)return false;
	else if(trueChance > 99)return true;
	else if(trueChance === 50)return bool();
	return rand(0, 100) <= trueChance;
};

export const float = (min: number = 0, max: number = 1)=>rand(min * 100, max * 100) / 100;

export const floatDeep = (min: number = 0, max: number = 1, decimal: number = 3)=>{
	const mpd = Math.pow(10, decimal);
	return parseFloat((rand(min * mpd, max * mpd) / mpd).toFixed(decimal));
};

//
//
// object

export const oneOfArray = (arr: any[])=>arr[rand(0, arr.length - 1)];

export const oneValueOfArray = oneOfArray;

export const oneOfObject = (obj: object)=>{
	const key = oneOfArray(Object.keys(obj));
	return {[key]: Object(obj)[key]};
};

export const oneValueOfObject = (obj: object)=>oneOfArray(Object.values(obj));

//
//
// unique data

export const uniqString = (leng: number = 4, symbols: string = '')=>{
	if(!symbols)symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let result = '';
	while(result.length < leng)result += symbols.charAt(Math.floor(Math.random() * symbols.length));
	return result;
};

export const uniqUseragent = (minChromeVersion: number = 110, maxChromeVersion: number = 120)=>{
	const arr = [rand(minChromeVersion, maxChromeVersion), boolChance(5) ? rand(0, 999) : 0, boolChance(25) ? rand(1000, 9999) : 0, boolChance(5) ? rand(0, 999) : 0];
	return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${arr.join('.')} Safari/537.36`;
};

export const uniqSmsCode = (leng: number = 4, smooth: boolean = false)=>{
	const prefab = Array.from(String(rand(10 ** (leng - 1), 10 ** leng - 1)));
	if(!smooth)return prefab.join('');

	const result = [];
	for(let k = 0; k < leng; k++){
		if(k === 0 || bool()){
			result.push(prefab[k]);
			continue;
		}

		let a = +prefab[k - 1];
		if(boolChance(25))a = oneOfArray(result);
		result.push(a);
	}

	return result.join('');
};

export const uniqDate = (unixMin: number = 0, unixMax: number = 2147481337)=>new Date(rand(unixMin, unixMax) * 1000);

export const uniqDateForOneYear = (year: number | number[] = new Date().getFullYear())=>{
	const years = [...(typeof year !== 'number' ? year : [year])];
	return new Date(uniqDate().setFullYear(oneOfArray(years)));
};

export const uniqDateForYears = (year: number | number[] = new Date().getFullYear())=>{
	const years = [...(typeof year !== 'number' ? year : [year])];
	return years.map((e)=>new Date(uniqDate().setFullYear(e)));
};

//
//
// colors

export const uniqColorHex = (withAlpha: boolean = false)=>{
	return '#' + _padRight(rand(0, 16777215).toString(16), 6, '0') + (!withAlpha ? '' : _padLeft(rand(0, 16777215).toString(16).slice(0, 2), 2, 'f'));
};

export const uniqColorRGB = (opacity: number = 1)=>{
	const arr = [rand(0, 255), rand(0, 255), rand(0, 255)];
	if(opacity !== 1){
		arr.push(opacity === 0 ? float() : opacity);
		return `rgba(${arr.join(', ')})`;
	}else return `rgb(${arr.join(', ')})`;
};

export const uniqColorHSL = (randomOpacity: boolean = false)=>{
	if(!randomOpacity)return `hsl(${rand(0, 360)}deg ${rand()}% ${rand()}%)`;
	else return `hsl(${rand(0, 360)}deg ${rand()}% ${rand()}% / ${rand()}%)`;
};

//
//
// machine

export const mdice = (side: number = 6)=>{
	const result = rand(1, side);
	const visual = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][result - 1];
	return {result, visual};
};

export const mroll = ()=>{
	const result = rand(1, 100);
	return {result, text: _padLeft(result.toString())};
};

export const mslot = (spins: number = 1, reels: number = 3, fruits: string[] = [])=>{
	if(!fruits?.length)fruits = ['🍒', '🍎', '🍋', '🍑', '🍇', '🍉', '🥭', '🍓', '🍐'];
	return [...new Array(spins)].map(()=>_spin(fruits, reels));
};

//
//
// export

export default {
	rand,
	bigint,
	bool,
	boolChance,
	float,
	floatDeep,
	//
	oneOfArray,
	oneValueOfArray,
	oneOfObject,
	oneValueOfObject,
	//
	uniqString,
	uniqUseragent,
	uniqSmsCode,
	uniqDate,
	uniqDateForOneYear,
	uniqDateForYears,
	//
	uniqColorHex,
	uniqColorRGB,
	uniqColorHSL,
	//
	mdice,
	mroll,
	mslot,
};
