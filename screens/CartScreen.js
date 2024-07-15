
import React from 'react';
import { View, Text,Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
decrementQuantity,
  incrementQuantity,
   removeFromCart,
 } from "../redux/CartReducer";
 import productsData from '../data/products.json'


const CartScreen = ({product}) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            {/* <Image source={{ uri: product.image }} style={styles.image} /> */}

            {/* <Image source={{ uri: item.image[1] }} style={styles.image} /> */}
            <View style={styles.itemDetails}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleDecrement(item)}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => handleIncrement(item)}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
                <Text style={styles.removeButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal().toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  quantityButton: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    color: '#f44336',
    fontSize: 14,
    fontWeight: 'bold',
  },
  totalContainer: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default CartScreen;













// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   Pressable,
//   TextInput,
//   Image,
// } from "react-native";
// import React from "react";
// import { AntDesign, Feather } from "@expo/vector-icons";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decrementQuantity,
//   incrementQuantity,
//   removeFromCart,
// } from "../redux/CartReducer";
// import { useNavigation } from "@react-navigation/native";

// const CartScreen = () => {
//   const cart = useSelector((state) => state.cart.cart);
//   console.log(cart);
//   const total = cart
//     ?.map((item) => item.price * item.quantity)
//     .reduce((curr, prev) => curr + prev, 0);
//   const dispatch = useDispatch();
//   const increaseQuantity = (item) => {
//     dispatch(incrementQuantity(item));
//   };
//   const decreaseQuantity = (item) => {
//     dispatch(decrementQuantity(item));
//   };
//   const deleteItem = (item) => {
//     dispatch(removeFromCart(item));
//   };
//   const navigation = useNavigation();
//   console.log(total);
//   return (
//     <ScrollView style={{ marginTop: 10, flex: 1, background: "white" }}>
//       {/* <View
//         style={{
//           backgroundColor: "#00ced1",
//           padding: 10,
//           flexDirection: "row",
//           alignItems: "center",
//           marginTop:40,
//         }}
//       >
//         <Pressable
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             marginHorizontal: 7,
//             gap: 10,
//             backgroundColor: "white",
//             borderRadius: 3,
//             height: 38,
//             flex: 1,
//           }}
//         >
//           <AntDesign
//             style={{ paddingLeft: 10 }}
//             name="search1"
//             size={22}
//             color="black"
//           />
//           <TextInput placeholder="Search" />
//         </Pressable>
//         <Feather name="mic" size={24} color="black" />
//       </View> */}

//       <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
//         <Text style={{ fontSize: 18, fontWeight: "400" }}>
//           {" "}
//           SubTotal : GH₵{" "}
//         </Text>
//         <Text style={{ fontSize: 20, fontWeight: "bold" }}> {total} </Text>
//       </View>

//       <Pressable
//         onPress={() => navigation.navigate("Confirm")}
//         style={{
//           backgroundColor: "#f07b07",
//           padding: 10,
//           borderRadius: 5,
//           justifyContent: "center",
//           alignItems: "center",
//           marginHorizontal: 10,
//           marginTop: 10,
//         }}
//       >
//         <Text style={{color:"white", fontWeight:"bold"}}>CHECKOUT (GH₵ {total})</Text>
//       </Pressable>

//       <Text
//         style={{
//           height: 1,
          
//           borderColor: "#D0D0D0",
//           borderWidth: 1,
//           marginTop: 16,
//         }}
//       />

//       <View style={{ marginHorizontal: 10 }}>
//         {cart?.map((item, index) => (
//           <View
//             style={{
//               backgroundColor: "white",
//               marginVertical: 10,
//               borderBottomColor: "#F0F0F0",
//               borderWidth: 2,
//               borderLeftWidth: 0,
//               borderTopWidth: 0,
//               borderRightWidth: 0,
//             }}
//             key={index}
//           >
//             <Pressable
//               style={{
//                 marginVertical: 10,
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//               }}
//             >
//               <View>
//                 <Image
//                   style={{ width: 140, height: 140, resizeMode: "contain" }}
//                   source={{ uri: item?.image }}
//                 />
//               </View>

//               <View>
//                 <Text numberOfLines={3} style={{ width: 150, marginTop: 10 }}>
//                   {item?.title}
//                 </Text>
//                 <Text
//                   style={{ fontSize: 20, fontWeight: "bold", marginTop: 6 }}
//                 >
//                   GH₵{product?.price}
//                 </Text>
//                 <Text>In Stock</Text>
//               </View>
//             </Pressable>

//             <Pressable
//               style={{
//                 marginTop: 10,
//                 marginBottom: 10,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 10,
//               }}
//             >
//               <View
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   paddingHorizontal: 10,
//                   paddingVertical: 5,
//                   borderRadius: 7,
//                 }}
//               >
//                 <Pressable
//                   onPress={() => decreaseQuantity(item)}
//                   style={{
//                     backgroundColor: "#D8D8D8",
//                     padding: 7,
//                     borderTopLeftRadius: 6,
//                     borderBottomLeftRadius: 6,
//                   }}
//                 >
//                   <AntDesign name="minus" size={24} color="black" />
//                 </Pressable>

//                 <Pressable
//                   style={{
//                     backgroundColor: "white",
//                     paddingHorizontal: 18,
//                     paddingVertical: 6,
//                   }}
//                 >
//                   <Text>{item?.quantity}</Text>
//                 </Pressable>

//                 <Pressable
//                   onPress={() => increaseQuantity(item)}
//                   style={{
//                     backgroundColor: "#D8D8D8",
//                     padding: 7,
//                     borderTopLeftRadius: 6,
//                     borderBottomLeftRadius: 6,
//                   }}
//                 >
//                   <AntDesign name="plus" size={24} color="black" />
//                 </Pressable>
//               </View>

//               <Pressable
//                 onPress={() => deleteItem(item)}
//                 style={{
//                   backgroundColor: "white",
//                   paddingHorizontal: 8,
//                   paddingVertical: 10,
//                   borderColor: "#C0C0C0",
//                   borderWidth: 0.6,
//                 }}
//               >
//                 <Text>Remove</Text>
//               </Pressable>
//             </Pressable>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
    
//   );
// };

// export default CartScreen;

// const styles = StyleSheet.create({});
