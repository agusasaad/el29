'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import ButtonControl from './ButtonControl'
import Modal from '@/components/modal/Modal'
import FormProduct from './FormProduct'
import FormCategory from './FormCategory'
import Table from './table/Table'
import { supabase } from '@/supabase'
import Swal from 'sweetalert2'
import { useAppContext } from '@/context/AppContext'
import PaginationProduct from '@/components/pagination/PaginationProduct'
import PaginationCategorie from '@/components/pagination/PaginationCategorie'
import FormBanner from './FormBanner'
import FormNumber from './FormNumber'

const Dashboard = () => {
  const {
    products,
    categories,
    banner,
    getAllCategorias,
    todosLosBanners,
    getCategories,
    getProductos,
    phoneNumber,
  } = useAppContext()
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [type, setType] = useState(false)
  const [typeTable, setTypeTable] = useState('products')
  const [dataUpdate, setDataUpdate] = useState(null)
  const [searchText, setSearchText] = useState('')

  const closeModal = () => {
    setIsModalOpen(false)
    setDataUpdate(null)
  }

  const handleModal = (type, row) => {
    setType(type)
    setIsModalOpen(true)
    if (row) {
      setDataUpdate(row)
      console.log(dataUpdate)
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
        const table =
          type === 'product'
            ? 'products'
            : type === 'category'
            ? 'categories'
            : 'banner'

        const { data, error } = await supabase.from(table).delete().eq('id', id)

        if (error) {
          console.error(`Error al eliminar el item:`, error)
          return
        }

        if (type === 'product') {
          getProductos()
        } else if (type === 'category') {
          getCategories()
        } else if (type === 'banner') {
          todosLosBanners()
        }
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

  const filteredData =
    typeTable === 'products'
      ? products.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : typeTable === 'categories'
      ? categories.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : typeTable === 'banner'
      ? banner.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : typeTable === 'telefono'
      ? phoneNumber.filter((item) => item.phone_number.includes(searchText))
      : []

  return (
    <div className={styles.container}>
      <h2>Panel de Administración</h2>
      <div className={styles.content}>
        <ButtonControl
          handleModal={handleModal}
          setTypeTable={setTypeTable}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </div>

      <Table
        data={filteredData}
        deleteItem={deleteItem}
        typeTable={typeTable}
        handleModal={handleModal}
      />

      {typeTable === 'products' ? (
        <PaginationProduct />
      ) : (
        <PaginationCategorie />
      )}

      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        {type === 'product' ? (
          <FormProduct
            onClose={closeModal}
            categorias={getAllCategorias}
            dataUpdate={dataUpdate}
          />
        ) : type === 'category' ? (
          <FormCategory onClose={closeModal} dataUpdate={dataUpdate} />
        ) : type === 'banner' ? (
          <FormBanner onClose={closeModal} dataUpdate={dataUpdate} />
        ) : type === 'telefono' ? (
          <FormNumber onClose={closeModal} dataUpdate={dataUpdate} />
        ) : null}
      </Modal>
    </div>
  )
}

export default Dashboard
