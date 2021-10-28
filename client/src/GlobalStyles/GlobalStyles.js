import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary-heavy: #21183C;
        --color-primary-dark: #3F336B;
        --color-primary-normal: #6457ac;
        --color-primary-light: #A396E7;
        --color-grey-dark: #848484;
        --color-grey-light: #CFCDCD;
        --color-green: #5FBA85;
        --color-green-hover: #296520;
        --color-red: #EE63B6;
        --color-red-hover: #9A3C3C;
        --color-blue: #09C1DE;
        --color-blue-hover: #2B7687;
        --color-white-light: #F4F9F9;
        --color-white-default: #ffffff;
        --color-black: #000000;

        --font-family: 'Montserrat', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    body {
        background-color: var(--color-primary-heavy);
        color: var(--color-primary-light);
        font-family: var(--font-family);
        margin: 0;
    }
`

export default GlobalStyles
