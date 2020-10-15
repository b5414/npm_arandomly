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

---

### Boolean

> All about the `bool` rand

#### .randBool()

Will return `true` or `false`

```js
rand.randBool();
```

Example

```js
rand.randBool(); // True or False, 50% chance
```

---

#### .bool()

Will return `true` or `false`, with the specified **chance**% it will be `true`

```js
rand.bool([chance]);
```

| params   | description | type     | value   | default value | optional |
| -------- | ----------- | -------- | ------- | ------------- | -------- |
| `chance` | True chance | `number` | 0 - 100 | 50            | +        |

Example

```js
rand.bool(0); // False
rand.bool(10); // Most likely False
rand.bool(99); // Most likely True
rand.bool(50); // Alias = .randBool()
```

---

### Number

> All about the `number`s rand

#### .randInt() = .rand()

Will return `integer`, between **Min** and **Max** (both _inclusive_)

```js
rand.randInt([min [, max]]);
```

| params | description | type     | value    | default value | optional |
| ------ | ----------- | -------- | -------- | ------------- | -------- |
| `min`  | Minimum     | `number` | 0 - 999+ | 0             | +        |
| `max`  | Maximum     | `number` | 0 - 999+ | 100           | +        |

Example

```js
rand.randInt(); // 0 to 100
rand.randInt(1, 2); // 1 or 2
rand.randInt(0.1, 0.2); // 0 or 1
rand.randInt(100, 999); // 100 to 999
```

---

#### .random() = .randFloat()

Will return `float`, between **Min** and **Max** (both _inclusive_)

```js
rand.randFloat([min [, max]]);
```

| params | description | type     | value    | default value | optional |
| ------ | ----------- | -------- | -------- | ------------- | -------- |
| `min`  | Minimum     | `number` | 0 - 999+ | 0             | +        |
| `max`  | Maximum     | `number` | 0 - 999+ | 100           | +        |

Example

```js
rand.randFloat(); // 0.00 to 1.00
rand.randFloat(1, 2); // 0.01 or 0.02
rand.randFloat(100, 999); // 1.00 to 9.99
```

Yes, it's `rand.rand() / 100`

---


#### .randBigFloat()

Will return `float`, between **Min** and **Max** (both _inclusive_)

```js
rand.randBigFloat([min [, max[, decimal]]]);
```

| params    | description           | type     | value              | default value | optional |
| --------- | --------------------- | -------- | ------------------ | ------------- | -------- |
| `min`     | Minimum               | `number` | 0 - 999+           | 0             | +        |
| `max`     | Maximum               | `number` | 0 - 999+           | 100           | +        |
| `decimal` | Num of decimal places | `number` | 1 - 50 (max - 100) | 3             | +        |

Example

```js
rand.randBigFloat(); // 0.000 to 1.000
rand.randBigFloat(90, 100, 4); // 0.9000 to 1.0000
```

---