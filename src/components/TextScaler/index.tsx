'use client'

import React from 'react'
import { TextScaler } from 'react-text-scaler'
import styles from './styles.module.scss'

const TextS = () => {
  return (
    <TextScaler
      target="main"
      size={24}
      className={styles.positioning}
      sliderPosition={-84}
      sliderColor={{ handleBorderColor: 'black', handleColor: 'white', color: 'white', borderColor: 'black' }}
    />
  )
}

export default TextS
