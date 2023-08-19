'use client'

import React, { useState } from 'react'
import styles from './styles.module.scss'
import useFitter from 'react-page-fitter'
import { Fukuwarai } from 'react-fukuwarai'

export const PageFitter = () => {
  const [viewport, setViewport] = useState(false)
  const isFit = useFitter('#fuku', { parentBox: !viewport ? '.' + styles.wrapper : undefined })

  return (
    <div className={styles.wrapper} style={{ border: !viewport ? 'solid 2px skyblue' : 'none' }}>
      <div className={styles.result}>
        isFit → {isFit === undefined ? 'undefined' : isFit === true ? 'true' : 'false'}
      </div>

      <button
        className={styles.view}
        onPointerDown={() => setViewport(!viewport)}
        style={{ border: viewport ? 'solid 2px skyblue' : 'none' }}
      >
        がんばれ がんばるViewport
      </button>
      <Fukuwarai>
        <div className={styles.inner} />
      </Fukuwarai>
    </div>
  )
}
