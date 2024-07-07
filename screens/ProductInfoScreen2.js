import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";

const ProductInfoScreen2 = ({ route }) => {
  const { product } = route.params;

  const handleBuyNow = () => {
    // Implement your "Buy Now" logic here
    console.log("Buying product:", product);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{ uri: product.images[0] }}
            style={styles.productImage}
          />
          <Image
            source={{ uri: product.images[1] }}
            style={styles.productImage}
          />
          <Image
            source={{ uri: product.images[2] }}
            style={styles.productImage}
          />
        </ScrollView>

        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>GH₵ {product.price}</Text>
        <TouchableOpacity style={styles.AddToCart} onPress={handleBuyNow}>
          <Text style={styles.AddToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  productImage: {
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 16,
    width: 350,
    height: 400,
    resizeMode: "cover",
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buyNowButton: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyNowText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  AddToCart: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  AddToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductInfoScreen2;
