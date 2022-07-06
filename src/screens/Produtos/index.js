import React, { useEffect, useState } from "react"
import { ImageBackground, Text, FlatList, View, TouchableOpacity} from "react-native"
import { Button, Avatar, Card, IconButton } from 'react-native-paper';
import { getCategorias, getProdutos, getProdutosByCategoria } from "../../services/axiosClient"
import ExibirProduto from "./ExibirProduto";
import { styles } from "./styles"
import { ButtonStyle3 } from "../../components/ButtonStyle/ButtonStyle"

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

const ListarProdutos = ({navigation}) => {
    const [listaProdutos, setListaProdutos] = useState(null)
    const [categorias, setCategorias] = useState(null)
    
    const listarProdutos = async () => {
        const produtos = await getProdutos()
        setListaProdutos(produtos)
    }

    const listarProdutosPorCategoria = async(id) => {
        const produtos = await getProdutosByCategoria(id)
        setListaProdutos(produtos)
    }

    const listarCategorias = async () => {
        const categorias = await getCategorias()
        setCategorias(categorias)
    }

    const exibirProduto = (idProduto) => {
        navigation.navigate("ExibirProduto", {idProduto: idProduto})
    }

    useEffect(()=> {
        if(listaProdutos === null) {
            listarProdutos()
        }
        listarCategorias()
    },[])

    useEffect(()=>{
        // console.log(listaProdutos)
    },[listaProdutos])

    useEffect(()=>{console.log(categorias)},[categorias])

    // const renderItem = ({ item }) => (
    //     <Item title={item.nomeProduto} />
    // );

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.categorias}>
            {/* {categorias && categorias.map(categoria => <Button mode="contained" key={categoria.id}  onPress={()=>listarProdutosPorCategoria(categoria.id)}>{categoria.categoria}</Button>)} */}
            {categorias && categorias.map(categoria => <ButtonStyle3 labelButton={categoria.categoria} key={categoria.id} onpress={()=>listarProdutosPorCategoria(categoria.id)}/>)}

            {/* <Button mode="contained" onPress={()=>listarProdutos()}>TODAS AS CATEGORIAS</Button> */}
            <ButtonStyle3 labelButton="Todas as categorias" onpress={()=>listarProdutos()}/>


            </View>
            {listaProdutos && <FlatList showsVerticalScrollIndicator={false} style={{width:300}} data={listaProdutos} renderItem={({ item })=> (
                <TouchableOpacity onPress={()=>exibirProduto(item.idProduto)}>

                <Card.Title 
                    style={{borderColor:"white", borderWidth:3, borderRadius:12, margin:1.5, backgroundColor:"#e03404", shadowColor:"black", shadowRadius:5.5, shadowOpacity:10}}
                    title={item.nomeProduto}
                    subtitle={`Qtd: ${item.quantidadeEstoque}`}
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}    
                    />
                </TouchableOpacity>   
            )} keyExtractor={item => item.idProduto}/>}
        </ImageBackground>
    )
}

export default ListarProdutos