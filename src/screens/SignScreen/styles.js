import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    backgroundColor: "#ff3d00",
  },
  image: {
    width: "40%",
    height: "20%",
    marginTop:'14%'
  },
  marca: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: "12%",
  },
  viewStyle: {
    flex: 1,
    width: "100%",
    height: "30%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appText: {
    //color: "#550AB1",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
  },
  input: {
    borderRadius: 8,
    //borderColor: "#1D013F",
    borderColor: "#ffffff",
    paddingHorizontal: "5%",
    //color: "#000",
    color: "#ffffff",
    borderWidth: 1.6,
    width: "90%",
    height: "8%",
    margin: "1.5%",
  },
});
