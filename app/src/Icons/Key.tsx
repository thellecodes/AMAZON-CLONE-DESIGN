import * as React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Svg, {Path, G} from 'react-native-svg';
import theme from '../components/theme';

export interface IconProps {
  onPress?: () => void;
  size: number;
  cart: boolean;
}

export default ({size, onPress, cart}: IconProps) => {
  return (
    <TouchableWithoutFeedback {...{onPress}}>
      <Svg
        width={moderateScale(size)}
        height={moderateScale(size)}
        viewBox="0 0 20 20">
        <Path d="M0 0h20v20H0z" fill="none" strokeWidth={3} />
        <Path
          strokeWidth={3}
          d="M6.111 6.667V5.048A3.971 3.971 0 0110 1a3.971 3.971 0 013.889 4.048v1.619h2.333a.794.794 0 01.778.81v9.713a.794.794 0 01-.778.81H3.778A.794.794 0 013 17.19V7.476a.794.794 0 01.778-.81zm0 1.619H4.556v8.1h10.888v-8.1h-1.555V9.9h-1.556V8.286H7.667V9.9H6.111zm1.556-1.619h4.667V5.048a2.335 2.335 0 10-4.667 0z"
          fill={theme.colors['primary']}
        />
      </Svg>
    </TouchableWithoutFeedback>
  );
};
