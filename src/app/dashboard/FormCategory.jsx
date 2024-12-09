'use client'
import Form from '@/components/form/Form'
import Input from '@/components/form/Input'
import TextArea from '@/components/form/TextArea'
import React, { useState } from 'react'
import ButtonSubmit from '@/components/form/ButtonSubmit'
import { supabase } from '@/supabase'

const FormCategory = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const formData = Object.fromEntries(new FormData(e.target))
      const { data, error } = await supabase
        .from('categories')
        .insert([formData])

      if (error)
        throw new Error(`Error al insertar los datos: ${error.message}`)

      alert('Categoria creado con éxito')

      onClose()
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
        title={'Nombre de la categoria *'}
        placeholder={'Nombre de la categoria'}
        required
      />

      <TextArea
        name={'description'}
        title={'Descripcion de la categoria *'}
        placeholder={'Descripcion de la categoria'}
      />

      <ButtonSubmit text={'Guardar'} type={'submit'} isLoading={isLoading} />
    </Form>
  )
}

export default FormCategory
