"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mslot = exports.mroll = exports.mdice = exports.uniqColorHSL = exports.uniqColorRGB = exports.uniqColorHex = exports.uniqDateForYears = exports.uniqDateForOneYear = exports.uniqDate = exports.uniqSmsCode = exports.uniqUseragent = exports.uniqString = exports.oneValueOfObject = exports.oneOfObject = exports.oneValueOfArray = exports.oneOfArray = exports.floatDeep = exports.float = exports.boolChance = exports.bool = exports.bigint = exports.rand = void 0;
const _padLeft = (n, leng = 3, padWith = '0') => {
    while (`${n}`.length < leng)
        n = `${padWith}${n}`;
    return n;
};
const _padRight = (n, leng = 3, padWith = '0') => {
    while (`${n}`.length < leng)
        n = `${n}${padWith}`;
    return n;
};
const _spin = (fruits, reels) => {
    const fewreels = [];
    while (fewreels.length < reels) {
        const result = (0, exports.rand)(0, fruits.length - 1);
        fewreels.push({ result, visual: fruits[result] });
    }
    return fewreels;
};
//
//
// number
const rand = (min = 0, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));
exports.rand = rand;
const bigint = (min = 0, max = 100) => BigInt((0, exports.rand)(Number(min), Number(max)));
exports.bigint = bigint;
const bool = () => Math.random() < 0.5;
exports.bool = bool;
const boolChance = (trueChance) => {
    if (!trueChance && trueChance !== 0)
        trueChance = 50;
    if (trueChance < 1)
        return false;
    else if (trueChance > 99)
        return true;
    else if (trueChance === 50)
        return (0, exports.bool)();
    return (0, exports.rand)(0, 100) <= trueChance;
};
exports.boolChance = boolChance;
const float = (min = 0, max = 1) => (0, exports.rand)(min * 100, max * 100) / 100;
exports.float = float;
const floatDeep = (min = 0, max = 1, decimal = 3) => {
    const mpd = Math.pow(10, decimal);
    return parseFloat(((0, exports.rand)(min * mpd, max * mpd) / mpd).toFixed(decimal));
};
exports.floatDeep = floatDeep;
//
//
// object
const oneOfArray = (arr) => arr[(0, exports.rand)(0, arr.length - 1)];
exports.oneOfArray = oneOfArray;
exports.oneValueOfArray = exports.oneOfArray;
const oneOfObject = (obj) => {
    const key = (0, exports.oneOfArray)(Object.keys(obj));
    return { [key]: Object(obj)[key] };
};
exports.oneOfObject = oneOfObject;
const oneValueOfObject = (obj) => (0, exports.oneOfArray)(Object.values(obj));
exports.oneValueOfObject = oneValueOfObject;
//
//
// unique data
const uniqString = (leng = 4, symbols = '') => {
    if (!symbols)
        symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    while (result.length < leng)
        result += symbols.charAt(Math.floor(Math.random() * symbols.length));
    return result;
};
exports.uniqString = uniqString;
const uniqUseragent = (minChromeVersion = 110, maxChromeVersion = 120) => {
    const arr = [(0, exports.rand)(minChromeVersion, maxChromeVersion), (0, exports.boolChance)(5) ? (0, exports.rand)(0, 999) : 0, (0, exports.boolChance)(25) ? (0, exports.rand)(1000, 9999) : 0, (0, exports.boolChance)(5) ? (0, exports.rand)(0, 999) : 0];
    return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${arr.join('.')} Safari/537.36`;
};
exports.uniqUseragent = uniqUseragent;
const uniqSmsCode = (leng = 4, smooth = false) => {
    const prefab = Array.from(String((0, exports.rand)(10 ** (leng - 1), 10 ** leng - 1)));
    if (!smooth)
        return prefab.join('');
    const result = [];
    for (let k = 0; k < leng; k++) {
        if (k === 0 || (0, exports.bool)()) {
            result.push(prefab[k]);
            continue;
        }
        let a = +prefab[k - 1];
        if ((0, exports.boolChance)(25))
            a = (0, exports.oneOfArray)(result);
        result.push(a);
    }
    return result.join('');
};
exports.uniqSmsCode = uniqSmsCode;
const uniqDate = (unixMin = 0, unixMax = 2147481337) => new Date((0, exports.rand)(unixMin, unixMax) * 1000);
exports.uniqDate = uniqDate;
const uniqDateForOneYear = (year = new Date().getFullYear()) => {
    const years = [...(typeof year !== 'number' ? year : [year])];
    return new Date((0, exports.uniqDate)().setFullYear((0, exports.oneOfArray)(years)));
};
exports.uniqDateForOneYear = uniqDateForOneYear;
const uniqDateForYears = (year = new Date().getFullYear()) => {
    const years = [...(typeof year !== 'number' ? year : [year])];
    return years.map((e) => new Date((0, exports.uniqDate)().setFullYear(e)));
};
exports.uniqDateForYears = uniqDateForYears;
//
//
// colors
const uniqColorHex = (withAlpha = false) => {
    return '#' + _padRight((0, exports.rand)(0, 16777215).toString(16), 6, '0') + (!withAlpha ? '' : _padLeft((0, exports.rand)(0, 16777215).toString(16).slice(0, 2), 2, 'f'));
};
exports.uniqColorHex = uniqColorHex;
const uniqColorRGB = (opacity = 1) => {
    const arr = [(0, exports.rand)(0, 255), (0, exports.rand)(0, 255), (0, exports.rand)(0, 255)];
    if (opacity !== 1) {
        arr.push(opacity === 0 ? (0, exports.float)() : opacity);
        return `rgba(${arr.join(', ')})`;
    }
    else
        return `rgb(${arr.join(', ')})`;
};
exports.uniqColorRGB = uniqColorRGB;
const uniqColorHSL = (randomOpacity = false) => {
    if (!randomOpacity)
        return `hsl(${(0, exports.rand)(0, 360)}deg ${(0, exports.rand)()}% ${(0, exports.rand)()}%)`;
    else
        return `hsl(${(0, exports.rand)(0, 360)}deg ${(0, exports.rand)()}% ${(0, exports.rand)()}% / ${(0, exports.rand)()}%)`;
};
exports.uniqColorHSL = uniqColorHSL;
//
//
// machine
const mdice = (side = 6) => {
    const result = (0, exports.rand)(1, side);
    const visual = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][result - 1];
    return { result, visual };
};
exports.mdice = mdice;
const mroll = () => {
    const result = (0, exports.rand)(1, 100);
    return { result, text: _padLeft(result.toString()) };
};
exports.mroll = mroll;
const mslot = (spins = 1, reels = 3, fruits = []) => {
    if (!fruits?.length)
        fruits = ['🍒', '🍎', '🍋', '🍑', '🍇', '🍉', '🥭', '🍓', '🍐'];
    return [...new Array(spins)].map(() => _spin(fruits, reels));
};
exports.mslot = mslot;
//
//
// export
exports.default = {
    rand: exports.rand,
    bigint: exports.bigint,
    bool: exports.bool,
    boolChance: exports.boolChance,
    float: exports.float,
    floatDeep: exports.floatDeep,
    //
    oneOfArray: exports.oneOfArray,
    oneValueOfArray: exports.oneValueOfArray,
    oneOfObject: exports.oneOfObject,
    oneValueOfObject: exports.oneValueOfObject,
    //
    uniqString: exports.uniqString,
    uniqUseragent: exports.uniqUseragent,
    uniqSmsCode: exports.uniqSmsCode,
    uniqDate: exports.uniqDate,
    uniqDateForOneYear: exports.uniqDateForOneYear,
    uniqDateForYears: exports.uniqDateForYears,
    //
    uniqColorHex: exports.uniqColorHex,
    uniqColorRGB: exports.uniqColorRGB,
    uniqColorHSL: exports.uniqColorHSL,
    //
    mdice: exports.mdice,
    mroll: exports.mroll,
    mslot: exports.mslot,
};
