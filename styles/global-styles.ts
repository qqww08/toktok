import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";
import NotoMedium from "../public/fonts/NotoSansCJKkr-Medium.otf";
import themes from "~/styles/themes";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'NotoMedium';
    src: url('${NotoMedium}') format('otf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  * {
    box-sizing: border-box;
    font-family: "NotoMedium";
  }
  html,body{
    font-family: "NotoMedium";
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  
  @media only screen and (max-width: 768px) {
    html {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 400px) {
    html {
      font-size: 10px;
    }
  }
`;
export const Medium = css`
  font-family: "My custom family", sans-serif;
`;
// Background center
export const BgCover = css`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
//popup
export const Popup = css`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const __Snackbar = css`
  .snackbar {
    bottom: 7.8rem;
    .MuiSnackbarContent-root {
      background: ${themes.color.black};
      padding: 0;
      border-radius: 10px;
    }
    .MuiSnackbarContent-message {
      color: ${themes.color.white};
      padding: 1.6rem 4.4rem;
      font-weight: bold;
      font-size: 1.2rem;
      letter-spacing: -0.53px;
    }
  }
`;
// flex
export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FlexRowCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexAround = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const OneLine = css`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const TwoLine = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const Threeline = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export default GlobalStyle;
