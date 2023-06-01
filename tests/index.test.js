const {rand} = require('../lib/index.js');

//
//
//

test('rand() should return a number', ()=>{
	const result = rand();
	expect(typeof result).toBe('number');
});

test('rand() should return a number between 0 and 100', ()=>{
	const result = rand();
	expect(result).toBeGreaterThanOrEqual(0);
	expect(result).toBeLessThanOrEqual(100);
});

test('rand() should return an integer', ()=>{
	const result = rand();
	expect(result % 1).toBe(0);
});

test('rand() should return different values on each call', ()=>{
	const result1 = rand();
	const result2 = rand();
	expect(result1).not.toBe(result2);
});

test('rand(10, 20) should return a number between the specified min and max values', ()=>{
	const result = rand(10, 20);
	expect(result).toBeGreaterThanOrEqual(10);
	expect(result).toBeLessThanOrEqual(20);
});
