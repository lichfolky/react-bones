import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* 
----------- INDEX -----------
* Custom properties  [#CUST]
* Global styles      [#GRES]
* Layout             [#LAYO] 
* Typography         [#TYPO]  
* Utility classes    [#UTIL]        
-----------------------------
*/

/*  -----------------------------------
    Custom properties  [#CUST]        
-----------------------------------  */

:root {
  /* Palette */
  --color-black: hsl(0, 0%, 5%);
  --color-white: hsl(0, 0%, 99%);

  --color-accent: deeppink;
  --color-accent--light: hsl(328, 100%, 70%);

  /* Elements colors */
  --color-text: var(--color-black);

  --color-link: var(--color-accent);
  --color-link--hover: var(--color-accent--light);

  --color-background: var(--color-white);
  --color-main-background: var(--color-white);

  /* Layout */
  --page-padding: 2rem 40px;
  --page-margin: 0 auto;

  /*
    1366px * 768px
  */
  --page-width: 1366px;
  --text-width: 40rem;

  /* Typography */

   font-size: 100%;
  --font-family: Roboto, sans-serif;
}

/*  -----------------------------------
      Global styles [#GRES]        
-----------------------------------  */
/*
  Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

/*
  Remove default margin
*/
* {
  margin: 0;
}

/*
  Allow percentage-based heights in the application
*/
html,
body {
  height: 100%;
}

/*
  Improve media defaults (svg?)
*/
img,
picture,
video,
canvas {
  display: block;
  max-width: 100%;
}


/*
  Create a root stacking context
*/
#root,
#__next {
  isolation: isolate;
}

/*  -----------------------------------
      Layout  [#LAYO]         
-----------------------------------  */


main {
  max-width: var(--page-width);
  background-color: var(--color-main-background);
  padding: var(--page-padding);
  margin: var(--page-margin);
}

/*  -----------------------------------
      Typography  [#TYPO]         
-----------------------------------  */

body {
  background-color: var(--color-background);
  color: var(--color-text);
  accent-color: var(--color-accent);
  font-family: var(--font-family);

  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/*
  Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}

/*
  Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/*  -----------------------------------
      Utility classes [#UTIL]        
-----------------------------------  */

/* To hide something, but not to screen readers */

.visuallyHidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
`;

export default GlobalStyles;