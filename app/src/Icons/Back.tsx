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
      viewBox="0 0 24 24">
      <Path data-name="Path 16" d="M0 0h24v24H0z" fill="none" strokeWidth={3} />
      <Path
        data-name="Path 17"
        strokeWidth={3}
        d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
        fill={theme.colors['primary']}
      />
    </Svg>
  );
};
