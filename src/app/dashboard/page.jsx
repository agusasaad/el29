'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

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

  return <div>Dashboard.</div>
}

export default Dashboard
