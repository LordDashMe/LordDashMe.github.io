import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

* {
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:after, :before {
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-size: 14px;
  line-height: 1.42857143;
  background-color: #fff;
  margin: 0;
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #000;
}

h1,
h2,
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

h1, 
h2, 
h3, 
h4, 
h5, 
h6 {
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  line-height: 1.1;
  color: inherit;
  font-weight: bold;
}

small {
  font-size: 85%;
}

a {
  background-color: transparent;
  color: #337ab7;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #23527c;
  text-decoration: underline;
}
a:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

p {
  margin: 0 0 10px;
}

code,
p, 
small,
label {
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #000;
}

`;

export default Global;
