'use client'
import { supabase } from '@/supabase'
import { createContext, useState, useEffect, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [getAllProducts, setgetAllProducts] = useState()
  const [categories, setCategories] = useState([])
  const [getAllCategorias, setGetAllCategorias] = useState()
  const [cart, setCart] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const [totalProducts, setTotalProducts] = useState(0)
  const [currentCategoryPage, setCurrentCategoryPage] = useState(1)
  const [totalCategories, setTotalCategories] = useState(0)

  const todosLosProductos = async () => {
    try {
      let { data: allProducts, error } = await supabase
        .from('products')
        .select('*')

      if (error) {
        console.error('Error al obtener productos:', error)
        return null
      }

      setgetAllProducts(allProducts)
    } catch (error) {
      console.error('Error al obtener productos:', error)
    }
  }

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

  const getCategories = async (page = 1, limit = itemsPerPage) => {
    try {
      const from = (page - 1) * limit
      const to = from + limit - 1

      let {
        data: categories,
        count,
        error,
      } = await supabase
        .from('categories')
        .select('*', { count: 'exact' })
        .range(from, to)

      if (error) {
        console.error('Error al obtener categorías:', error)
        return null
      }

      setCategories(categories)
      setTotalCategories(count)
    } catch (error) {
      console.error('Error al obtener categorías:', error)
    }
  }

  const todasLasCategorias = async () => {
    try {
      let { data: allCategorias, error } = await supabase
        .from('categories')
        .select('*')

      if (error) {
        console.error('Error al obtener productos:', error)
        return null
      }

      setGetAllCategorias(allCategorias)
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

  const nextCategoryPage = () => {
    if (currentCategoryPage * itemsPerPage < totalCategories) {
      setCurrentCategoryPage((prev) => prev + 1)
    }
  }

  const prevCategoryPage = () => {
    setCurrentCategoryPage((prev) => (prev > 1 ? prev - 1 : prev))
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
    getCategories(currentCategoryPage)
  }, [currentCategoryPage])

  useEffect(() => {
    todosLosProductos()
    todasLasCategorias()
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
        getAllProducts,
        categories,
        getAllCategorias,
        cart,
        addToCart,
        removeFromCart,
        currentPage,
        nextPage,
        prevPage,
        totalProducts,
        itemsPerPage,
        currentCategoryPage,
        nextCategoryPage,
        prevCategoryPage,
        totalCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
