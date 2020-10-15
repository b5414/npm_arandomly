# a RandomLy

> This package are: random value(date \ number \ bool) generator

## Install

```c
npm i arandomly
// or
yarn add arandomly
```

## Use

```javascript
const rand = require('arandomly');
```

## Doc

- [a RandomLy](#a-randomly)
	- [Install](#install)
	- [Use](#use)
	- [Doc](#doc)
		- [Boolean](#boolean)
			- [.randBool()](#randbool)
			- [.bool()](#bool)
		- [Number](#number)
			- [.randInt() = .rand()](#randint--rand)
			- [.random() = .randFloat()](#random--randfloat)
			- [.randBigFloat()](#randbigfloat)
		- [Randomizers](#randomizers)
			- [.roll()](#roll)
			- [.oneOfArray() = .randomElement()](#oneofarray--randomelement)
			- [.randomString()](#randomstring)
		- [Additional](#additional)

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
rand.bool([chance%]);
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
rand.randInt([min [, max]]);
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

#### .random() = .randFloat()

Will return `float`, between **Min** and **Max** (both _inclusive_)

Syntax

```js
rand.randFloat([min [, max]]);
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
rand.randBigFloat([min [, max[, decimal]]]);
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
rand.roll([(detailed = false)]);
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

#### .oneOfArray() = .randomElement()

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

Will return `float`, between **Min** and **Max** (both _inclusive_)

Syntax

```js
rand.randomString([min [, max[, decimal]]]);
```

| params    | description           | type     | value    | default value | optional |
| --------- | --------------------- | -------- | -------- | ------------- | -------- |
| `min`     | Minimum               | `number` | 0 - 999+ | 0             | +        |
| `max`     | Maximum               | `number` | 0 - 999+ | 100           | +        |
| `decimal` | Num of decimal places | `number` | 0 - 38   | 3             | +        |

Examples

```js
rand.randomString(); // 0.000 to 1.000
rand.randomString(0, 1, 4); // 0.0000 to 0.0100
rand.randomString(0, 1, 9); // 0.000_000_000 to 0.010_000_000
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


### Additional

Syntax

```js
padLeft(value [, length = 3[, padValue = 0]]);

dilute(value [, glue = " "]);

minMax(min, max);
```

Examples

```js
padLeft(1); // "001"
padLeft(1, 3, 0); // "001"
padLeft('1', 4, '0'); // "0001"

// ~
dilute(123); // "1 2 3"
dilute('321', 0); // "30201"
dilute(321, '0'); // same above

// ~
minMax(9, 3); // [3, 9]
minMax(10, 20); // [10, 20]
```

---
