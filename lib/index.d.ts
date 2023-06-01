export declare const rand: (min?: number, max?: number) => number;
export declare const bigint: (min?: bigint | number, max?: bigint | number) => bigint;
export declare const bool: () => boolean;
export declare const boolChance: (trueChance: number) => boolean;
export declare const float: (min?: number, max?: number) => number;
export declare const floatDeep: (min?: number, max?: number, decimal?: number) => number;
export declare const oneOfArray: (arr: any[]) => any;
export declare const oneValueOfArray: (arr: any[]) => any;
export declare const oneOfObject: (obj: object) => {
    [x: number]: any;
};
export declare const oneValueOfObject: (obj: object) => any;
export declare const uniqString: (leng?: number, symbols?: string) => string;
export declare const uniqUseragent: (minChromeVersion?: number, maxChromeVersion?: number) => string;
export declare const uniqSmsCode: (leng?: number, smooth?: boolean) => string;
export declare const uniqDate: (unixMin?: number, unixMax?: number) => Date;
export declare const uniqDateForOneYear: (year?: number | number[]) => Date;
export declare const uniqDateForYears: (year?: number | number[]) => Date[];
export declare const uniqColorHex: (withAlpha?: boolean) => string;
export declare const uniqColorRGB: (opacity?: number) => string;
export declare const uniqColorHSL: (randomOpacity?: boolean) => string;
export declare const mdice: (side?: number) => {
    result: number;
    visual: string;
};
export declare const mroll: () => {
    result: number;
    text: string;
};
export declare const mslot: (spins?: number, reels?: number, fruits?: string[]) => {
    result: number;
    visual: string;
}[][];
declare const _default: {
    rand: (min?: number, max?: number) => number;
    bigint: (min?: number | bigint, max?: number | bigint) => bigint;
    bool: () => boolean;
    boolChance: (trueChance: number) => boolean;
    float: (min?: number, max?: number) => number;
    floatDeep: (min?: number, max?: number, decimal?: number) => number;
    oneOfArray: (arr: any[]) => any;
    oneValueOfArray: (arr: any[]) => any;
    oneOfObject: (obj: object) => {
        [x: number]: any;
    };
    oneValueOfObject: (obj: object) => any;
    uniqString: (leng?: number, symbols?: string) => string;
    uniqUseragent: (minChromeVersion?: number, maxChromeVersion?: number) => string;
    uniqSmsCode: (leng?: number, smooth?: boolean) => string;
    uniqDate: (unixMin?: number, unixMax?: number) => Date;
    uniqDateForOneYear: (year?: number | number[]) => Date;
    uniqDateForYears: (year?: number | number[]) => Date[];
    uniqColorHex: (withAlpha?: boolean) => string;
    uniqColorRGB: (opacity?: number) => string;
    uniqColorHSL: (randomOpacity?: boolean) => string;
    mdice: (side?: number) => {
        result: number;
        visual: string;
    };
    mroll: () => {
        result: number;
        text: string;
    };
    mslot: (spins?: number, reels?: number, fruits?: string[]) => {
        result: number;
        visual: string;
    }[][];
};
export default _default;
