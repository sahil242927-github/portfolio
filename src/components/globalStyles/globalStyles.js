import { createGlobalStyle } from 'styled-components';
import { shadow } from './mixins';

export default createGlobalStyle`


:root {
  --color-primary: #ffa45c;
  --color-secondary: #302822;
}

 /* inherit all the properties from HTML */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; // (10px/16px) = 62.5% => 1rem = 10px
}

body {
  font-family: var(--font-primary);
  color: $color-grey-dark-2;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.6;
}

a,
a:link {
  color: currentColor;
  text-decoration: none;
}
  


.shadow-box {
   ${shadow}
}

// ATOMIC CLASSES
.mb-sm {
  margin-bottom: 2rem;
}
.mb-md {
  margin-bottom: 4rem;
}
.mb-lg {
  margin-bottom: 6rem;
}
.mb-xl {
  margin-bottom: 8rem;
}


`;
