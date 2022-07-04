import React, { useEffect, useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import { getCategorias, postProduto, getProdutos } from "../../../services/axiosClient";
import SelectPicker from 'react-native-form-select-picker';

const CadastrarProdutos = ({CadastrarProdutos}) => {
    const [selected, setSelected] = useState();
    const [listaProdutos, setListaProdutos] = useState(null)

    const listarProdutos = async () => {
        const produtos = await getProdutos()
        setListaProdutos(produtos)
    }

    useEffect(()=>{
        listarProdutos()
    },[])



	return (
		//...
        <>
             <SelectPicker
                onValueChange={(value) => {
                    setSelected(value);
                }}
                selected={selected}
                >
                
                {listaProdutos && Object.values(listaProdutos).map((val, index) => (
                    <SelectPicker.Item label={val} value={val} key={index} />
                    ))}

            </SelectPicker>
        </>

	)
}

export default CadastrarProdutos