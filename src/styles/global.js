import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  body {
    font-size: 100%;
    font-family: 'Signika', sans-serif!important;
    --brand_1: #DDCAD0;
    --brand_2: #C498A2;
    --primary: #7A4A56;
    --primary_light:#C69AA4;
    --primary_dark: #584445;
    --palette_1: #9A6874;
    --palette_2: #B28F95;
    --palette_3: #9E8E8F;
    --palette_4: #CBBFBF;
    --neutrals_1: #ffffff;
    --neutrals_2: #F2F2F2;
    --neutrals_3: #E9E9E9;
    --neutrals_4: #979797;
    --neutrals_5: #4F4F4F;
    --neutrals_6: #000;
    --support_1: #BEE4E7; 
    --support_2: #F8C9D3; 
    --support_3: #FBF6BC;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  h1,h2,h3,h4,a {
    color: var(--primary);
  }

  h1 {
    font-size: 46px;
    font-weight: 700;

    ${media.lessThan('medium')`
      font-size: 32px;
    `}
  }

  p {
    color:var(--primary_dark);
    line-height: 1.2;
  }
  a:hover {
    color: var(--primary_light);
  }
  .hidden {
    opacity: 0;
  }
  .desk {
    ${media.lessThan('medium')`display:none!important`}
  }
  .mob {
    ${media.greaterThan('medium')`display:none!important`}
  }

  input, textarea {
    border: 1px solid var(--primary);
  }

  input:active,
  input:focus,
  textarea:active,
  textarea:focus {
    outline: none;
    border: 2px solid var(--primary);
  }

  .img-load {
    background: #f6f7f8;
      background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
      );

      animation: placeholderShimmer 1s linear infinite forwards;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @keyframes placeholderShimmer {
        0% {
          background-position: -40rem 0;
        }

        100% {
          background-position: 40rem 0;
        }
      }
  }
`
export default GlobalStyles
