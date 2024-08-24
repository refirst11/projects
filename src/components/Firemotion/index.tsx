'use client'

import React from 'react'
import useFiremotion from 'firemotion'
import styles from './styles.module.scss'

const Firemotion = () => {
  const animate = useFiremotion(styles.base, [styles.entry, styles.exit], 1.28)
  return (
    <div className={`${animate} ${styles.word}`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  )
}

export default Firemotion
