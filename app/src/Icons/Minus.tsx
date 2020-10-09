import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';
import theme from '../components/theme';

export interface IconProps {
  onPress?: () => void;
  size: number;
}

export default ({size}: IconProps) => {
  return (
    <Svg
      width={moderateScale(size)}
      height={moderateScale(size)}
      viewBox="0 0 10 2">
      <Path
        data-name="Path 18"
        d="M0 1h10"
        fill="none"
        stroke={theme.colors['black']}
        strokeWidth={2}
      />
    </Svg>
  );
};
