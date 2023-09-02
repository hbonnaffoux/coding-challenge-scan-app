import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

export function ChevronDown({ ...props }: SvgProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M15.88 9.29L12 13.17L8.12 9.29C7.73 8.9 7.1 8.9 6.71 9.29C6.32 9.68 6.32 10.31 6.71 10.7L11.3 15.29C11.69 15.68 12.32 15.68 12.71 15.29L17.3 10.7C17.69 10.31 17.69 9.68 17.3 9.29C16.91 8.91 16.27 8.9 15.88 9.29Z"
        fill="#5E646E"
      />
    </Svg>
  );
}
