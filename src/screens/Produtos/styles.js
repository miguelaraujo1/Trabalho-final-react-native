import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        marginTop: 30,
        backgroundColor:'#ff3d00'
   
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },

    categorias: {
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "3%",
        width:"90%",
        height:"20%"
    }
})