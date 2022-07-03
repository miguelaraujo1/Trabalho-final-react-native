import React from "react";
import { Dimensions, FlatList } from "react-native";
import { View, Image } from "react-native";
import bgImg from "../images/will.jfif";

const { width } = Dimensions.get("window");
const ListaHorizontal = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item)}
      horizontal
      renderItem={(item) => (
        <View>
        <View
          style={{
            backgroundColor: "green",
            width: width * 0.8,
            height: 600,
            marginHorizontal: 10,
            borderRadius: 12,
          }}
        >
          <Image
            style={{ width: 50, height: 60 }}
            source={{ uri: bgImg }}
          ></Image>
        </View>
        </View>
      )}
    />
  );
};
export default ListaHorizontal;
