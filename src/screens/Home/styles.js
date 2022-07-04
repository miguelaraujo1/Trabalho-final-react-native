import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        marginTop: 30
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginRight: 10,
        marginLeft: 5 
    }
})