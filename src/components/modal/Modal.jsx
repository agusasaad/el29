import styles from './Modal.module.css'

const Modal = ({ isModalOpen, onClose, children }) => {
  if (!isModalOpen) return null
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
