import React, { useContext, useEffect, useState } from "react";
import { KeyboardAvoidingView, View, Platform, Alert } from "react-native";
import { getCategorias } from "../../../services/axiosClient";
import { Picker } from "@react-native-picker/picker";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
} from "react-native-paper";
import styles from "./styles";
import { ButtonStyle5, ButtonConfirmar, ButtonCancelar } from "../../../components/ButtonStyle/ButtonStyle";
import { getProdutoById, putProdutoById } from "../../../services/axiosClient";
import { ScrollView } from "react-native-gesture-handler";

const ExibirProduto = ({ route }) => {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [listaCategorias, setListaCategorias] = useState(null);

  const [novoNome, setNovoNome] = useState();
  const [novaCategoria, setNovaCategoria] = useState();
  const [novoValor, setNovoValor] = useState();
  const [novaQtd, setNovaQtd] = useState();

  const listarCategorias = async () => {
    const categorias = await getCategorias();
    setListaCategorias(categorias);
  };

  const buscarProduto = async (idProduto) => {
    const data = await getProdutoById(idProduto);

    setProduto(data);
  };
  useEffect(() => {
    buscarProduto(idProduto);
  }, []);

  useEffect(() => {
    if (isEditing) listarCategorias();
  }, [isEditing]);

  const atualizarProduto = async () => {
    if (!novaCategoria || !novoNome || !novaQtd || !novoValor) {
      alert("Ha campos a serem preenchidos");
      return;
    }
    const atualizacao = await putProdutoById(
      idProduto,
      novaCategoria,
      novoNome,
      novaQtd,
      novoValor
    );

    !!atualizacao && alert("Produto atualizado!");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ff3d00" }}>
      {produto && (
        <ScrollView
          style={{ margin: "5%", borderRadius: 15, paddingBottom: "5%" }}
        >
          <Card>
            {!isEditing && <Card.Title title={produto.nomeProduto} />}
            {isEditing && (
              <TextInput
                style={styles.input}
                onChangeText={(input) => setNovoNome(input)}
                placeholder="Insira um novo nome do produto"
              />
            )}
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />

            {!isEditing && (
              <Card.Content>
                <Paragraph>Categoria</Paragraph>
                <Title>{produto.categoria.categoria}</Title>
              </Card.Content>
            )}
            {isEditing && (
              <Picker
              style={{height:40, fontSize:18}}
                selectedValue={novaCategoria}
                onValueChange={(value) => setNovaCategoria(value)}
              >
                {listaCategorias &&
                  listaCategorias.map((categoria, index) => (
                    <Picker.Item
                      key={index}
                      label={categoria.categoria}
                      value={categoria.id}
                    />
                  ))}
              </Picker>
            )}
            {!isEditing && (
              <Card.Content>
                <Paragraph>Valor unitario</Paragraph>
                <Title>{produto.valorUnitario}</Title>
              </Card.Content>
            )}
            {isEditing && (
              <TextInput
                style={styles.input}
                onChangeText={(input) => setNovoValor(Number(input))}
                placeholder="Insira o valor unitario"
              ></TextInput>
            )}
            {!isEditing && (
              <Card.Content>
                <Paragraph>Quantidade em estoque</Paragraph>
                <Title>{produto.quantidadeEstoque}</Title>
              </Card.Content>
            )}
            {isEditing && (
              <TextInput
                style={styles.input}
                onChangeText={(input) => setNovaQtd(Number(input))}
                placeholder="Insira a quantidade para estoque"
              ></TextInput>
            )}
            {/* <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions> */}
          </Card>



          {!isEditing && (
            <ButtonStyle5
              onpress={() => setIsEditing(!isEditing)}
              labelButton="EDITAR"

            />
           
          )}



          {isEditing && (
            <View style={{ flexDirection: "row" }}>
              <ButtonConfirmar
              labelButton="Confirmar"
                onpress={() => {
                  atualizarProduto();
                }}
              />
              <ButtonCancelar
                labelButton="Cancelar"
                onpress={() => {
                  setIsEditing(false);
                }}
              />
   
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default ExibirProduto;
