import {hash} from "./hash";

export const pickColor = (s: string) => {
    // const colors = [
    //     'fee2e2', 'fef3c7', 'ecfccb', 'd1fae5', 'cffafe', 'dbeafe', 'ede9fe', 'fae8ff', 'fce7f3'
    // ].map(s => `#${s}`);
    const colorsPale = [
        'fef2f2', 'fffbeb', 'f7fee7', 'ecfdf5', 'ecfeff', 'eff6ff', 'f5f3ff', 'fdf4ff', 'fff1f2'
    ].map(s => `#${s}`);
    return colorsPale[hash(s) % (colorsPale.length)];
}