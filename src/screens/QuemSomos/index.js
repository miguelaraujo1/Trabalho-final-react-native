import React from "react";
import { SafeAreaView } from "react-native";
import { View, Image } from "react-native";
import bgImg from "../../images/will.jfif";
import ListaHorizontal from "../../ListaHorizontal";

const will = require("../../images/will.jfif");
const miguel = require("../../images/miguel.jpeg");
const danilo = require("../../images/Danilo.jpeg");
const eduardo = require("../../images/eduardo.jpg");
const vinicius = require("../../images/vinicius.jpg");
const cynthia = require("../../images/cynthia.jpg");

const QuemSomos = () => {
  const dados = [
    {
      cor: "#F12",
      name: "Miguel",
      foto: miguel,
      id: "1",
    },
    {
      cor: "#F20",
      name: "Danilo",
      foto: danilo,
      id: "2",
    },
    {
      cor: "#F20",
      name: "Pv",
      foto: will,
      id: "3",
    },
    {
      cor: "#F20",
      name: "Cynthia",
      foto: cynthia,
      id: "4",
    },
    {
      cor: "#F20",
      name: "Vinicius",
      foto: vinicius,
      id: "5",
    },
    {
        cor:'#F20',
        name:'Eduardo',
        foto: eduardo,
        id:"6"
    },
  ];
  return (
    <SafeAreaView>
      <ListaHorizontal dados={dados} />
    </SafeAreaView>
  );
};
export default QuemSomos;
