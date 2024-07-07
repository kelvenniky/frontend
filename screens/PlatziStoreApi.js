import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import axios from 'axios';

const PlatziStoreApi = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={{flexDirection:"row", alignItems:'center',flexWrap:"wrap"}}>
                <Pressable  onPress={()=>navigation.navigate("Info2")} style={styles.productContainer}>
            <Image source={{ uri: item.images[0] }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </Pressable>
            </View>
          
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:20,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
 },
   productContainer: {
     width: '90%',
  flexDirection: 'row',
       padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
     marginVertical: 8,
     alignItems: 'center',
     flexWrap: "wrap",
   },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
     marginRight: 16,
  },
//   productDetails: {
//     flex: 1,
//     justifyContent: 'center',
//   },
   title: {
     fontSize: 16,
     fontWeight: 'bold',
   },
   price: {
     fontSize: 14,
     color: '#555',
     marginTop: 4,
  },
});

export default PlatziStoreApi;