import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    :root {
        --color-lila-dark: #2a0944;
        --color-lila: #3b185f;
        --color-lila-light: #a12568;
        --color-yellow: #fec260;
        --color-green: #4caf50;
        --color-red: #f44336;
        --color-blue: #008cba;

        --font-family: 'Roboto', sans-serif;
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
