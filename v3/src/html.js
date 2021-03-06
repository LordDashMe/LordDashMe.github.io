import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* DEV CONTROLLED - CRITICAL ASSETS START */}
          <meta name="theme-color" content="#000" />
          {/* INSERT CUSTOM META TAG HERE. */}
        {/* DEV CONTROLLED - CRITICAL ASSETS END */}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {/* DEV CONTROLLED - LAZY LOAD ASEETS START */}
          {/* INSERT CUSTOM SCRIPT TAG HERE. */}
        {/* DEV CONTROLLED - LAZY LOAD ASEETS END */}
        {props.postBodyComponents}  
      </body>
    </html>
  )
};

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
