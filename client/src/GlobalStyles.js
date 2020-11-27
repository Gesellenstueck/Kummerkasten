import { createGlobalStyle } from "styled-components";
//hier auch Google-Fonts Import
import OxygenBold from "./assets/fonts/Oxygen-Bold.ttf";
import OxygenRegular from "./assets/fonts/Oxygen-Regular.ttf";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
  box-sizing:border-box;
  }
  :root{

  }
html {

  @font-face {
    font-family: "Oxygen-Regular";
    src: url(${OxygenRegular}) format("truetype");
    
  }
  font-family:"Oxygen-Regular";
  font-size:16px;

  

      
     

}
  body {
    padding:0;
      margin:0;
  
  }




`;

export default GlobalStyles;