'use client'
import Compressor from 'compressorjs'
import styles from './StyleForm.module.css'

const InputImage = ({ setImageProduct, required, setIsPictureReady }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0]

    if (file) {
      new Compressor(file, {
        quality: 0.4,
        convertSize: 1,
        mimeType: 'image/webp',
        success: (compressedResult) => {
          setImageProduct(compressedResult)
          setIsPictureReady(true)
        },
        error: (err) => {
          console.error('Error al comprimir la imagen:', err)
        },
      })
    }
  }

  return (
    <label className={styles.inputImage}>
      <input
        type='file'
        accept='image/*'
        onChange={handleImageUpload}
        id='image'
        required={required}
      />
    </label>
  )
}

export default InputImage
