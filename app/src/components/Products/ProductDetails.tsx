import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {ProductRoutes} from '.';
import {Plus, Minus} from '../../Icons';
import {CUSTOMFONT} from '../Helpers';
import Loader from '../Loader';
import {Box, Text} from '../theme';

/* Components */
import ProductHeader from './ProductHeader';

/* Utils */
const {width, height} = Dimensions.get('window');

interface ProductDetailsProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProductRoutes, 'EditProduct'>,
    StackNavigationProp<ProductRoutes, 'ProductList'>
  >;
  route: any;
}
function ProductDetails({navigation, route}: ProductDetailsProps) {
  const {_id} = route.params;

  const {products} = useSelector((state: any) => state.product);
  const currentProduct = products.filter((p: any) => p._id === _id);

  const onBack = () => {
    navigation.pop();
  };

  const onEdit = () => {
    navigation.navigate('EditProduct');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {currentProduct.length > 0 ? (
        <>
          <View style={{height: height * 0.6}}>
            <TouchableWithoutFeedback onPress={onBack}>
              <Box
                flexDirection="column"
                alignItems="center"
                backgroundColor="white">
                <ProductHeader back={true} />
              </Box>
            </TouchableWithoutFeedback>

            <Box flex={1} padding="m" height={height * 0.6}>
              <Text
                variant="title"
                fontSize={CUSTOMFONT(27)}
                color="primary"
                textTransform="capitalize"
                fontWeight="900">
                {currentProduct[0].title}
              </Text>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginTop="m">
                <Text color="orange" variant="title" fontSize={CUSTOMFONT(20)}>
                  ₦{currentProduct[0].price}
                </Text>

                <Box
                  width={97}
                  height={30}
                  borderRadius="s"
                  borderWidth={StyleSheet.hairlineWidth}
                  flexDirection="row"
                  alignItems="center"
                  padding="s"
                  justifyContent="space-between">
                  <Plus size={moderateScale(18)} />
                  <Text variant="title" color="primary" fontSize={15}>
                    1
                  </Text>
                  <Minus size={moderateScale(15)} />
                </Box>
              </Box>
              <Box
                height={moderateScale(230)}
                width={moderateScale(width * 0.77)}
                alignSelf="center"
                marginTop="m"
                padding="s"
                alignItems="center"
                justifyContent="center">
                <Image
                  source={{uri: currentProduct[0].imageUrl}}
                  resizeMode="contain"
                  style={{...StyleSheet.absoluteFillObject}}
                />
              </Box>
            </Box>
          </View>
          <Box
            flex={1}
            backgroundColor="white"
            padding="xl"
            position="relative">
            <Box flex={1}>
              <Text variant="title" color="primary" marginBottom="m">
                Description
              </Text>
              <Text variant="body" fontSize={CUSTOMFONT(11)} color="primary">
                {currentProduct[0].desc}
              </Text>
            </Box>

            <TouchableWithoutFeedback onPress={onEdit}>
              <Box
                position="absolute"
                bottom={0}
                left={0}
                backgroundColor="primary"
                height={57}
                borderTopLeftRadius="l"
                padding="m">
                <Text variant="title" color="white" fontSize={CUSTOMFONT(14)}>
                  Edit
                </Text>
              </Box>
            </TouchableWithoutFeedback>

            <Box
              position="absolute"
              bottom={0}
              right={0}
              backgroundColor="primary"
              height={57}
              borderTopLeftRadius="l"
              padding="m">
              <Text variant="title" color="white" fontSize={CUSTOMFONT(23)}>
                ADD CART
              </Text>
            </Box>
          </Box>
        </>
      ) : (
        <Loader />
      )}
    </View>
  );
}

export default ProductDetails;
