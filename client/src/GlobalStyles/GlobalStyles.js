import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    :root {
        --color-lila-dark: #2a0944;
        --color-lila: #3b185f;
        --color-lila-light: #a12568;
        --color-yellow: #fec260;
        --color-green: #4caf50;
        --color-green-hover: #69EE6E;
        --color-red: #AC140C;
        --color-red-hover: #F1574F;
        --color-blue: #008cba;
        --color-blue-hover: #40C2ED;

        --font-family: 'Montserrat', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    body {
        background-color: var(--color-lila-dark);
        color: #fff;
        font-family: var(--font-family);
        margin: 0;
    }
`

export default GlobalStyles
