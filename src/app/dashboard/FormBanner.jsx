'use client'
import ButtonSubmit from '@/components/form/ButtonSubmit'
import Form from '@/components/form/Form'
import Input from '@/components/form/Input'
import InputImage from '@/components/form/InputImage'
import { useState } from 'react'
import { supabase } from '@/supabase'
import Swal from 'sweetalert2'
import { useAppContext } from '@/context/AppContext'

const FormBanner = ({ onClose, dataUpdate }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [imageProduct, setImageProduct] = useState(null)
  const [isPictureReady, setIsPictureReady] = useState(false)
  const { todosLosBanners } = useAppContext()

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      let image = dataUpdate?.image_url

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
      formData.image_url = image

      if (dataUpdate?.id) {
        // Actualización del banner
        const { error } = await supabase
          .from('banner')
          .update(formData)
          .eq('id', dataUpdate.id)

        if (error)
          throw new Error(`Error al actualizar el banner: ${error.message}`)

        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Banner actualizado con éxito',
        })
      } else {
        // Creación de un nuevo banner
        const { error } = await supabase.from('banner').insert([formData])

        if (error)
          throw new Error(`Error al insertar el banner: ${error.message}`)

        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Banner creado con éxito',
        })
      }

      onClose?.()
      todosLosBanners()
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
        title={'Nombre del banner'}
        type={'text'}
        placeholder={'Nombre'}
        name={'name'}
        id={'name'}
        required={true}
        defaultValue={dataUpdate?.name}
      />

      <InputImage
        name={'image_url'}
        required={dataUpdate?.image_url ? false : true}
        imageProduct={imageProduct}
        setImageProduct={setImageProduct}
        setIsPictureReady={setIsPictureReady}
        showImage={true}
        defaultValue={dataUpdate?.image_url}
      />

      <ButtonSubmit
        text={dataUpdate ? 'Actualizar banner' : 'Crear banner'}
        isLoading={isLoading}
        disabled={dataUpdate?.id ? false : !isPictureReady}
      />
    </Form>
  )
}

export default FormBanner
