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

_then_

```javascript
let response;

response = rand.random();
console.log(response);

response = rand.rand(1, 8);
console.log(response);

response = rand.roll(true);
console.log(response);

response = rand.bool();
console.log(response);
```
