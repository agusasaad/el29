'use client'
import Compressor from 'compressorjs'
import styles from './StyleForm.module.css'
import AddImage from '@/assets/icons/AddImage'
import Image from 'next/image'

const InputImage = ({
  setImageProduct,
  required,
  setIsPictureReady,
  imageProduct,
  showImage = false,
  defaultValue = null,
}) => {
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
      {showImage && (
        <div className={styles.image}>
          {imageProduct || defaultValue ? (
            <Image
              src={
                imageProduct ? URL.createObjectURL(imageProduct) : defaultValue
              }
              alt='banner'
              width={250}
              height={250}
              quality={20}
            />
          ) : (
            <AddImage />
          )}
        </div>
      )}
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
