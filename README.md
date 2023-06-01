# a [RandomLy](https://www.npmjs.com/package/arandomly)

> The npmjs package, random value (_number / bool / data_) provider

> Both inclusive random, `rand(0, 100)` can return one number of [0, 1, 38, 66, 100]

## Install

```bash
npm i arandomly
# or
yarn add arandomly
```

## Import

```javascript
const {rand} = require('arandomly');
// or
import {rand} from 'arandomly';
```

## Documentation

### rand()

```js
const value = rand(0, 100);
console.log(value); // 0 to 100 (both inclusive)
```

### bigint()

```js
const value = bigint(0, 100);
console.log(value); // BigInt 0 to 100 (both inclusive)
```

### bool()

```js
const value = bool();
console.log(value); // true or false
```

### boolChance()

```js
const value = boolChance(50);
console.log(value); // true with 50 chance VS false with another half
```

### float()

```js
// const value = float(0, 1);
const value = floatDeep(0, 1, 2);

// value = one of [0, 0.29, 0.3, 0.01, 0.5, 0.99, 1];
console.log(value); // 0 to 1; 2 decimal
```

---

### oneOfArray()

### oneValueOfArray()

```js
const value = oneOfArray([1, 2, 3]);
console.log(value); // 1 or 2 or 3
```

### oneOfObject()

```js
const value = oneOfObject({a: 1, b: 2, c: 3});
// value: object = {a: 1}
console.log(value); // {a: 1}
```

### oneValueOfObject()

```js
const value = oneValueOfObject({a: 1, b: 2, c: 3});
console.log(value); // 1 or 2 or 3
```

---

### uniqColorHex()

```js
const withAlpha = false;
const value = uniqColorHex(withAlpha);
console.log(value); // '#00cccc', or with true: '#33667799'
```

### uniqColorRGB()

```js
const opacity = 1; // 0 or 0.01 to 0.99 or 1
// 0 = random
// float = set opacity
// 1 = 100% opacity

const value = uniqColorRGB(opacity);
// rgba(59, 16, 90, 0.50)
// rgba(46, 91, 14, 0.69)
// rgb(251, 76, 71)

console.log(value); // rgb or rgba
```

### uniqColorHSL()

```js
const randomOpacity = true;
const value = uniqColorHSL(randomOpacity);
// hsl(135deg 2% 35% / 63%)
// hsl(80deg 11% 36%)
console.log(value); // hsl()
```

---

### machine dice()

```js
const value = mdice(6); // cube with 6 sides
console.log(value); // {result: 1, visual: '⚀'}
```

### machine roll()

```js
const value = mroll();
console.log(value); // {result: 91, text: '091'}
```

### machine slot()

```js
// 1 = one spin
// 3 = fruits in one row = reels
// undefined = third arg = (by default) 9 fruits
const value = mslot(1, 3);
console.log(value);
/* [[
    { result: 3, visual: '🍑' },
    { result: 8, visual: '🍐' },
    { result: 4, visual: '🍇' }
]] */
```

---

### uniqString()

```js
const value = uniqString();
console.log(value); // 'NAaU' or 'evQk'
console.log(uniqString(5, 'abc')); // 'abbbc' or 'cacbb'
```

### uniqUseragent()

```js
const value = uniqUseragent(110, 120);
console.log(value);
// 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.5085.0 Safari/537.36'
```

### uniqSmsCode()

```js
const smooth = false;
const value = uniqSmsCode(4, smooth);
// smooth true  = 3337 or 8899
// smooth false = 7240 or 5414
console.log(value);
```

### uniqDate()

```js
const value = uniqDate(0, 2147483647);
console.log(value.toDateString(), value.toISOString()); // 'Sun Feb 03 2002 & 2004-04-07T05:15:38.000Z'
```

### uniqDateForOneYear()

```js
const year = 2023; // by default = current year
const value = uniqDateForOneYear(year);
console.log(value.toISOString()); // '2023-12-31T11:52:22.000Z'
```

### uniqDateForYears()

```js
const year = 2023; // by default = current year
const value = uniqDateForYears(year);
console.log(value[0].toISOString()); // '2023-07-24T17:28:58.000Z'
```
