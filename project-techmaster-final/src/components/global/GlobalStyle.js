import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    * {
      margin: 0;
      padding: 0;
    }
    
    html,
    body {
      height: 100%;
    }
    body {
      line-height: 1.5;
    }
    
    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
      outline: none;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }
    body{
    font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 400;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    }
    li{
      list-style: none;
    }
    a{
      text-decoration: none;
      /* color: white; */
    }
    button{
      cursor: pointer;
      outline: none;
      border: none;
    }

  ::-webkit-scrollbar {
  width: 12px;
  height: 8px;
  background-color: ${({ theme }) => theme.bg1};
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 2px;
  
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: 121317;
}
a{
  color: ${({ theme }) => theme.text};
}
:root{
  --text-pri: #ffffff;
}
`;
