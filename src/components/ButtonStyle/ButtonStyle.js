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
//4
export const ButtonLogout = ({ onpress }) => {
  return (
    <TouchableOpacity style={styles.button4} onPress={onpress}>
      <Text></Text>
    </TouchableOpacity>
  );
};
export const ButtonStyle5 = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.button5} onPress={onpress}>
      <Text style={styles.text}>{labelButton}</Text>
    </TouchableOpacity>
  );
};
export const ButtonConfirmar = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.button6} onPress={onpress}>
      <Text style={styles.text}>{labelButton}</Text>
    </TouchableOpacity>
  );
};
export const ButtonCancelar = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.button7} onPress={onpress}>
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
    shadowColor: "#821d01",
    shadowRadius: 9,
    shadowOpacity: 99,
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
    shadowColor: "#821d01",
    shadowRadius: 9,
    shadowOpacity: 99,
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
    shadowColor: "#821d01",
    shadowRadius: 9,
    shadowOpacity: 99,
  },
  button4: {
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
    shadowColor: "#821d01",
    shadowRadius: 9,
    shadowOpacity: 99,
  },
  button5: {
    //backgroundColor: "#ffffff",
    backgroundColor: "#e03404",
    width: "30%",
    height: "8%",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderColor: "#ffffff",
    borderWidth: 2.8,
    shadowColor: "#821d01",
    shadowRadius: 9,
    shadowOpacity: 99,
  },
  button6: {
    //backgroundColor: "#ffffff",
    backgroundColor: "green",
    width: "40%",
    height: 40,
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderColor: "#ffffff",
    borderWidth: 2.8,
    shadowColor: "#821d01",
    shadowRadius: 9,
    shadowOpacity: 99,
    marginTop:35
  },
  button7: {
    //backgroundColor: "#ffffff",
    backgroundColor: "red",
    width: "40%",
    height: 40,
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderColor: "#ffffff",
    borderWidth: 2.8,
    shadowColor: "#821d01",
    shadowRadius: 9,
    shadowOpacity: 99,
    marginTop:35
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
