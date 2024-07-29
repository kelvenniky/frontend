import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CartContext } from './App';

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.cartIcon}>
        <Text style={styles.cartText}>Cart</Text>
        {cartItems.length > 0 && (
          <View style={styles.countIndicator}>
            <Text style={styles.countText}>{cartItems.length}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  cartIcon: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  countIndicator: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  countText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CartIcon;
