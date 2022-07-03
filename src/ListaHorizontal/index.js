import React from "react";
import { Dimensions, FlatList } from "react-native";
import { View, Image, Text } from "react-native";
import { ImageBackground } from "react-native";
import bgImg from "../images/will.jfif";

const { width } = Dimensions.get("window");
const ListaHorizontal = ({ dados }) => {
  return (
    <FlatList
      data={dados}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => 
      
      <View 
          style={{
            // backgroundColor: item.cor,
            width: width * 0.8,
            height: 600,
            marginHorizontal: 10,
            borderRadius: 12,
            flex:1
          }}
        >
             <Text style={{alignItems:"center",justifyContent:"center",fontSize:50, fontWeight:"bold"}}>{item.name}</Text>
             <ImageBackground style={{width:'100%', height:'100%'}} source={item.foto}><View style={{width:100,height:100,flex:0.6}}></View></ImageBackground>
             
        </View>
       
        
      }
    />
  );
};
export default ListaHorizontal;
