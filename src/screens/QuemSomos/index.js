import React from "react";
import { SafeAreaView } from "react-native";
import { View, Image } from "react-native";
import bgImg from "../../images/will.jfif"
import ListaHorizontal from "../../ListaHorizontal";

const QuemSomos = () => {
  const data = [
    '#FF6633',
    '#FFB399',
    '#FF6667',
    '#FF6111',
    '#FF6444',
    
  ];
  return(
    <SafeAreaView>
        <ListaHorizontal data={data}/>
    </SafeAreaView>
  )
};
 export default QuemSomos;