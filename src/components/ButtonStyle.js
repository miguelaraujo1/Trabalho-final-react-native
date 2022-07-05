import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export const ButtonStyle = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
        <Text style={styles.text}>{labelButton}</Text>
    </TouchableOpacity>
  )
}

export const ButtonStyle1 = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.button1} onPress={onpress}>
        <Text style={styles.text1}>{labelButton}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
   // backgroundColor: "#ffffff",
  // backgroundColor: "#ff3d00",
  backgroundColor: "#e03404",
    width: '24%',
    height: '20%',
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6, 
    borderColor: "#ffffff",
    borderWidth: 2.8,
  },
  button1: {
    //backgroundColor: "#ffffff",
    backgroundColor: "#e03404",
    width: '30%',
    height: '14%',
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: "#ffffff", 
    borderWidth: 2.8,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    //color: "#ff3d00",
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  text1: {
    justifyContent: 'center',
    alignItems: 'center',
    //color: "#ff3d00",
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
})