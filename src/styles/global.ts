import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, p, ul, li, header, footer, main, section, aside, form, nav, input, button, figure, figcaption, a {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
    }

    :root {
        --bg-color-main: #110066;
        --bg-color-secondary: #274690;
        --text-color-main: #1E2749;
        --text-color-secondary: #515278;
        --text-color-dashboard: #81829F;
        --text-color-warning: #F53030;
        --text-color-currency: #32936F;
        --border-radius: 8px;

        @media (min-width: 768px) {
            --border-radius: 16px;
        }
    }

    body, button, a {
        font-family: 'Roboto', sans-serif;
    }
`;
