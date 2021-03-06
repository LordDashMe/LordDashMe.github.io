import { createGlobalStyle } from 'styled-components';

const FontAwesomeGlobal = createGlobalStyle`

.fa,
.fas,
.far,
.fal,
.fad,
.fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1; 
}
 
@font-face {
  font-family: 'Font Awesome 5 Brands';
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.eot");
  src: url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.eot?#iefix") format("embedded-opentype"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff2") format("woff2"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.woff") format("woff"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.ttf") format("truetype"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-brands-400.svg#fontawesome") format("svg"); 
}
 
.fab {
  font-family: 'Font Awesome 5 Brands'; 
}
 
@font-face {
  font-family: 'Font Awesome 5 Free';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.eot");
  src: url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.eot?#iefix") format("embedded-opentype"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.woff2") format("woff2"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.woff") format("woff"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.ttf") format("truetype"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-regular-400.svg#fontawesome") format("svg"); 
}

.far {
  font-family: 'Font Awesome 5 Free';
  font-weight: 400; 
}
 
@font-face {
  font-family: 'Font Awesome 5 Free';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.eot");
  src: url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.eot?#iefix") format("embedded-opentype"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff2") format("woff2"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.woff") format("woff"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.ttf") format("truetype"), 
      url("/resources/vendor/fontawesome-free-5.10.2-web/webfonts/fa-solid-900.svg#fontawesome") format("svg"); 
}
 
.fa,
.fas {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900; 
}

`;

export default FontAwesomeGlobal;
