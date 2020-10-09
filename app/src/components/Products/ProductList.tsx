import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {loadProducts} from '../../store/actions/productActions';
import {Box, Text} from '../theme';

/* Components */
import ListContainer from './ListContainer';
import ProductCard from './ProductCard';
import ProductHeader from './ProductHeader';
import ProductSearch from './ProductSearch';

/* Utils */
const {width, height} = Dimensions.get('window');

function ProductList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <Box flex={1}>
      <Box
        height={height * 0.5}
        flexDirection="column"
        alignItems="center"
        backgroundColor="white">
        <ProductHeader back={false} />
        <ProductSearch />
        <ProductCard />
      </Box>
      <ListContainer />
    </Box>
  );
}

export default ProductList;
