/**
 * @description "A" to "BBA"
 *
 * @param {value} num - Value for padding
 * @param {number} [len=3] - Count of pads
 * @param {value} [pad=0] - Pad = B
 * @returns {string}
 */
const padLeft = (n, len = 3, pad = 0)=>{
	if(`${n}`.length < len){
		n = `${pad}${n}`;
		return padLeft(n, len, pad);
	}
	return n;
};

/**
 * @description "AAAA" to "ABABABA" (explode + implode)
 *
 * @param {*} value - Value instead of A
 * @param {*} [glue=' '] - Implode glue = B
 * @returns {string}
 */
const dilute = (me, glue = ' ')=>`${me}`.split('').join(`${glue}`);

/**
 * @description A and B to [A, B] or [B, A]
 *
 * @param {number} any Number
 * @param {number} any Number
 * @returns {array} array [min, max] of numbers
 */
const minMax = (min, max)=>{
	if(min > max)[min, max] = [max, min];
	return [min, max];
};

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

module.exports = {padLeft, dilute, minMax};
