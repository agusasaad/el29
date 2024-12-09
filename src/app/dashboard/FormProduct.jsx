'use client'
import ButtonSubmit from '@/components/form/ButtonSubmit'
import Form from '@/components/form/Form'
import Input from '@/components/form/Input'
import InputImage from '@/components/form/InputImage'
import Select from '@/components/form/Select'
import TextArea from '@/components/form/TextArea'
import { supabase } from '@/supabase'
import { useState } from 'react'

const FormProduct = ({ onClose, categorias }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [imageProduct, setImageProduct] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      let image

      if (imageProduct) {
        const fileName = `${Date.now()}-${imageProduct.name}`

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('images')
          .upload(fileName, imageProduct)

        if (uploadError)
          throw new Error(`Error al subir la imagen: ${uploadError.message}`)

        const { data, error } = supabase.storage
          .from('images')
          .getPublicUrl(uploadData.path)

        if (error)
          throw new Error(`Error al obtener la URL pública: ${error.message}`)

        image = data.publicUrl
      } else {
        alert('Selecciona una imagen')
        setIsLoading(false)
        return
      }

      const formData = Object.fromEntries(new FormData(e.target))
      formData.images = [image]

      const { data, error } = await supabase.from('products').insert([formData])

      if (error)
        throw new Error(`Error al insertar los datos: ${error.message}`)

      alert('Producto creado con éxito')

      onClose()

      window.location.reload()
    } catch (error) {
      console.error(error.message)
      alert(`Hubo un error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        name={'name'}
        type={'text'}
        title={'Nombre *'}
        placeholder={'Nombre del producto'}
        required={true}
      />
      <Input
        name={'price'}
        type={'number'}
        title={'Precio *'}
        placeholder={`Precio del producto sin . ni  ,`}
        required={true}
      />
      <Input
        name={'stock'}
        type={'number'}
        title={'Stock *'}
        placeholder={'Stock del producto'}
        required={true}
      />
      <Select
        optionKey={'name'}
        options={categorias}
        data={'name'}
        title={'Categorias *'}
        name={'category'}
        defaultValue={''}
        required={true}
      />
      <TextArea
        placeholder={'Descripcion del producto'}
        name={'description'}
        required={true}
      />
      <InputImage setImageProduct={setImageProduct} />

      <ButtonSubmit text={'Crear producto'} isLoading={isLoading} />
    </Form>
  )
}

export default FormProduct
