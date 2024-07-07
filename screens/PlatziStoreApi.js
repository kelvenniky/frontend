import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';


const PlatziStoreApi = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleProductPress = (product) => {
    navigation.navigate('Info2', { product });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={handleProductPress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default PlatziStoreApi;