import * as React from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path, G} from 'react-native-svg';
import theme from '../components/theme';

export interface IconProps {
  onPress?: () => void;
  size: number;
}

export default ({size, onPress}: IconProps) => {
  return (
    <BorderlessButton {...{onPress}}>
      <Svg
        width={moderateScale(size)}
        height={moderateScale(size)}
        viewBox="0 0 19 9.401">
        <G
          data-name="Group 18"
          fill="none"
          stroke="#131a22"
          strokeLinecap="round"
          strokeWidth={3}>
          <Path
            data-name="Path 1"
            fill={theme.colors['primary']}
            stroke={theme.colors['primary']}
            strokeWidth={3}
            d="M1 1h17"
          />
          <Path
            data-name="Path 2"
            strokeWidth={3}
            fill={theme.colors['primary']}
            stroke={theme.colors['primary']}
            d="M1 8.401h10"
          />
        </G>
      </Svg>
    </BorderlessButton>
  );
};
