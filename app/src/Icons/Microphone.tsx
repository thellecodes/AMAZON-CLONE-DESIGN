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
      viewBox="0 0 10.286 16">
      <Path
        strokeWidth={3}
        data-name="Path 7"
        d="M2.286 7.429a2.857 2.857 0 005.714 0V2.857a2.857 2.857 0 00-5.714 0zm0 0"
        fill={theme.colors['bgrey']}
      />
      <Path
        data-name="Path 8"
        d="M9.143 6.286v1.143a4 4 0 11-8 0V6.286H0v1.143a5.149 5.149 0 004.572 5.109V16h1.142v-3.462a5.149 5.149 0 004.572-5.109V6.286zm0 0"
        fill={theme.colors['bgrey']}
      />
    </Svg>
  );
};
