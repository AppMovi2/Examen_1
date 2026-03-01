// ==================================================
// PRODUCTS SCREEN (WELCOME)
// Displays products list and categories.
// Allows adding products to cart.
// ==================================================

// Loads products when screen starts.
// Filters products by category.
// Navigates to product detail screen.


import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  fetchCategories,
} from '../redux/productsSlice';

import { addToCart } from '../redux/cartSlice';
import { colors } from '../styles/theme';

const Welcome = ({ navigation }: any) => {

  const dispatch:any = useDispatch();

  const products = useSelector((s:any)=>s.products.list);
  const categories = useSelector((s:any)=>s.products.categories);

  useEffect(()=>{
    dispatch(fetchProducts(null));
    dispatch(fetchCategories());
  },[]);

  return (
    <View style={{ flex:1, backgroundColor:colors.background,padding:10 }}>

      <Text style={{ fontSize:24,fontWeight:'bold',marginBottom:10 }}>
        Productos
      </Text>

      {/* BOTÓN CARRITO FLOTANTE */}
      <TouchableOpacity
        onPress={()=>navigation.navigate('Cart')}
        style={{
          position:'absolute',
          right:20,
          bottom:20,
          backgroundColor:colors.primary,
          padding:15,
          borderRadius:30,
          zIndex:10
        }}
      >
        <Text style={{ color:'#fff', fontWeight:'bold' }}>
          🛒
        </Text>
      </TouchableOpacity>

      <Button
        title="Todos"
        onPress={()=>dispatch(fetchProducts(null))}
      />

      <FlatList
        horizontal
        data={categories}
        keyExtractor={(i:any)=>i}
        renderItem={({item}:any)=>(
          <View style={{ marginRight:10 }}>
            <Button
              title={item}
              onPress={()=>dispatch(fetchProducts(item))}
            />
          </View>
        )}
      />

      <FlatList
        data={products}
        keyExtractor={(i:any)=>i.id.toString()}
        renderItem={({item}:any)=>(

          <View
            style={{
              backgroundColor:colors.card,
              padding:12,
              marginVertical:8,
              borderRadius:10
            }}
          >

            {/* 🔥 TOCAR PRODUCTO → DETALLE */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail',{ product:item })
              }
            >
              <Text style={{ fontWeight:'bold' }}>
                {item.title}
              </Text>

              <Text>${item.price}</Text>
            </TouchableOpacity>

            {/* AGREGAR AL CARRITO */}
            <TouchableOpacity
              style={{
                marginTop:10,
                backgroundColor:colors.primary,
                padding:10,
                borderRadius:8
              }}
              onPress={()=>dispatch(addToCart(item))}
            >
              <Text style={{ color:'#fff',textAlign:'center' }}>
                Agregar al carrito
              </Text>
            </TouchableOpacity>

          </View>
        )}
      />

    </View>
  );
};

export default Welcome;