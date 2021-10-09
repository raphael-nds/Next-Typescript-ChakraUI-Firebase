import { createGlobalStyle } from 'styled-components' ;   
 
export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --gray-100: #EDF2F7;
        --gray-600: #4A5568;
        --gray-800: #1A202C;

    }

    body {
        background: var(--gray-800);
        color: var(--gray-100);
    }

    @media (max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    @media (max-width: 1080px){
        font-size: 93.75%;
    }

    body, input, textarea, select, button {
        font: 400 1rem "Roboto", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;