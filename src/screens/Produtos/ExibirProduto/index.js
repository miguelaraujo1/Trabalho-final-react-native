import React, { useContext, useEffect, useState} from "react"
import { KeyboardAvoidingView, View, Platform, Alert } from "react-native"
import { getCategorias } from "../../../services/axiosClient";
import { Picker } from "@react-native-picker/picker";
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import styles from "./styles";


import { getProdutoById, putProdutoById } from "../../../services/axiosClient"
import { ScrollView } from "react-native-gesture-handler";

const ExibirProduto = ({route}) => {
    const {idProduto} = route.params
    const [produto, setProduto] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const [listaCategorias, setListaCategorias] = useState(null)

    const [novoNome, setNovoNome] = useState()
    const [novaCategoria, setNovaCategoria] = useState()
    const [novoValor, setNovoValor] = useState()
    const [novaQtd, setNovaQtd] = useState()

    const listarCategorias = async () => {
      const categorias = await getCategorias()
      setListaCategorias(categorias)
  }
    
    const buscarProduto = async(idProduto) => {
            const data = await getProdutoById(idProduto)

            setProduto(data) 
    }
    useEffect(()=>{  
        buscarProduto(idProduto)
    },[])

    useEffect(()=>{
      if(isEditing) listarCategorias()
    },[isEditing])

    const atualizarProduto = async() =>{
      if(!novaCategoria || !novoNome || !novaQtd || !novoValor) {
        alert('Ha campos a serem preenchidos')
        return
      }
      const atualizacao = await putProdutoById(idProduto, novaCategoria, novoNome, novaQtd, novoValor)

      !!atualizacao && alert('Produto atualizado!')

    }


    
    return(
      <View>
      {
        produto 
          
          &&

      <ScrollView>
      

        <Card>
          {!isEditing && <Card.Title title={produto.nomeProduto} />}
          {isEditing && <TextInput style={styles.input} onChangeText={(input)=> setNovoNome(input)} placeholder="Insira um novo nome do produto"/>}
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          

          {!isEditing && <Card.Content>
            <Paragraph>Categoria</Paragraph>
            <Title>{produto.categoria.categoria}</Title>
          </Card.Content>}
          {isEditing && <Picker selectedValue = {novaCategoria} onValueChange = {(value) => setNovaCategoria(value)}>
            {listaCategorias && listaCategorias.map((categoria, index) => <Picker.Item key={index} label={categoria.categoria} value={categoria.id} />)}     
        </Picker>}
          {!isEditing && <Card.Content>
            <Paragraph>Valor unitario</Paragraph>
            <Title>{produto.valorUnitario}</Title>
          </Card.Content>}
          {isEditing && <TextInput style={styles.input} onChangeText={(input)=> setNovoValor(Number(input))} placeholder="Insira o valor unitario"></TextInput>}
          {!isEditing && <Card.Content>
            <Paragraph>Quantidade em estoque</Paragraph>
            <Title>{produto.quantidadeEstoque}</Title>
          </Card.Content>}
          {isEditing && <TextInput style={styles.input} onChangeText={(input)=> setNovaQtd(Number(input))} placeholder="Insira a quantidade para estoque"></TextInput>}
          {/* <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions> */}
          
        </Card> 
          {!isEditing && <Button onPress={()=>setIsEditing(!isEditing)} style={styles.action} color="orange" mode="contained">EDITAR</Button>}
          
          {isEditing && <View style={{flexDirection:"row"}}><Button color="green" mode="contained" style={[styles.action, {width: 125}]} onPress={()=>{atualizarProduto()}}>Confirmar</Button>
          <Button color="red" mode="contained" style={[styles.action, {width: 115}]} onPress={()=>{setIsEditing(false)}}>Cancelar</Button></View>}
          
        </ScrollView>
        }
        
      </View>

  )
}

export default ExibirProduto