import React, { useEffect, useState } from "react"
import { ImageBackground, Text, FlatList} from "react-native"
import { getProdutos } from "../../services/axiosClient"
import { styles } from "./styles"

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

const Home = () => {
    const [listaProdutos, setListaProdutos] = useState(null)
    
    const listarProdutos = async () => {
        const produtos = await getProdutos()
        setListaProdutos(produtos)
    }

    useEffect(()=> {
        listarProdutos()
    },[])

    useEffect(()=>{
        console.log(listaProdutos)
    },[listaProdutos])

    // const renderItem = ({ item }) => (
    //     <Item title={item.nomeProduto} />
    // );

    return (
        <ImageBackground style={styles.container}>
            <Text>BikeLovers!</Text>
            {listaProdutos && <FlatList data={listaProdutos} renderItem={({ item })=> (
                <Text style={styles.item}>{item.nomeProduto}</Text>
            )} keyExtractor={item => item.idProduto}/>}
        </ImageBackground>
    )
}

export default Home