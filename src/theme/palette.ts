export interface IWhite {
    base: string;
}

export interface IBlack {
    base: string;
}

export interface IGray {
    base: string;
    100: string;
}

export interface IBlue {
    base: string;
}

const white: IWhite = {
    base: '#FFFFFF',
};

const black: IBlack = {
    base: '#000000',
};

const gray: IGray = {
    base: '#B2BFC2',
    100: '#909DA1',
};

const blue: IBlue = {
    base: '#6C8DFA',
};

export interface IColor {
    white: IWhite,
    black: IBlack,
    gray: IGray,
    blue: IBlue,
}

export const colors: IColor = {
    white,
    black,
    gray,
    blue,
};

export default {
    white,
    black,
    gray,
    blue,
};