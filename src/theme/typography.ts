export interface ITypography {
    weight: {
        regular: string,
        medium: string,
        semiBold: string,
        bold: string,
    };
    size: {
        xs1: number,
        xs2: number,
        xs3: number,
        s1: number,
        s2: number,
        s3: number,
        m1: number,
        m2: number,
        m3: number,
        l1: number,
        l2: number,
        l3: number,
        xl1: number,
        xl2: number,
        xl3: number,
    };
}

export const typography: ITypography = {
    weight: {
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
    },
    size: {
        xs1: 9,
        xs2: 10,
        xs3: 11,
        s1: 12,
        s2: 13,
        s3: 14,
        m1: 15,
        m2: 16,
        m3: 17,
        l1: 18,
        l2: 19,
        l3: 20,
        xl1: 21,
        xl2: 22,
        xl3: 23,
    }
};