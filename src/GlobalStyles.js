import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body,html {
    margin: 0;
    padding: 0;
    background: #fffff7;
   
    font-family: 'Rubik', sans-serif;
    font-weight:100;
  }

  ::-webkit-scrollbar {
  width: 10px; 
  background-color: rgba(0, 0, 0, 0);
  -webkit-border-radius: 100px;
}
::-webkit-scrollbar:hover {
  background-color: rgba(0, 0, 0, 0.09);
}
::-webkit-scrollbar-thumb:vertical {
  background: #59BF53;
  -webkit-border-radius: 100px;
}
::-webkit-scrollbar-thumb:vertical:active {
  background: #009933; 
  -webkit-border-radius: 100px;
}
`;
