const pad = (n, len = 3)=>{
	if(`${n}`.length < len){
		n = `0${n}`;
		return pad(n, len);
	}
	return n;
};

const dilute = (me, dule = ' ')=>`${me}`.split('').join(`${dule}`);

const minMaxCheck = (min, max)=>{
	if(min > max)[min, max] = [max, min];
	return [min, max];
};

module.exports = {pad, dilute, minMaxCheck};