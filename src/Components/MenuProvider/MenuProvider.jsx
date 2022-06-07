import { useState, createContext } from 'react'

export const MenuContext = createContext({})

export default function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
      return
    }
    setIsMenuOpen(false)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, openMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
