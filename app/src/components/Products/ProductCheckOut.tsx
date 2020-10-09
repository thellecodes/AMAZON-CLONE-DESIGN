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
const {height} = Dimensions.get('window');

interface ProductDetailsProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProductRoutes, 'ProductDetails'>,
    StackNavigationProp<ProductRoutes, 'ProductList'>
  >;
}

function ProductCheckOut({navigation}: ProductDetailsProps) {
  const onBack = () => {
    navigation.pop();
  };
  const onContinue = () => {
    navigation.replace('ProductList');
  };

  return null;
}

export default ProductCheckOut;
