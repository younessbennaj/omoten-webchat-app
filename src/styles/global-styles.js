import { createGlobalStyle } from 'styled-components';
import { color, bg } from 'styled-system';
import { theme } from '../theme';

export const resets = `
  /* http://meyerweb.com/eric/tools/css/reset/
   * v2.0 | 20110126
   * License: none (public domain)
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
`;

// CSS resets
// global font size
export default createGlobalStyle`
    /**
    * Best practice from http://callmenick.com/post/the-new-box-sizing-reset
    * TLDR: It’s easier to override and a slight performance boost.
    */
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        background-color: ${theme.colors.bodyBg};
        color: ${theme.colors.bodyColor};
    }

    html { 
        box-sizing: border-box;
    }

    body {
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.00938em;
    }

    h1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1;
        letter-spacing: -0.01562em;
    }

    h2 {
        font-size: 3.75rem;
        font-weight: 300;
        line-height: 1;
        letter-spacing: -0.00833em;
    }

    h3 {
        font-size: 3rem;
        font-weight: 400;
        line-height: 1.04;
        letter-spacing: 0em;
    }

    h4 {
        font-size: 2.125rem;
        font-weight: 400;
        line-height: 1.17;
        letter-spacing: 0.00735em;
    }

    h5 {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.33;
        letter-spacing: 0em;
    }

    h6 {
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.6;
        letter-spacing: 0.0075em;
    }

    a, button {
        cursor: pointer;
    }

    a, input, textarea, button {
        outline: none;
        text-decoration: none;
    }
`