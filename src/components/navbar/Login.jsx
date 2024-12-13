'use client'
import { useState } from 'react'
import Form from '../form/Form'
import Input from '../form/Input'
import ButtonSubmit from '../form/ButtonSubmit'
import { supabase } from '@/supabase'
import { useRouter } from 'next/navigation'

const Login = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      setIsLoading(true)
      const result = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })
      if (result.data?.user) {
        localStorage.setItem('user', JSON.stringify(result.data.user))
        localStorage.setItem('session', JSON.stringify(result.data.session))

        onClose()
        router.push('/dashboard')
      } else {
        console.error(result.error.message)
        alert('Correo o contraseña incorrectos.')
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message)
      alert('Ocurrió un error. Por favor, inténtalo más tarde.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        title={'Correo electrónico *'}
        type='email'
        placeholder={'ejemplo@mail.com'}
        name={'email'}
      />
      <Input
        title={'Contraseña *'}
        type='password'
        placeholder={'Contraseña'}
        name={'password'}
      />
      <ButtonSubmit
        text={'Iniciar sesión'}
        type={'submit'}
        isLoading={isLoading}
      />
    </Form>
  )
}

export default Login
