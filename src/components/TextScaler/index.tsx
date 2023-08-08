'use client'

import { TextScaler } from 'react-text-scaler'
import styles from './styles.module.scss'

const TextScale = () => {
  return (
    <TextScaler
      className={styles.positioning}
      classBox={styles.box}
      classSlider={styles.slider}
      target={'main'}
      size={186}
    />
  )
}

export default TextScale
