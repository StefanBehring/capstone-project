import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary-dark: #0D4432;
        --color-primary-light: #2BB885;
        --color-grey-dark: #848484;
        --color-grey-light: #CFCDCD;
        --color-green: #1E891E;
        --color-green-hover: #296520;
        --color-red: #C34C4C;
        --color-red-hover: #9A3C3C;
        --color-blue: #008099;
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
        background-color: var(--color-white-default);
        color: #fff;
        font-family: var(--font-family);
        margin: 0;
    }
`

export default GlobalStyles
