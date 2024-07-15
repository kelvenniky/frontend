import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReducer";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const ProductInfoScreen2 = ({ route }) => {
  const { product } = route.params;

  const handleBuyNow = () => {
    // Implement your "Buy Now" logic here
    console.log("Buying product:", product);
  };
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;
  const navigation = useNavigation();
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const addItemToCart = (product) => {
    setAddedToCart(true);
    dispatch(addToCart(product));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  
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

        <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
               marginTop:2,
               marginRight:300
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
            </View>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>GH₵ {product.price}</Text>

        
        <TouchableOpacity onPress={() => addItemToCart(route?.params?.item)} style={styles.AddToCart} >
       
        {addedToCart ? (
          <View >
            <Text>Added To Cart</Text>
          </View>
        ) : (
          <Text> Add to Cart</Text>
        )}
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
    padding: 10,
          backgroundColor: "#FFAC1C",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          height:50,
          width:350,
          marginTop:20
  },
  buyNowText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  AddToCart:{
    padding: 10,
    backgroundColor: "#FFC72C",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height:50,
    width:350,
   
  },
  AddToCartText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductInfoScreen2;
