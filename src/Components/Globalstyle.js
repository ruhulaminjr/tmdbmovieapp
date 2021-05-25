import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    width: 80%;
    margin: 0 auto;
    background: #22254B;
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
}

img{
    max-width: 100%;
}
a{
    text-decoration: none;
    color: #fff;
}
a,p,h1,h2,h3,h4,*{
    font-family: 'Noto Sans JP', sans-serif;
}
@media (max-width:700px){
    body{
        width: 100%;
    }
}
`;
export default GlobalStyles;
