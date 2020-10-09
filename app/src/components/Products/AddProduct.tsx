import React, {useState} from 'react';
import {Fragment} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../Utils/Button';
import FormTextInput from '../../Utils/FormTextInput';
import {Box, Text} from '../theme';
import {allItems, ItemsProps} from './ItemList';
import ProductHeader from './ProductHeader';

/* Actions */
import {addProduct} from '../../store/actions/productActions';
import {useNavigation} from '@react-navigation/native';
import Loader from '../Loader';
import {defaultImg} from '../../Utils';

const {width} = Dimensions.get('window');

export const Images = ({src, name, price}: ItemsProps) => {
  return null;
};

function AddProduct() {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [imageUrl, setImage] = useState<string>(defaultImg);
  const [desc, setDesc] = useState<string>('');

  /** Selectors */
  const auth = useSelector((state: any) => state.auth);
  const product = useSelector((state: any) => state.product);
  const error = useSelector((state: any) => state.err);

  const onPostProduct = () => {
    dispatch(addProduct({title, price, imageUrl, desc}));
    navigate('ProductList');
  };

  console.log(error);
  return (
    <Box flex={1} backgroundColor="white">
      <Box flexDirection="column" alignItems="center" backgroundColor="white">
        <ProductHeader back={false} />
      </Box>

      {!product.sending ? (
        <Box flex={1} padding="xl" alignItems="center">
          {error.id === 'PRODUCT_POST_FAIL' ? (
            <Text
              variant="smtitle"
              color="primary"
              textAlign="center"
              marginBottom="l">
              {error.msg.msg}
            </Text>
          ) : null}

          <FormTextInput
            placeholder="Item Title"
            onChangeText={(title) => setTitle(title)}
          />

          <FormTextInput
            placeholder="Item Price"
            keyboardType="number-pad"
            onChangeText={(price) => setPrice(price)}
          />

          <FormTextInput
            placeholder="Item Image"
            defaultValue={imageUrl}
            onChangeText={(image) => setImage(image)}
          />

          <FormTextInput
            placeholder="Item Description"
            numberOfLines={7}
            onChangeText={(desc) => setDesc(desc)}
            onSubmitEditing={onPostProduct}
          />

          <Box>
            <Button
              label="Add Item"
              variant="primary"
              style={{marginTop: 20}}
              onPress={onPostProduct}
            />
          </Box>
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  );
}
export default AddProduct;
