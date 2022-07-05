import React, { useContext, useEffect, useState} from "react"
import { View } from "react-native"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { getProdutoById } from "../../../services/axiosClient"

const ExibirProduto = ({route}) => {
    const {idProduto} = route.params
    const [produto, setProduto] = useState(null)
    
    const buscarProduto = async(idProduto) => {
        
            const data = await getProdutoById(idProduto)

            setProduto(data) 

        
    }
    useEffect(()=>{  
        buscarProduto(idProduto)
    },[])

    useEffect(()=>{
        console.log("Exibir Produto:", produto)

    },[produto])
    
    return(
        <>
        {produto &&
        <Card>
    <Card.Title title={produto.nomeProduto} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Paragraph>Categoria</Paragraph>
      <Title>{produto.categoria.categoria}</Title>
    </Card.Content>
    <Card.Content>
      <Paragraph>Valor unitario</Paragraph>
      <Title>{produto.valorUnitario}</Title>
    </Card.Content>
    <Card.Content>
      <Paragraph>Quantidade em estoque</Paragraph>
      <Title>{produto.quantidadeEstoque}</Title>
    </Card.Content>
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>}
            </>
    )
}

export default ExibirProduto