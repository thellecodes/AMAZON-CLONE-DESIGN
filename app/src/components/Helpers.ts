import {Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
const {width} = Dimensions.get('window');

export const MAXWIDTH = 400;
export const MAXHEIGHT = 640;
export const BIGFONT = 0.8;

export const CUSTOMFONT = (size: number) => {
  return width > MAXWIDTH ? moderateScale(size) * BIGFONT : moderateScale(size);
};
