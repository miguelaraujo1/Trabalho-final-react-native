import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
    flatList:{
        width: width * 0.8,
        height: 600,
        marginHorizontal: 10,
        // borderRadius: 12,
        flex:1,
        marginTop:40,
        alignItems:"center",
        backgroundColor:"grey"
    },
    fotos:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: '#add8e6',
        marginTop:'16%',

    }
}
)