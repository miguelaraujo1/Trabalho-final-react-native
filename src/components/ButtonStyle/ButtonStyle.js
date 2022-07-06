import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export const ButtonStyle = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <Text style={styles.text}>{labelButton}</Text>
    </TouchableOpacity>
  );
};

export const ButtonStyle1 = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.button1} onPress={onpress}>
      <Text style={styles.text1}>{labelButton}</Text>
    </TouchableOpacity>
  );
};

export const ButtonStyle2 = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.button2} onPress={onpress}>
      <Text style={styles.text}>{labelButton}</Text>
    </TouchableOpacity>
  );
};
export const ButtonStyle3 = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.button3} onPress={onpress}>
      <Text style={styles.text}>{labelButton}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    // backgroundColor: "#ffffff",
    // backgroundColor: "#ff3d00",
    backgroundColor: "#e03404",
    width: "24%",
    height: "20%",
    margin: 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderColor: "#ffffff",
    borderWidth: 2.8,
  },
  button1: {
    //backgroundColor: "#ffffff",
    backgroundColor: "#e03404",
    width: "30%",
    height: "14%",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderColor: "#ffffff",
    borderWidth: 2.8,
  },
  button2: {
    // backgroundColor: "#ffffff",
    // backgroundColor: "#ff3d00",
    backgroundColor: "#e03404",
    width: "18%",
    height: "6%",
    margin: 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderColor: "#ffffff",
    borderWidth: 2.8,
  },

   button3: {
    // backgroundColor: "#ffffff",
    // backgroundColor: "#ff3d00",
    backgroundColor: "#e03404",
    width: "45%",
    height: "30%",
    margin: 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderColor: "#ffffff",
    borderWidth: 2.8,
    shadowOffset:30
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    //color: "#ff3d00",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  text1: {
    justifyContent: "center",
    alignItems: "center",
    //color: "#ff3d00",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
  },
});