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

::-webkit-scrollbar {
    width: 0.8rem;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
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
    font-weight: 400;
}

p {
    color: ${({theme})=>theme.colors.text};
    font-size: 1.65rem;
    line-height: 1.5;
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
.container {
  max-width: 120rem;
  margin: 0 auto;
 
  
}
.grid{
    display: grid;
    gap: 9rem;
}
.grid-two-column{
    grid-template-columns: repeat(2,1fr);
}
.grid-three-column{
    grid-template-columns: repeat(3,1fr);
}
.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}

.input, textarea{
    max-width: 50rem;
    color: ${({theme})=>theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({theme})=>theme.colors.border};
    text-transform: uppercase;
    box-shadow: ${({theme})=>theme.colors.shadowSupport};
}

.input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({theme})=>theme.colors.btn};
    color: ${({theme})=>theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: 1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.3s ease;

};
`