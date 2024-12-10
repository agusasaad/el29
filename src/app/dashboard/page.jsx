'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Plus from '@/assets/icons/Plus'
import ButtonControl from './ButtonControl'
import Modal from '@/components/modal/Modal'
import FormProduct from './FormProduct'
import FormCategory from './FormCategory'
import Table from './table/Table'
import { supabase } from '@/supabase'
import Swal from 'sweetalert2'

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [type, setType] = useState(false)
  const [productos, setProductos] = useState([])
  const [categorias, setCategorias] = useState([])
  const [typeTable, setTypeTable] = useState('products')
  const [dataUpdate, setDataUpdate] = useState(null)

  const closeModal = () => {
    setIsModalOpen(false)
    setDataUpdate(null)
  }

  const handleModal = (type, row) => {
    setType(type)
    setIsModalOpen(true)
    if (row) {
      setDataUpdate(row)
    }
  }

  const getProductos = async () => {
    try {
      let { data: productos, error } = await supabase
        .from('products')
        .select('*')

      if (error) {
        console.error('Error al obtener productos:', error)
        return null
      }

      setProductos(productos)
    } catch (error) {
      console.error('Error al obtener productos:', error)
    }
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

      setCategorias(categories)
    } catch (error) {
      console.error('Error al obtener categorías:', error)
    }
  }

  const deleteItem = async (id, type) => {
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: `¿Seguro que deseas eliminar este item?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      })

      if (result.isConfirmed) {
        const table = type === 'product' ? 'products' : 'categories'

        const { data, error } = await supabase.from(table).delete().eq('id', id)

        if (error) {
          console.error(`Error al eliminar el item:`, error)
          return
        }
        window.location.reload()
      }
    } catch (err) {
      console.error('Error en la operación:', err)
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setCurrentUser(user)
    }
    setIsLoading(false)

    getProductos()
    getCategories()
  }, [])

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <span className={styles.loader}></span>
      </div>
    )
  }

  if (!currentUser) {
    window.location.href = '/'
    return null
  }

  return (
    <div className={styles.container}>
      <h2>Panel de Administración</h2>
      <div className={styles.content}>
        <ButtonControl handleModal={handleModal} setTypeTable={setTypeTable} />
      </div>
      <Table
        data={typeTable === 'products' ? productos : categorias}
        deleteItem={deleteItem}
        typeTable={typeTable}
        handleModal={handleModal}
      />
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        {type === 'product' ? (
          <FormProduct
            onClose={closeModal}
            categorias={categorias}
            dataUpdate={dataUpdate}
          />
        ) : (
          <FormCategory onClose={closeModal} dataUpdate={dataUpdate} />
        )}
      </Modal>
    </div>
  )
}

export default Dashboard
