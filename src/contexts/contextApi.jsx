import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {

    const [modalState, setModalState] = useState(false)
    const [marketItem, setMarketItems] = useState([])


    const value = {
        modalState, setModalState, marketItem, setMarketItems
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}