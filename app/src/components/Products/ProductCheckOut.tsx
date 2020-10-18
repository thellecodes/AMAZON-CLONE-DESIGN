import React, {useState} from 'react';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Dimensions} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {ProductRoutes} from '.';
import {CUSTOMFONT} from '../Helpers';
import ProductHeader from './ProductHeader';
import theme, {Box, Text} from '../theme';
import {Check} from '../../Icons';
import Button from '../../Utils/Button';
import {SpringUtils, useValue, Value} from 'react-native-reanimated';
import {useEffect} from 'react';
import {withSpringTransition} from 'react-native-redash';
import Animated from 'react-native-reanimated';
import {useDispatch} from 'react-redux';
import {clearCart} from '../../store/actions/productActions';
const {height} = Dimensions.get('window');

interface ProductDetailsProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProductRoutes, 'ProductDetails'>,
    StackNavigationProp<ProductRoutes, 'ProductList'>
  >;
}

function ProductCheckOut({navigation}: ProductDetailsProps) {
  const dispatch: any = useDispatch();

  const onBack = () => {
    navigation.pop();
  };

  const onContinue = () => {
    dispatch(clearCart()).then(() => {
      navigation.replace('ProductList');
    });
  };

  return (
    <Box flex={1} backgroundColor="primary" justifyContent="flex-start">
      <TouchableWithoutFeedback onPress={onBack}>
        <Box flexDirection="column" alignItems="center" backgroundColor="white">
          <ProductHeader back={false} />
        </Box>
      </TouchableWithoutFeedback>

      <Box height={height * 0.4} justifyContent="center" alignItems="center">
        <Text variant="title" fontSize={CUSTOMFONT(42)}>
          Thanks
        </Text>
      </Box>
      <Box
        flex={1}
        backgroundColor="white"
        borderTopLeftRadius="xl"
        borderTopRightRadius="xl"
        justifyContent="center"
        alignItems="center">
        <Check size={90} />
        <Text
          fontSize={CUSTOMFONT(15)}
          variant="title"
          textAlign="center"
          color="primary"
          marginTop="m">
          Thank you for purchasing this produts.
        </Text>

        <Text
          fontSize={CUSTOMFONT(12)}
          textAlign="center"
          marginTop="m"
          color="primary"
          variant="smtitle">
          Your order will be shipped in 2-4 international days
        </Text>

        <Button
          label="Continue Shopping"
          variant="primary"
          style={{marginTop: 80}}
          onPress={onContinue}
        />
      </Box>
    </Box>
  );
}

export default ProductCheckOut;
