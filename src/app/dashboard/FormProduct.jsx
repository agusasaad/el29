'use client'
import ButtonSubmit from '@/components/form/ButtonSubmit'
import Form from '@/components/form/Form'
import Input from '@/components/form/Input'
import InputImage from '@/components/form/InputImage'
import Select from '@/components/form/Select'
import TextArea from '@/components/form/TextArea'
import { supabase } from '@/supabase'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

const FormProduct = ({ onClose, categorias, dataUpdate }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [imageProduct, setImageProduct] = useState(null)
  const [isPictureReady, setIsPictureReady] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      let image = dataUpdate?.images?.[0]

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
      }

      const formData = Object.fromEntries(new FormData(e.target))
      formData.images = [image]

      if (dataUpdate?.id) {
        const { error } = await supabase
          .from('products')
          .update(formData)
          .eq('id', dataUpdate.id)

        if (error)
          throw new Error(`Error al actualizar el producto: ${error.message}`)

        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Producto actualizado con éxito',
        })
      } else {
        const { error } = await supabase.from('products').insert([formData])

        if (error)
          throw new Error(`Error al insertar los datos: ${error.message}`)

        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Producto creado con éxito',
        })
      }

      onClose()
      window.location.reload()
    } catch (error) {
      console.error(error.message)

      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: `Hubo un error: ${error.message}`,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        name='name'
        type='text'
        title='Nombre *'
        placeholder='Nombre del producto'
        required
        defaultValue={dataUpdate?.name}
      />
      <Input
        name='price'
        type='number'
        title='Precio *'
        placeholder='Precio del producto sin . ni ,'
        required
        defaultValue={dataUpdate?.price}
      />
      <Input
        name='stock'
        type='number'
        title='Stock *'
        placeholder='Stock del producto'
        required
        defaultValue={dataUpdate?.stock}
      />
      <Select
        optionKey='name'
        options={categorias}
        data='name'
        title='Categorias *'
        name='category'
        defaultValue={dataUpdate?.category}
        required
      />
      <TextArea
        placeholder='Descripcion del producto'
        name='description'
        required
        defaultValue={dataUpdate?.description}
      />
      <InputImage
        setImageProduct={setImageProduct}
        required={dataUpdate?.images?.[0] ? false : true}
        setIsPictureReady={setIsPictureReady}
      />

      <ButtonSubmit
        text={dataUpdate ? 'Actualizar producto' : 'Crear producto'}
        isLoading={isLoading}
        disabled={dataUpdate?.id ? false : !isPictureReady}
      />
    </Form>
  )
}

export default FormProduct
