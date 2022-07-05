import api from "./api";

export const getProdutos = async() => {
    const { data } = await api.get("/tegloja/produtos")

    return data
}

export const getProdutosByCategoria = async (id) => {
    const { data } = await api.get(`/tegloja/categorias/${id}/produtos`)

    return data
}

export const postProduto = async(idCategoria ,nomeProduto, qtdEstoque, valorUnitario) => {
    const { data } = await api.post("/tegloja/produtos", {idCategoria: idCategoria,
    nomeProduto: nomeProduto,
    quantidadeEstoque: qtdEstoque,
    valorUnitario: valorUnitario})

    return data
}

// export const postFotoProduto = async (idProduto) => {
//     const {data} = await api.post(`/tegloja/produtos/${idProduto}/foto`, )
// }

export const getCategorias = async () => {
    const { data } = await api.get("/tegloja/categorias")

    return data
}

export const getProdutoById = async (idProduto) => {
    const {data} = await api.get(`/tegloja/produtos/${idProduto}`)

    console.log('axios: ', data)
    return data
}