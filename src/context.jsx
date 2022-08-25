import React, {useContext, useState} from 'react'

const GlobalContext =  React.createContext()

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export function ContextProvider({children}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <GlobalContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
        {children}
    </GlobalContext.Provider>
  )
}
