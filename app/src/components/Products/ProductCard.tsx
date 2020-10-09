import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import {Box} from '../theme';
import {ProductCard as ProductCardImg} from '../../images';
import TouchableScale from 'react-native-touchable-scale';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

function ProductCard() {
  const {navigate} = useNavigation();

  const onPress = () => {
    navigate('AddProduct');
  };

  return (
    <TouchableWithoutFeedback {...{onPress}}>
      <Box
        width={width * 0.85}
        backgroundColor="primary"
        height={163}
        alignItems="baseline"
        alignSelf="center"
        overflow="hidden"
        style={{marginTop: 20, borderRadius: 20}}>
        <Image
          source={ProductCardImg}
          style={{flex: 1, ...StyleSheet.absoluteFillObject}}
        />
      </Box>
    </TouchableWithoutFeedback>
  );
}

export default ProductCard;
