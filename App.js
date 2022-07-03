import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QuemSomos from './src/screens/QuemSomos';
import {Routes} from './src/Routes/index.js';

export default function App() {
  return (
    <>
        <Routes/>
        {/* <QuemSomos/> */}
    </>
  );
}