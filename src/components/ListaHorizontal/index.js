import React from "react";
import { Dimensions, FlatList } from "react-native";
import { View, Text } from "react-native";
import { ImageBackground } from "react-native";
import { styles } from "./styles";

const { width } = Dimensions.get("window");

const ListaHorizontal = ({ dados }) => {
  return (
    <View style={{}}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        snapToOffsets={[...Array(dados.length)].map(
          (x, i) => i * (width * 0.8 - 40) + (i - 1) * 40,
        )}
        horizontal
        snapToAlignment={"start"}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate="fast"
        style={{ marginTop: 20}}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{

              width: width * 0.8 - 20,
              height: 600,
              marginHorizontal: 10,
              borderRadius: 12,
              alignItems: "center",
              backgroundColor: "#ff3d00",
              marginBottom:'7%',
              marginTop:'11%'
              
            }}
          >
            <ImageBackground style={styles.fotos} source={item.foto}>
              <View></View>
            </ImageBackground>
            <Text
              style={{
                height: 100,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 50,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
            <Text style={{ marginTop: "15%", padding: "5%" }}>
              {" "}
              {item.texto}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
export default ListaHorizontal;