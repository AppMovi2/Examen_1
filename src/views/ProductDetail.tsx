// ==================================================
// PRODUCT DETAIL SCREEN
// Shows product information and allows adding
// product to shopping cart.
// ==================================================

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = ({ route, navigation }:any) => {

  const { product } = route.params;
  const dispatch = useDispatch();

  return (
    <View style={{ padding:20 }}>

      <Text style={{ fontSize:22,fontWeight:'bold' }}>
        {product.title}
      </Text>

      <Text>${product.price}</Text>

      <Text style={{ marginVertical:10 }}>
        {product.description}
      </Text>

      <Button
        title="Agregar al carrito"
        onPress={()=>{
          dispatch(addToCart(product));
          navigation.navigate('Cart');
        }}
      />

    </View>
  );
};

export default ProductDetail;