import React, { useEffect, useState } from "react"
import { ImageBackground, Text, FlatList, View} from "react-native"
import { Button, Avatar, Card, IconButton } from 'react-native-paper';
import { getCategorias, getProdutos, getProdutosByCategoria } from "../../services/axiosClient"
import { styles } from "./styles"

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
            <Text>BikeLovers!</Text>
            <View style={styles.categorias}>
            {categorias && categorias.map(categoria => <Button mode="contained" key={categoria.id}  onPress={()=>listarProdutosPorCategoria(categoria.id)}>{categoria.categoria}</Button>)}
            <Button mode="contained" onPress={()=>listarProdutos()}>TODAS</Button>
            </View>
            {listaProdutos && <FlatList style={{width:300}} data={listaProdutos} renderItem={({ item })=> (   
                <Card.Title 
                    title={item.nomeProduto}
                    subtitle={`Qtd: ${item.quantidadeEstoque}`}
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    
                />
            )} keyExtractor={item => item.idProduto}/>}
        </ImageBackground>
    )
}

export default ListarProdutos