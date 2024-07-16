import { StyleSheet,Pressable,TextInput,Image, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";


const FaqScreen = () => {
  return (
   
        <View>
        <View style={{backgroundColor:"white", height:155,}}>
            <View>
            <Image style={{height:60, width:60}}/>
            </View>
        <View style={{  flexDirection:"row", marginLeft:20, justifyContent:"flex-end", marginTop:110}}>

        <AntDesign name="search1" size={22} color="black" marginRight={20}/>
       <Ionicons  marginRight={20} name="person-outline" size={24} color="black" />
       <AntDesign   marginRight={20} name="shoppingcart" size={24} color="black" />
           
        </View>
        </View>
        <ScrollView>
        <View style={{backgroundColor:"#f2c64b", height:150, paddingLeft:10, paddingTop:10, }}>
            <Text style={{fontWeight:"600", paddingTop:10}}>Help Center</Text>
            <Text style={{fontWeight:"600", paddingTop:10}}>Hi, how can we help you?</Text>
            <Text style={{fontWeight:"600", paddingTop:10}}>You can try to find your problem here or contact us</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginleft: 10,
                gap: 10,
                marginRight:30,
                marginTop:10,
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
                color="grey"
              />
              <TextInput placeholder="Type keywords like return " />

              
            </Pressable>

        </View>
        <View style={{backgroundColor:"#3e4042", marginTop:440, height:50, padding:10, flexDirection:"row",  justifyContent:"space-between", gap:10}}>
            <Text style={{color:"white", fontSize:13 }}>CHAT WITH US</Text>
            <Text style={{color:"white", fontSize:13}}>HELP CENTER</Text>
            <Text style={{color:"white", fontSize:13}}>TERMS & CONDITIONS</Text>


        </View>
        <View style={{backgroundColor:"grey", height:70,  gap:10}}>
            <Text style={{color:"black", marginTop:10, fontSize:13}}>This website uses cookies. For further information on how we use </Text>
            <View style={{flexDirection:"row", }}>
            <Text style={{color:"black", fontSize:13, marginBottom:3}}> cookies you can read our</Text>
            <Text style={{color:"blue",  marginLeft:3,fontSize:13}}>Privacy and Cookie notice</Text>
            </View>
            
        </View>
        
        </ScrollView>      
    </View>

  
    
  )
}

export default FaqScreen

const styles = StyleSheet.create({})