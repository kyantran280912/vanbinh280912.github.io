import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
    transition: all 0.5s linear;
    font-family: 'Inter';
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
    }
    button{
      cursor: pointer;
      outline: none;
      border: none;
    }
    h2{
    line-height: 48px;
    font-size: 40px;
    color: ${({ theme }) => theme.text};
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
`;
