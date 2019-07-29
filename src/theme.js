// export default {
//     background: '#f5f8fb',
//     fontFamily: 'monospace',
//     headerBgColor: '#2196F3',
//     headerFontColor: '#fff',
//     headerFontSize: '16px',
//     botBubbleColor: '#2196F3',
//     botFontColor: '#fff',
//     userBubbleColor: '#fff',
//     userFontColor: '#4a4a4a'
// };

// export const defaultTheme = {
//     background: '#BDBDBD'
// }

// export const headerTheme = {
//     background: '#fff',
//     color: '#9A9A9A'
// }

// export const botTheme = {
//     bubbleColor: '#f8f8f8',
//     fontColor: '#000',
//     quickRepliesBorder: '#2196F3',
//     quickRepliesColor: '#2196F3',
//     quickRepliesBackgroud: '#2196F3',
//     quickReplisInvertColor: '#fff'
// };

// export const userTheme = {
//     bubbleColor: '#2196F3',
//     fontColor: '#fff'
// };

// Theme 

// The theme file contains an object which holds values for common variables such as color,
// fonts, box shadows, and more.

// Colors

const colors = {
    bodyText: '#494949',
    textHeading: '#333333',
    black: '#1b1f23',
    white: '#fff',
    bodyBg: '#f0f1f2',
    bodyBgHover: '#e8ebed',
    primary: '#047fde',
    primaryLight: '#379cef',
    secondary: '#005cb9',
    neutral: '#D8DDE1',
    state: {
        active: '#005cb9',
        error: '#de2e21',
        success: '#43c463',
        warning: '#ffa126',
        disabled: '#379cef',
    },
}

export const theme = {
    breakpoints: ['544px', '768px', '1012px', '1280px'],
    maxWidths: {
        small: '544px',
        medium: '768px',
        large: '1012px',
        xlarge: '1280px'
    },
    fontWeights: {
        light: 300,
        normal: 400,
        bold: 600
    },
    borders: [0, '1px solid transparent'],
    radii: ['0', '2px', '4px', '8px', '16px'],
    fontSizes: [
        12,
        14,
        16,
        20,
        24,
        32,
        40,
        48
    ],
    lineHeights: {
        "condensedUltra": 1,
        "condensed": 1.25,
        "default": 1.5
    },
    shadows: {
        small: '0 1px 1px rgba(27, 31, 35, 0.1)',
        medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
        large: '0 1px 15px rgba(27, 31, 35, 0.15)',
        'extra-large': '0 10px 50px rgba(27, 31, 35, 0.07)',
        formControl: 'rgba(27, 31, 35, 0.075) 0px 1px 2px inset',
        formControlFocus: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em'
    },
    space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128],
    colors
};