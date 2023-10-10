'use client'

import React, { useState } from 'react'
import styles from './styles.module.scss'
import useFitter from 'react-page-fitter'
import { Fukuwarai } from 'react-fukuwarai'
import { PiDogLight } from 'react-icons/pi'

const PageFitter = () => {
  const [viewport, setViewport] = useState(false)
  const isFit = useFitter('#fuku', { parentBox: !viewport ? '.' + styles.room : undefined })

  return (
    <div className={styles.room} style={{ border: !viewport ? 'solid 2px skyblue' : 'none' }}>
      <div>isFit → {isFit === undefined ? 'undefined' : isFit === true ? 'true' : 'false'}</div>
      <button
        className={styles.view}
        onClick={() => setViewport(!viewport)}
        style={{ border: viewport ? 'solid 2px skyblue' : 'none' }}
      >
        viewport
      </button>
      <Fukuwarai>
        <PiDogLight className={styles.dog} size={120} />
      </Fukuwarai>
    </div>
  )
}

export default PageFitter
