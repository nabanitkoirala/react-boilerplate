/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode, useState } from 'react';




export const TokenStore_Context = React.createContext('')



const Store = ({ children }) => {
    const [tokenStore, setTokenStore] = useState('')

    return (
        <TokenStore_Context.Provider value={[tokenStore, setTokenStore]}>
            {children}
        </TokenStore_Context.Provider>
    )



}


export default Store;