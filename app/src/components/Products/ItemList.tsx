import React, {Fragment} from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  ImageRequireSource,
  TouchableWithoutFeedback,
} from 'react-native';
import {Key} from '../../Icons';
import {Stars, Sofa, WhiteChair, Table, Shelve} from '../../images';
import {Box, Text} from '../theme';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, deleteProduct} from '../../store/actions/productActions';

export const allItems = [
  {name: 'Sofa', src: Sofa, price: '₦140'},
  {name: 'Chair', src: WhiteChair, price: '₦140'},
  {name: 'Table', src: Table, price: '₦140'},
  {name: 'Wall Shelf', src: Shelve, price: '₦140'},
];

export interface ItemsProps {
  price: string;
  title: string;
  imageUrl: string;
  desc: string;
  _id: string;
  cart: boolean;
}

export const Items = ({title, price, imageUrl, _id, cart}: ItemsProps) => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const onPress = () => {
    navigate('ProductDetails', {
      _id,
    });
  };

  const onDelete = (_id: string) => {
    dispatch(deleteProduct(_id));
  };

  const onCart = (_id: string) => {
    dispatch(addToCart(_id));
  };

  return (
    <SharedElement id="image">
      <Box
        width={157}
        height={180}
        backgroundColor="white"
        borderWidth={StyleSheet.hairlineWidth}
        marginTop="m"
        borderRadius="m"
        padding="m"
        justifyContent="flex-start"
        margin="s">
        <Box
          flex={1}
          height={60}
          overflow="hidden"
          alignItems="center"
          justifyContent="center"
          padding="s">
          <Image
            source={{
              uri: `${imageUrl.toLowerCase()}`,
            }}
            style={{...StyleSheet.absoluteFillObject}}
            resizeMode="contain"
          />
          <Box
            style={{...StyleSheet.absoluteFillObject, zIndex: 1}}
            padding="s"
            flexDirection="row"
            justifyContent="flex-end">
            <BorderlessButton
              style={{
                height: 20,
                width: 20,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                marginRight: 10,
              }}
              onPress={() => onDelete(_id)}>
              <Text color="danger" textTransform="uppercase" variant="smtitle">
                X
              </Text>
            </BorderlessButton>
          </Box>
        </Box>
        <Box flex={1} paddingBottom="s">
          <TouchableWithoutFeedback {...{onPress}}>
            <Text
              variant="title"
              color="primary"
              marginTop="s"
              fontSize={13}
              marginBottom="s">
              {title}
            </Text>
          </TouchableWithoutFeedback>
          <Image source={Stars} />
          <Box
            flexDirection="row"
            justifyContent="space-between"
            marginTop="s"
            marginBottom="s">
            <Text variant="body">₦{price}</Text>
            <BorderlessButton onPress={() => onCart(_id)}>
              <Key size={20} {...{cart}} />
            </BorderlessButton>
          </Box>
        </Box>
      </Box>
    </SharedElement>
  );
};

interface ItemListProps {}

function ItemList({}: ItemListProps) {
  const {navigate} = useNavigation();
  const {products} = useSelector((state: any) => state.product);

  return (
    <Box flex={1} backgroundColor="cgrey">
      {products.length > 0 ? (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            flexDirection: 'column',
          }}
          showsVerticalScrollIndicator={false}
          data={products}
          numColumns={2}
          renderItem={({
            item: {_id, title, imageUrl, desc, price, cart},
          }: any) => {
            return (
              <Fragment>
                <Items {...{title, imageUrl, price, desc, _id, cart}} />
              </Fragment>
            );
          }}
          keyExtractor={({_id}) => _id}
        />
      ) : (
        <BorderlessButton onPress={() => navigate('AddProduct')}>
          <Text
            marginTop="xl"
            variant="smtitle"
            textAlign="center"
            color="primary">
            No Products for now, Add Now
          </Text>
        </BorderlessButton>
      )}
    </Box>
  );
}

export default ItemList;
