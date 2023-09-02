import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

export function ChevronUp({ ...props }: SvgProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M11.29 8.70998L6.7 13.3C6.31 13.69 6.31 14.32 6.7 14.71C7.09 15.1 7.72 15.1 8.11 14.71L12 10.83L15.88 14.71C16.27 15.1 16.9 15.1 17.29 14.71C17.68 14.32 17.68 13.69 17.29 13.3L12.7 8.70998C12.32 8.31998 11.68 8.31998 11.29 8.70998Z"
        fill="#5E646E"
      />
    </Svg>
  );
}
