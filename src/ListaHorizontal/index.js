import React from "react";
import { Dimensions, FlatList } from "react-native";
import { View, Image, Text } from "react-native";
import { ImageBackground } from "react-native";
import {styles} from "./styles"


const ListaHorizontal = ({ dados }) => {
  return (
    <View style={{}}>
    <FlatList
      data={dados}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => 
      
      <View style={styles.flatList}>

             <ImageBackground style={styles.fotos} source={item.foto}><View style={{width:50,height:50}}></View></ImageBackground>
             <Text style={{height:100 ,alignItems:"center",justifyContent:"center",fontSize:50, fontWeight:"bold"}}>{item.name}</Text>
             
        </View>
       
        
      }
    />
    </View>
  );
};
export default ListaHorizontal;
