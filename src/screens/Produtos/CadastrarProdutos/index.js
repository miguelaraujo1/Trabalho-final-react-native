import React, { useEffect, useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import { getCategorias, postProduto, getProdutos } from "../../../services/axiosClient";
import SelectPicker from 'react-native-form-select-picker';
import { Text, View} from 'react-native'
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../styles";
const CadastrarProdutos = ({CadastrarProdutos}) => {
    const [categoria, setCategoria] = useState();
    const [listaCategorias, setListaCategorias] = useState(null)
    const [nomeProduto, setNomeProduto] = useState()
    const [quantidade, setQuantidade] = useState()
    const [valorUnitario, setValorUnitario] = useState()
    const [warning, setWarning] = useState()

    const listarCategorias = async () => {
        const categorias = await getCategorias()
        setListaCategorias(categorias)
    }

    useEffect(()=>{
        listarCategorias()
    },[])

    useEffect(()=>{
        console.log(typeof categoria)
    },[categoria])

    const inserirProduto = async() => {
        console.log(typeof categoria.id, typeof nomeProduto, typeof quantidade, typeof valorUnitario)
        if (!!categoria && !!nomeProduto && quantidade && valorUnitario){
            const post = await postProduto(categoria.id ,nomeProduto, quantidade, valorUnitario)
            console.log(post)
        } else {
            setWarning('Campo(s) nao preenchidos')
        }

    }

    


	return (
		//...
        <>
        <View  style={{alignItems:'center', marginTop: 20}}>
            <Text >Escolha a categoria</Text>
        </View>
        <Picker selectedValue = {categoria} onValueChange = {(value) => setCategoria(value)}>
            {listaCategorias && listaCategorias.map((categoria, index) => <Picker.Item key={index} label={categoria.categoria} value={categoria} />)}     
        </Picker>
        <View style={styles.field}>
            <Text>Insira o nome do produto:</Text>
            <TextInput style={styles.input} mode='outlined' value={nomeProduto} onChangeText={(text) => setNomeProduto(text)} />
        </View>
        <View style={[styles.field, {marginTop: 10}]}>
            <Text>Insira a quantidade para estoque</Text>
            <TextInput style={styles.input} mode='outlined' value={quantidade} onChangeText={(text) => setQuantidade(text)} />
        </View>
        <View style={[styles.field, {marginTop: 10, marginBottom: 15}]}>
            <Text>Insira o Valor unitario - R$0,00</Text>
            <TextInput style={styles.input} mode='outlined' value={valorUnitario} onChangeText={(text) => setValorUnitario(text)} />
        </View>

        {!!warning && warning}

        <Button mode='contained-tonal' onPress={inserirProduto}>CADASTRAR</Button>
        </>
        

	)
}

export default CadastrarProdutos