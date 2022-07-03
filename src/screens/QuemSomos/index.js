import React from "react";
import { SafeAreaView } from "react-native";
import { View, Image } from "react-native";
import ListaHorizontal from "../../ListaHorizontal";

// const will = require("../../images/will.jfif");
const miguel = require("../../images/miguel.jpeg");
const danilo = require("../../images/Danilo.jpeg");
const eduardo = require("../../images/eduardo.jpg");
const vinicius = require("../../images/vinicius.jpg");
const cynthia = require("../../images/cynthia.jpg");
const pv = require("../../images/pv.jpeg")

export const QuemSomos = () => {
  const dados = [
    {
      name: "Miguel",
      foto: miguel,
      id: "1",
    },
    {
      name: "Danilo",
      foto: danilo,
      id: "2",
    },
    {
      name: "Cynthia",
      foto: cynthia,
      id: "4",
    },
    {
      name: "Vinicius",
      foto: vinicius,
      id: "5",
    },
    {
        name:'Eduardo',
        foto: eduardo,
        id:"6"
    },
    {
      name:'Paulo Vitor',
      foto: pv,
      id:"7"
  },
  ];
  return (
    <SafeAreaView>
      <ListaHorizontal dados={dados} />
    </SafeAreaView>
  );
};
