import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;  
    font-family: "Work Sans", sans-serif;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
}

h1{
    font-size: 6rem;
    font-weight: 900;
    color: ${({theme})=>theme.colors.heading};
}

h2{
    font-size: 4.4rem;
    color: ${({theme})=>theme.colors.heading};
    font-weight: 300;
    white-space: normal;
    text-align: center;
}

h3{
    font-size: 1.8rem;
    color: ${({theme})=>theme.colors.heading};
    font-weight: 400;
}

p {
    color: ${({theme})=>theme.colors.text};
    font-size: 1.6rem;
    line-height: 1.6;
    margin-top: 1rem;
    opacity: 0.7;
    font-weight: 400;
}

a{
    text-decoration: none;
}

li{
    list-style: none;
}
`;