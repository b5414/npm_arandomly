/**
 * @description "A" to "BBA"
 *
 * @param {string | number} n - Value to padding
 * @param {number} [len=3] - Number of pads
 * @param {string | number} [pad=0] - Pad ("B" - value)
 * @returns {string} Padded string
 */
const padLeft = (n, len = 3, pad = 0)=>{
	if(`${n}`.length < len){
		n = `${pad}${n}`;
		return padLeft(n, len, pad);
	}
	return n;
};

/**
 * @description "AAA" to "ABABA" (explode + implode)
 *
 * @param {string | number} value - Value to dilute
 * @param {string | number} [glue=' '] - Implode glue ("B" - value)
 * @returns {string}
 */
const dilute = (value, glue = ' ')=>`${value}`.split('').join(`${glue}`);

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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

export default {padLeft, dilute, minMax};
