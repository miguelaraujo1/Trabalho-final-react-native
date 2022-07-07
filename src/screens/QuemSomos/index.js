import React from "react";
import { SafeAreaView } from "react-native";
import ListaHorizontal from "../../components/ListaHorizontal";

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
      texto: "Natural de Teresópolis, 20 anos de idade. CEO da empresa."
    },
    {
      name: "Danilo",
      foto: danilo,
      id: "2",
      texto: "Natural de Nova Friburgo, 19 anos de idade. Diretor financeiro."
    },
    {
      name: "Cynthia",
      foto: cynthia,
      id: "4",
      texto: "Natural de Nova Friburgo, 31 anos de idade. Diretora de marketing"
    },
    {
      name: "Vinicius",
      foto: vinicius,
      id: "5",
      texto: "Natural de Nova Friburgo, 34 anos de idade. CTO da empresa"
    },
    {
        name:'Eduardo',
        foto: eduardo,
        id:"6",
        texto: "Natural de Nova Friburgo, 21 anos de idade. Diretor de recursos humanos"
    },
    {
      name:'Paulo Vitor',
      foto: pv,
      id:"7",
      texto: "Natural de Nova Friburgo, 26 anos de idade. Diretor geral de franquia"
  },
  ];
  return (
    <SafeAreaView style={{backgroundColor: '#ff7539', height:"100%"}}>
      <ListaHorizontal dados={dados}/>
    </SafeAreaView>
  );
};

