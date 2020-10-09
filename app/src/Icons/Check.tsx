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
      viewBox="0 0 90 90">
      <Path
        d="M45 0a45 45 0 1045 45A45.016 45.016 0 0045 0zm-9 67.5L13.5 45l6.345-6.345L36 54.765 70.155 20.61 76.5 27z"
        fill="#131a22"
      />
    </Svg>
  );
};
