// ==================================================
// CART SCREEN
// Displays products added to cart.
// Calculates subtotal and total price.
// Allows removing products or clearing cart.
// ==================================================

import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import { colors } from '../styles/theme';

const Cart = () => {

  const dispatch = useDispatch();
  const items = useSelector((s:any)=>s.cart.items);

  const total = items.reduce(
    (acc:number,i:any)=>acc+i.price*i.quantity,
    0
  );

  return (
    <View style={{ flex:1,padding:15,backgroundColor:colors.background }}>

      <Text style={{ fontSize:24,fontWeight:'bold' }}>
        Carrito
      </Text>

      <FlatList
        data={items}
        keyExtractor={(i:any)=>i.id.toString()}
        renderItem={({item}:any)=>(
          <View
            style={{
              backgroundColor:colors.card,
              padding:10,
              marginVertical:8,
              borderRadius:10
            }}
          >
            <Text>{item.title}</Text>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>Subtotal: ${item.price*item.quantity}</Text>

            <Button
              title="Eliminar"
              onPress={()=>dispatch(removeFromCart(item.id))}
            />
          </View>
        )}
      />

      <Text style={{ fontSize:20,marginVertical:10 }}>
        Total: ${total.toFixed(2)}
      </Text>

      <Button title="Cancelar" onPress={()=>dispatch(clearCart())}/>
      <Button title="Pagar" onPress={()=>dispatch(clearCart())}/>

    </View>
  );
};

export default Cart;