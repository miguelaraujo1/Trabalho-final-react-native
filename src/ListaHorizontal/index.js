import React from "react";
import { Dimensions, FlatList } from "react-native";
import { View, Image, Text } from "react-native";
import { ImageBackground } from "react-native";
import { styles } from "./styles";

const ListaHorizontal = ({ dados }) => {
  return (
    <View style={{}}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        horizontal
        snapToAlignment={"start"}
        scrollEventThrottle={16}
        decelerationRate="fast"
        // snapToOffsets={[1]}
        renderItem={({ item }) => (
          <View style={styles.flatList}>
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
              Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi
              eu sit. Vide electram sadipscing et per. Per aumento de cachacis,
              eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola
              pa arma uma pindureta.
            </Text>
          </View>
        )}
      />
    </View>
  );
};
export default ListaHorizontal;
