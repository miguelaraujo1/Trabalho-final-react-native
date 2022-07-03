import React, { useEffect, useState } from "react"
import { ImageBackground, Text, FlatList, View} from "react-native"
import { Button} from 'react-native-paper';
import { getCategorias, getProdutos, getProdutosByCategoria } from "../../services/axiosClient"
import { styles } from "./styles"

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

const Home = () => {
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
            </View>
            {listaProdutos && <FlatList data={listaProdutos} renderItem={({ item })=> (
                <Text style={styles.item}>{item.nomeProduto}</Text>
            )} keyExtractor={item => item.idProduto}/>}
        </ImageBackground>
    )
}

export default Home