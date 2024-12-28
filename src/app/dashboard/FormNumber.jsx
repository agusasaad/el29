'use client'
import ButtonSubmit from '@/components/form/ButtonSubmit'
import Form from '@/components/form/Form'
import Input from '@/components/form/Input'
import { useAppContext } from '@/context/AppContext'
import { supabase } from '@/supabase'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const FormNumber = ({ dataUpdate, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { numberPhone } = useAppContext()
  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const formData = Object.fromEntries(new FormData(e.target))
      const { error } = await supabase
        .from('phone_numbers')
        .update(formData)
        .eq('id', dataUpdate.id)

      if (error)
        throw new Error(`Error al actualizar el telefono: ${error.message}`)

      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Telefono actualizado con éxito',
      })

      onClose()
      numberPhone()
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
        title={'Numero de telefono'}
        type='number'
        name='phone_number'
        id='phone_number'
        placeholder='Ejemplo: 5491128067218'
        defaultValue={dataUpdate?.phone_number}
      />
      <ButtonSubmit text='Guardar' isLoading={isLoading} />
    </Form>
  )
}

export default FormNumber
