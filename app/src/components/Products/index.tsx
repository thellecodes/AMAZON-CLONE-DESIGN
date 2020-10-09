import * as React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ProductCheckOut from './ProductCheckOut';
import ProductCart from './ProductCart';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

export type ProductRoutes = {
  ProductList: undefined;
  ProductDetails: undefined;
  ProductCart: undefined;
  ProductCheckOut: undefined;
  AddProduct: undefined;
  EditProduct: undefined;
};

export const ProductStack = createSharedElementStackNavigator<ProductRoutes>();

export const ProductNavigator = () => (
  <ProductStack.Navigator initialRouteName="ProductList">
    <ProductStack.Screen
      name="ProductList"
      options={{headerShown: false}}
      component={ProductList}
    />
    <ProductStack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{
        headerShown: false,
      }}
    />
    <ProductStack.Screen
      name="ProductCart"
      component={ProductCart}
      options={{
        headerShown: false,
      }}
    />
    <ProductStack.Screen
      name="ProductCheckOut"
      component={ProductCheckOut}
      options={{
        headerShown: false,
      }}
    />
    <ProductStack.Screen
      name="AddProduct"
      component={AddProduct}
      options={{
        headerShown: false,
      }}
    />

    <ProductStack.Screen
      name="EditProduct"
      component={EditProduct}
      options={{
        headerShown: false,
      }}
    />
  </ProductStack.Navigator>
);
