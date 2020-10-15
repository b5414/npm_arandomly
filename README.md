# a RandomLy

> This package are: random value(date \ number \ bool) generator, and: random value picker

**IN DEVELOPING** 👍

## Install

```javascript
npm i arandomly
// or
yarn add arandomly
```

## Connect and Use

```javascript
const rand = require('arandomly');
```

Use:

```javascript
const rand = require('arandomly');
console.log(rand.rand(0, 100)); // 0 to 100 (both inclusive)
// or
const {roll} = require('arandomly');
console.log(roll()); // 13
```

## Doc

-   [Boolean](#boolean)
    -   [.randBool()](#randbool)
    -   [.bool()](#bool)
-   [Number](#number)
    -   [.randInt() = .rand()](#randint--rand)
    -   [.randFloat() = .random()](#randfloat--random)
    -   [.randBigFloat()](#randbigfloat)
-   [Randomizers](#randomizers)
    -   [.roll()](#roll)
    -   [.randomElement() = .oneOfArray()](#randomelement--oneofarray)
    -   [.randomString()](#randomstring)
    -   [.randomDate()](#randomdate)
    -   [.randomDateYear()](#randomdateyear)
    -   [.randomDateYears()](#randomdateyears)
-   [Additional](#additional)

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

### Number

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
| `decimal` | Num of decimal places | `number` | 0 - 38   | 3             | +        |

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
