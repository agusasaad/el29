'use client'
import { supabase } from '@/supabase'
import { createContext, useState, useEffect, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [cart, setCart] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const [totalProducts, setTotalProducts] = useState(0)

  const getProductos = async (page = 1, limit = itemsPerPage) => {
    try {
      const from = (page - 1) * limit
      const to = from + limit - 1

      let {
        data: productos,
        count,
        error,
      } = await supabase
        .from('products')
        .select('*', { count: 'exact' })
        .range(from, to)

      if (error) {
        console.error('Error al obtener productos:', error)
        return null
      }

      setProducts(productos)
      setTotalProducts(count)
    } catch (error) {
      console.error('Error al obtener productos:', error)
    }
  }

  const nextPage = () => {
    if (currentPage * itemsPerPage < totalProducts) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const getCategories = async () => {
    try {
      let { data: categories, error } = await supabase
        .from('categories')
        .select('*')

      if (error) {
        console.error('Error al obtener categorías:', error)
        return null
      }

      setCategories(categories)
    } catch (error) {
      console.error('Error al obtener categorías:', error)
    }
  }
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (product) => product.id === item.id
      )

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex].quantity += 1
        return updatedCart
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id)
      if (updatedCart.length === 0) {
        localStorage.removeItem('cart')
      } else {
        localStorage.setItem('cart', JSON.stringify(updatedCart))
      }
      return updatedCart
    })
  }

  useEffect(() => {
    getProductos(currentPage)
  }, [currentPage])

  useEffect(() => {
    getCategories()
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(storedCart)
  }, [])

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      localStorage.removeItem('cart')
    }
  }, [cart])

  return (
    <AppContext.Provider
      value={{
        products,
        categories,
        cart,
        addToCart,
        removeFromCart,
        currentPage,
        nextPage,
        prevPage,
        totalProducts,
        itemsPerPage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
