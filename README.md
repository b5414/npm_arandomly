# a [RandomLy](https://www.npmjs.com/package/arandomly)

**IN DEVELOPING** 👍

> This package about: random value(date \ number \ bool) generator, and: random value picker

## Install

```javascript
npm i arandomly
// or
yarn add arandomly
```

## Connect

```javascript
const rand = require('arandomly');
```

## Use

```javascript
const rand = require('arandomly');
console.log(rand.rand(0, 100)); // 0 to 100 (both inclusive)

// or

const {roll} = require('arandomly');
console.log(roll()); // 13
```

## Documentation

- [Boolean](#boolean)
	- [.randBool()](#randbool)
	- [.bool()](#bool)
- [Numbers](#numbers)
	- [.randInt() = .rand()](#randint--rand)
	- [.randFloat() = .random()](#randfloat--random)
	- [.randBigFloat()](#randbigfloat)
- [Randomizers](#randomizers)
	- [.roll()](#roll)
	- [.dice()](#dice)
	- [.slot()](#slot)
	- [.randomElement() = .oneOfArray()](#randomelement--oneofarray)
	- [.randomObjElement() = .oneOfObject()](#randomobjelement--oneofobject)
	- [.randomObjValue() = .oneValueOfObject()](#randomobjvalue--onevalueofobject)
	- [.randomString()](#randomstring)
	- [.randomDate()](#randomdate)
	- [.randomDateYear()](#randomdateyear)
	- [.randomDateYears()](#randomdateyears)
- [Additional](#additional)
	- [.randomArrayGen()](#randomarraygen)
	- [.randomRace()](#randomrace)
	- [Another functions](#another-functions)

---

<!--
\
/
\
/
\
/
-->

### Boolean

> All about the `bool` rand

#### .randBool()

Will return `true` or `false`

Syntax

```js
rand.randBool();
```

Example

```js
rand.randBool(); // True or False, 50% chance
```

---

<!--
\
/
\
/
\
/
-->

#### .bool()

Will return `true` or `false`, with the specified **chance**% it will be `true`

Syntax

```js
rand.bool([chance = 50]);
```

| params   | description         | type     | value   | default value | optional |
| -------- | ------------------- | -------- | ------- | ------------- | -------- |
| `chance` | True chance percent | `number` | 0 - 100 | 50 (%)        | +        |

Example

```js
rand.bool(0); // False
rand.bool(10); // Most likely False
rand.bool(99); // Most likely True
rand.bool(50); // Alias = .randBool()
```

---

<!--
\
/
\
/
\
/
-->

### Numbers

> All about the `number`s rand

#### .randInt() = .rand()

Will return `integer`, between **Min** and **Max** (both _inclusive_)

Syntax

```js
rand.randInt([min = 50[, max = 100]]);
```

| params | description | type     | value    | default value | optional |
| ------ | ----------- | -------- | -------- | ------------- | -------- |
| `min`  | Minimum     | `number` | 0 - 999+ | 0             | +        |
| `max`  | Maximum     | `number` | 0 - 999+ | 100           | +        |

Examples

```js
rand.randInt(); // 0 to 100
rand.randInt(1, 2); // 1 or 2
rand.randInt(0.1, 0.2); // 0 or 1
rand.randInt(100, 999); // 100 to 999
```

---

<!--
\
/
\
/
\
/
-->

#### .randFloat() = .random()

Will return `float`, between **Min** and **Max** (both _inclusive_)

Syntax

```js
rand.randFloat([min = 0[, max = 100]]);
```

| params | description | type     | value    | default value | optional |
| ------ | ----------- | -------- | -------- | ------------- | -------- |
| `min`  | Minimum     | `number` | 0 - 999+ | 0             | +        |
| `max`  | Maximum     | `number` | 0 - 999+ | 100           | +        |

Examples

```js
rand.randFloat(); // 0.00 to 1.00
rand.randFloat(1, 2); // 0.01 or 0.02
rand.randFloat(100, 999); // 1.00 to 9.99
```

Yes, it's `rand.rand() / 100`, for detailed\expanded please use `.randBigFloat()`

---

<!--
\
/
\
/
\
/
-->

#### .randBigFloat()

Will return `float`, between **Min** and **Max** (both _inclusive_)

Syntax

```js
rand.randBigFloat([min = 0[, max = 100[, decimal = 3]]]);
```

| params    | description           | type     | value    | default value | optional |
| --------- | --------------------- | -------- | -------- | ------------- | -------- |
| `min`     | Minimum               | `number` | 0 - 999+ | 0             | +        |
| `max`     | Maximum               | `number` | 0 - 999+ | 100           | +        |
| `decimal` | Num of decimal places | `number` | 0 - 18   | 3             | +        |

Examples

```js
rand.randBigFloat(); // 0.000 to 1.000
rand.randBigFloat(0, 1, 4); // 0.0000 to 0.0100
rand.randBigFloat(0, 1, 9); // 0.000_000_000 to 0.010_000_000
rand.randBigFloat(90, 100, 4); // 0.9000 to 1.0000
rand.randBigFloat(100, 300, 0); // 1 to 3
```

---

<!--
\
/
\
/
\
/
-->

### Randomizers

> Another randomizers

#### .roll()

Will return `number`, between **1** and **100** (both _inclusive_)

Syntax

```js
rand.roll([detailed = false]);
```

| params     | description   | type   | value        | default value | optional |
| ---------- | ------------- | ------ | ------------ | ------------- | -------- |
| `detailed` | Detailed text | `bool` | true / false | false         | +        |

Examples

```js
rand.roll(); // 46
rand.roll(0, 1, 4); /*{
	text: 'rolls (1-100): 0 4 6',
	result: 46,
	pad: '046',
	padSpace: '0 4 6'
}*/
```

---

<!--
\
/
\
/
\
/
-->

#### .dice()

Will return `object` with `number`: between **1** and **MAX** (both _inclusive_), and `string`: visual symbol

Syntax

```js
rand.dice([sides = 6]);
```

| params  | description | type     | value | default value | optional |
| ------- | ----------- | -------- | ----- | ------------- | -------- |
| `sides` | Cube sides  | `number` | 1-999 | 6             | +        |

Examples

```js
rand.dice(); // { text: 'diced (1 of 6): 2', visual: '⚁', result: 2 }
rand.dice(); // { text: 'diced (1 of 6): 5', visual: '⚄', result: 5 }
rand.dice(10); // { text: 'diced (1 of 10): 7', visual: false, result: 7 }
```

Visual only for 1-6 (Default), else - `false`

---

<!--
\
/
\
/
\
/
-->

#### .slot()

Will return 2x`array` and `object` in, with **index** and **visual** keys

Syntax

```js
rand.slot([spins = 1[, reels = 3[, visual = false]]]);
// if(!visual)visual = ['🍒', '🍎', '🍋', '🍑', '🍇', '🍉', '🥭', '🍓', '🍐'];
```

| params   | description                                     | type     | value | default value       | optional |
| -------- | ----------------------------------------------- | -------- | ----- | ------------------- | -------- |
| `spins`  | Suitable for animations OR if slot machines > 1 | `number` | 1-999 | 1                   | +        |
| `reels`  | Number of reels (cylinders with fruits)         | `number` | 1-999 | 3                   | +        |
| `visual` | Reels content (for example fruits)              | `array`  | 1-999 | _fruits_ (length 9) | +        |

Examples

```js
rand.slot(); /* [[
	{index: 2, visual: '🍋'},
	{index: 7, visual: '🍓'},
	{index: 8, visual: '🍐'},
]] */
rand.slot(); /* [[
	{index: 4, visual: '🍇'},
	{index: 7, visual: '🍓'},
	{index: 1, visual: '🍎'},
], [
	{index: 7, visual: '🍓'},
	{index: 2, visual: '🍋'},
	{index: 6, visual: '🥭'},
]] */
rand.slot(1, 2, ['a', 'b', '🥰']); /* [[
	{index: 2, visual: '🥰'},
	{index: 1, visual: 'b'},
]] */
```

---

<!--
\
/
\
/
\
/
-->

#### .randomElement() = .oneOfArray()

Will return `value` element, from given **array**

Syntax

```js
rand.randomElement(array);
```

| params  | description | type    | value     | default value | optional |
| ------- | ----------- | ------- | --------- | ------------- | -------- |
| `array` | Your array  | `array` | Not empty | -             | -        |

Examples

```js
rand.randomElement([1, 2, 3, 4, 5]); // 1
rand.randomElement([false, true]); // true
rand.randomElement(['false', 'true']); // "false"
```

---

<!--
\
/
\
/
\
/
-->

#### .randomObjElement() = .oneOfObject()

Will return `object` element, from given **object**

Syntax

```js
rand.randomObjElement(object);
```

| params   | description | type     | value     | default value | optional |
| -------- | ----------- | -------- | --------- | ------------- | -------- |
| `object` | Your object | `object` | Not empty | -             | -        |

Examples

```js
rand.randomObjElement({a: 1, b: 2}); // {a: 1}
rand.randomObjElement({a: 1, b: 2}); // {b: 2}
rand.randomObjElement({g: ()=>{}}); // {g: [Function: g]}
```

---

<!--
\
/
\
/
\
/
-->
#### .randomObjValue() = .oneValueOfObject()

Will return `value` element, from given **object**

Syntax

```js
rand.randomObjValue(object);
```

| params   | description | type     | value     | default value | optional |
| -------- | ----------- | -------- | --------- | ------------- | -------- |
| `object` | Your object | `object` | Not empty | -             | -        |

Examples

```js
rand.randomObjValue({a: 1, b: 2}); // 1
rand.randomObjValue({a: 1, b: 2}); // 2
rand.randomObjValue({g: ()=>{}}); // [Function: g]
```

---

<!--
\
/
\
/
\
/
-->

#### .randomString()

Will return `string`, from pool (`symbols`)

Syntax

```js
rand.randomString([leng = 4 [, symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz']]);
```

| params    | description  | type     | value     | default value | optional |
| --------- | ------------ | -------- | --------- | ------------- | -------- |
| `leng`    | Length       | `number` | 0 - `idk` | 4             | +        |
| `symbols` | Letters pool | `string` | 0 - 999+  | A-z alphabet  | +        |

Examples

```js
rand.randomString(); // "AbCd"
rand.randomString(3, 'AB'); // "ABA" or "AAA" or "ABB"
```

---

<!--
\
/
\
/
\
/
-->

#### .randomDate()

Will return `date`, between **1970** and **2038** year

Syntax

```js
rand.randomDate([min = 0 [, max = 2147481337]]);
```

| params | description | type     | value          | default value | optional |
| ------ | ----------- | -------- | -------------- | ------------- | -------- |
| `min`  | Minimum     | `number` | 0 - 2147483648 | 0             | +        |
| `max`  | Maximum     | `number` | 0 - 2147483648 | 2147481337    | +        |

Examples

```js
rand.randomDate(); // 2003-09-20T12:06:37.000Z
rand.randomDate(1337000000, 1337000000); // 2012-05-14T12:53:20.000Z
```

Yes, it's `unix time`. For the year you need use `.randomDateYear()`, for yearS array use `.randomDateYears()`

---

<!--
\
/
\
/
\
/
-->

#### .randomDateYear()

Will return ONE `date`, with your specified year

Syntax

```js
rand.randomDateYear(year);
```

| params | description      | type                        | value     | default value | optional |
| ------ | ---------------- | --------------------------- | --------- | ------------- | -------- |
| `year` | Year or \[Years] | `array \| number \| string` | 0 - 9999+ | -             | -        |

Examples

```js
rand.randomDateYear('0'); // 0000-03-03T19:56:10.000Z
rand.randomDateYear(2017); // 2017-03-14T04:19:22.000Z
rand.randomDateYear(['2007', 2012]); // 2007-09-20T00:26:37.000Z or 2012-08-17T12:27:55.000Z
```

For a few years, with random date, use `.randomDateYears()`

---

<!--
\
/
\
/
\
/
-->

#### .randomDateYears()

Will return date(s) `array`, with your specified year(s)

Syntax

```js
rand.randomDateYears(year);
```

| params | description      | type                        | value     | default value | optional |
| ------ | ---------------- | --------------------------- | --------- | ------------- | -------- |
| `year` | Year or \[Years] | `array \| number \| string` | 0 - 9999+ | -             | -        |

Examples

```js
rand.randomDateYears('0'); // [0000-01-19T20:29:26.000Z]
rand.randomDateYears(2017); // [2017-05-04T07:44:08.000Z]
rand.randomDateYears(['2007', 2012]); // [2007-04-30T15:18:55.000Z, 2012-09-01T02:45:56.000Z]
```

For only one random year use `.randomDateYear()`

---

<!--
\
/
\
/
\
/
-->

### Additional

#### .randomArrayGen()

Will return `array` with specified leng and type of `value`s

Syntax

```js
rand.randomArrayGen(leng = 6[, obj = {string: true}]);
```

| params       | description          | type              | value                                 | default value | optional |
| ------------ | -------------------- | ----------------- | ------------------------------------- | ------------- | -------- |
| `leng`       | Output array length  | `number`          | 1-999                                 | -             | -        |
| `obj`        | Types and it length  | `object`          | number / float / string / bool / date | string        | +        |
| `obj.number` | Type number + Length | `bool` / `number` | `true` or 1-16 (or more, but 000...)  | 3             | +        |
| `obj.float`  | Type float + Decimal | `bool` / `number` | `true` or 1-38                        | 3             | +        |
| `obj.string` | Type string + Length | `bool` / `number` | `true` or 1-999                       | 4             | +        |
| `obj.bool`   | Type bool + Chance%  | `bool` / `number` | `true` or 1-100%                      | 50%           | +        |
| `obj.date`   | Type date + Year     | `bool` / `number` | `true` or 1970 and 2038               | 2020          | +        |

Examples

```js
/*
if number:
	1 > 0 - 9
	2 > 10 - 99
	3 > 100 - 999
*/

rand.randomArrayGen(2); // [ 'PPTU', 'tFIN' ]
rand.randomArrayGen(1, {string: 12}); // [ 'kCCpKQBfXJhv' ]
rand.randomArrayGen(1, {string: 12, number: 12}); // [ 'fAdfgzadfgFG', 413242341234 ]
rand.randomArrayGen(10, {bool: 100}); // [ true x10 ]
rand.randomArrayGen(2, {string: 1, number: 10, float: true, date: true}); // [ 7552494770, 'q' ]
rand.randomArrayGen(6, {string: 1, number: 1, float: true, date: true}); /* [
	2,
	0.544,
	0.826,
	1983-02-04T00:48:53.000Z,
	'G',
	4
] */
```

---

<!--
\
/
\
/
\
/
-->

#### .randomRace()

Will return one function or one Promise from specified promises array

Syntax

```js
rand.randomRace(arr);
```

| params | description    | type    | value           | default value | optional |
| ------ | -------------- | ------- | --------------- | ------------- | -------- |
| `arr`  | Promises array | `array` | `new Promise()` | -             | -        |

Examples

```js
(async()=>{
	const arr = [...Array(10)].map((e, i)=>{
		return new Promise((yes)=>{
			setTimeout(yes, 1000, i);
		});
	});

	let r = await rand.randomRace(arr);
	console.log('rand', r); // 0 to 9

	rand.randomRace(arr).then((a)=>{
		console.log('then', a); // 0 to 9
	});

	r = await Promise.race(arr);
	console.log('race', r); // only 0
})();
```

---

<!--
\
/
\
/
\
/
-->

#### Another functions

Syntax

```js
padLeft(value [, length = 3[, padValue = 0]]);

dilute(value [, glue = " "]);

minMax(min, max);
```

Examples

```js
rand.padLeft(1); // "001"
rand.padLeft(1, 3, 0); // "001"
rand.padLeft('1', 4, '0'); // "0001"

// ~
rand.dilute(123); // "1 2 3"
rand.dilute('321', 0); // "30201"
rand.dilute(321, '0'); // same above

// ~
rand.minMax(9, 3); // [3, 9]
rand.minMax(10, 20); // [10, 20]
```

---
