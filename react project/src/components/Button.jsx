import styled from "styled-components";
export const Button=styled.button`
  background-color: ${({theme})=>theme.colors.btn};
  color: ${({theme})=>theme.colors.white};
    padding: 1.4rem 2.3rem;
    font-size: 1.8rem;
    border: none;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    max-width:auto;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;

    &:hover
    &:active{
        background-color: transparent;
       box-shadow: ${({theme})=>theme.colors.shadowSupport};
        transform: scale(0.9);
    }
    a{
        text-decoration: none;
        color: ${({theme})=>theme.colors.white};
        font-size: 1.8rem;}
`;
