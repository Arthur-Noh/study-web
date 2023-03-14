import 'styled-components';
import { ITypography } from './typography';
import { IBase } from './base';
import { IColor } from './palette';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: IColor;
        base: IBase;
        typography: ITypography;
    };
}