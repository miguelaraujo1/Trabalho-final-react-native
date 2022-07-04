import React from "react";
import { SafeAreaView } from "react-native";
import ListaHorizontal from "../../ListaHorizontal/";

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
      texto: "Natural de Teresópolis, Responsável pelo desenvolvimento da página sobre os integrantes."
    },
    {
      name: "Danilo",
      foto: danilo,
      id: "2",
      texto: "Natural de Nova Friburgo, Responsável pelo desenvolvimento da página sobre os integrantes."
    },
    {
      name: "Cynthia",
      foto: cynthia,
      id: "4",
      texto: "Natural de Nova Friburgo, Responsável pelo desenvolvimento da página sobre os integrantes."
    },
    {
      name: "Vinicius",
      foto: vinicius,
      id: "5",
      texto: "Natural de Nova Friburgo, Responsável pelo desenvolvimento da página sobre os integrantes."
    },
    {
        name:'Eduardo',
        foto: eduardo,
        id:"6",
        texto: "Natural de Nova Friburgo, Responsável pelo desenvolvimento da página sobre os integrantes."
    },
    {
      name:'Paulo Vitor',
      foto: pv,
      id:"7",
      texto: "Natural de Nova Friburgo, Responsável pelo desenvolvimento da página sobre os integrantes."
  },
  ];
  return (
    <SafeAreaView style={{backgroundColor: '#ff7539', marginTop:'14%'}}>
      <ListaHorizontal dados={dados} />
    </SafeAreaView>
  );
};

