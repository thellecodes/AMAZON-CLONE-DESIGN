import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path, G} from 'react-native-svg';
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
      viewBox="0 0 15 15">
      <Path data-name="Path 5" d="M0 0h15v15H0z" fill="none" strokeWidth={3} />
      <Path
        strokeWidth={3}
        d="M10.929 10.141l2.385 2.385-.788.788-2.385-2.385a5.014 5.014 0 11.788-.788zm-1.118-.413a3.9 3.9 0 10-.084.084l.084-.084z"
        fill={theme.colors['sgrey']}
      />
    </Svg>
  );
};
