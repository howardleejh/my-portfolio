import { useState, createContext } from 'react'

export const MenuContext = createContext({})

export default function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const changeMenuState = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      return
    }
    setIsMenuOpen(true)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, changeMenuState }}>
      {children}
    </MenuContext.Provider>
  )
}
