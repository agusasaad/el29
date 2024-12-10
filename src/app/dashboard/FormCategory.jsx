'use client'
import Form from '@/components/form/Form'
import Input from '@/components/form/Input'
import TextArea from '@/components/form/TextArea'
import React, { useState } from 'react'
import ButtonSubmit from '@/components/form/ButtonSubmit'
import { supabase } from '@/supabase'
import Swal from 'sweetalert2'

const FormCategory = ({ onClose, dataUpdate }) => {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const formData = Object.fromEntries(new FormData(e.target))

      if (dataUpdate) {
        const { error } = await supabase
          .from('categories')
          .update(formData)
          .eq('id', dataUpdate.id)

        if (error)
          throw new Error(`Error al actualizar la categoría: ${error.message}`)

        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Categoría actualizada con éxito',
        })
      } else {
        const { error } = await supabase.from('categories').insert([formData])

        if (error)
          throw new Error(`Error al insertar los datos: ${error.message}`)

        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Categoría creada con éxito',
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
        title='Nombre de la categoría *'
        placeholder='Nombre de la categoría'
        required
        defaultValue={dataUpdate?.name}
      />

      <TextArea
        name='description'
        title='Descripción de la categoría *'
        placeholder='Descripción de la categoría'
        required
        defaultValue={dataUpdate?.description}
      />

      <ButtonSubmit
        text={dataUpdate ? 'Actualizar categoría' : 'Crear categoría'}
        type='submit'
        isLoading={isLoading}
      />
    </Form>
  )
}

export default FormCategory
