import { createContext, useContext, useState } from "react";

export const ProdutoContext = createContext();

export const ProdutoProvider = ({children}) => {
    const [idProduto, setIdProduto] = useState()

    return (
        <ProdutoContext.Provider value={{setIdProduto, idProduto}}>
            {children}
        </ProdutoContext.Provider>
    )
}