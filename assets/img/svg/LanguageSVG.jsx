import React, { FC } from "react";
import Svg, { Path, Defs, Pattern, Use, Image, Rect } from "react-native-svg";

export const LanguageSVG = (props) => (
  <Svg
    width="31"
    height="32"
    viewBox="0 0 31 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width="31" height="32" fill="url(#pattern0)" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <Use
          xlinkHref="#image0_241_372"
          transform="matrix(0.0103226 0 0 0.01 -0.016129 0)"
        />
      </Pattern>
      <Image
        id="image0_241_372"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
