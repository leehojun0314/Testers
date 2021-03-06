import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

interface Props {
	theme: ThemeType;
}
const GlobalStyle = createGlobalStyle<Props>`
*, *:after, *:before{
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
}
body{ 
    font-size: calc(14px + .5vw);
    font-family: 'Fira Sans', 'Lato', sans-serif;
    line-height: 1.7;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.medium}
}
a{
    text-decoration: none;
    color: ${({ theme }) => theme.dark}
}
ul{
    list-style: none;
}
button{
    cursor: pointer;
}
.clearfix::after{
    content: "";
    display: block;
    clear: both
}
.blind {
    width: 1px;
    height: 1px;
    position: absolute;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px)
}

`;
export default GlobalStyle;
