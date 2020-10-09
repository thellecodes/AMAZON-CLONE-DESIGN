import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Text, TSpan} from 'react-native-svg';
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
      viewBox="0 0 9 15">
      <Text
        data-name="+"
        transform="translate(0 12)"
        fill={theme.colors['primary']}
        fontSize={15}
        fontFamily="CircularStd-Bold, Circular Std Bold"
        fontWeight={700}>
        <TSpan x={0} y={0}>
          {'+'}
        </TSpan>
      </Text>
    </Svg>
  );
};
