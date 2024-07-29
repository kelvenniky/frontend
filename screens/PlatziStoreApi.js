import React, { useState, useEffect } from 'react';
import { View,Pressable,Text,TextInput, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import ProductCard from '../components/ProductCard';
import productData from '../data/products.json';
import { AntDesign } from "@expo/vector-icons";




// const API = "https://api.escuelajs.co/api/v1/products"





const PlatziStoreApi = ({ navigation }) => {
  //  const [searchQuery, setSearchQuery] =useState("")
  //  const [isLoading, setIsLoading] =useState(false)
  //  const [data, setData] =useState([])
  //  const [error, setError] =useState(null)
  //  const [fullData, setfullData] =useState([])

  //  useEffect(()=>{

  //   setIsLoading(true);
  //   fetchData(API);

  //  },[])
   


  //  const fetchData = async(url)=>{
  //   try{
  //     const response =  await fetch(url);
  //     const json = response.json();
  //     setData(json.results);

  //     console.log(json.results);

  //   setIsLoading(false)
  //   }catch(error){
  //     setError(error);
  //   }
  //     console.log(error)
  //     setIsLoading(false)
  //  }



  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  // const handleSearch =(query)=>{
  //   setSearchQuery(query);

  // }
  // if (isLoading) {
  //   return(
  //     <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
  //     <ActivityIndicator size={"large"} color="#5500dc"/>
  //     </View>
  //   )
  // }



  

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch('https://api.escuelajs.co/api/v1/products');
  //     const data = await response.json();
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  const handleProductPress = (product) => {
    navigation.navigate('Info2', { product });
  };

  return (
    <View>
       <View
            style={{
              backgroundColor: "#262624",
              padding: 10,
              marginTop:40,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginleft: 10,
                width:350,
                gap: 10,
                backgroundColor: "white",
                borderRadius: 3,
                height: 38,

                // flex: 1,
              }}
            >
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="search1"
                size={22}
                color="black"
              />
              <TextInput placeholder="Search " />

              <AntDesign
                style={{ marginLeft: 200, marginRight: 10 }}
                onPress={() => navigation.navigate("Camera")}
                name="camera"
                size={24}
                color="black"
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Cart")}>
              <AntDesign
                name="shoppingcart"
                size={24}
                color="white"
                style={{ marginLeft: 20 }}
              />
            </Pressable>
          </View>
       {/* <View style={{height:90, width:1000,backgroundColor:"black"}}>
          <Text style={{color:"white", marginLeft:180,marginTop:60,fontSize:18, fontWeight:"bold"}}>Shop</Text>
      </View> */}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20, 
    paddingVertical: 10,
  },
});

export default PlatziStoreApi;