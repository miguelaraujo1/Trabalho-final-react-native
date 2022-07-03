import api from "./api";

export const getProdutos = async() => {
    const { data } = await api.get("/tegloja/produtos")

    return data
}

export const getProdutosByCategoria = async (id) => {
    const { data } = await api.get(`/tegloja/categorias/${id}/produtos`)

    return data
}

export const getCategorias = async () => {
    const { data } = await api.get("/tegloja/categorias")

    return data
}