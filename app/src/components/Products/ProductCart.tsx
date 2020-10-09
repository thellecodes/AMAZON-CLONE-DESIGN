import React from 'react';
import {Fragment} from 'react';
import {
  Dimensions,
  FlatList,
  ImageRequireSource,
  StyleSheet,
  Image,
} from 'react-native';
import {Sofa, WhiteChair, Table, Shelve} from '../../images';
import {Box, Text} from '../theme';
import ProductHeader from './ProductHeader';
const {height} = Dimensions.get('window');
import Button from '../../Utils/Button';
import {moderateScale} from 'react-native-size-matters';
import {Plus, Minus} from '../../Icons';
import {TouchableWithoutFeedback} from 'react-native';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProductRoutes} from '.';

const cartItems = [
  {name: 'Sofa', src: Sofa, price: '₦140'},
  {name: 'Chair', src: WhiteChair, price: '₦140'},
  {name: 'Table', src: Table, price: '₦140'},
  {name: 'Wall Shelf', src: Shelve, price: '₦140'},
];

interface CartItemProps {
  name: string;
  src: ImageRequireSource;
  price: string;
}

const CartItem = ({name, src, price}: CartItemProps) => {
  const {navigate} = useNavigation();

  const onPress = () => {
    navigate('ProductDetails');
  };

  return null;
};

interface ProductCartProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProductRoutes, 'ProductCart'>,
    StackNavigationProp<ProductRoutes, 'ProductDetails'>
  >;
}

function ProductCart({navigation}: ProductCartProps) {
  const onCheckOut = () => {
    navigation.replace('ProductCheckOut');
  };

  return null;
}

export default ProductCart;
