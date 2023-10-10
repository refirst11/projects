'use client'

import { MagicCircle, MagicStraight } from 'react-magic-card'
import styles from './styles.module.scss'

const MagicCard = () => {
  const myImages = [
    {
      src: '/1.jpg',
      alt: 'fire',
    },
    {
      src: '/2.jpg',
      alt: 'sleep',
    },
    {
      src: '/3.jpg',
      alt: 'vocal',
    },
  ]

  const time = new Date().getHours()
  const dayOrNight = time > 17 || time < 5

  return (
    <div className={styles.container}>
      {!dayOrNight ? (
        <MagicCircle
          loading="lazy"
          classImages={styles.images}
          images={myImages}
          dynamic
          start={1}
          radius={200}
          width={140}
          height={140}
          controller={40}
          animate={{
            scale: 0.8,
            rotateX: 20,
            rotateY: 20,
            rotateZ: -10,
            selectScale: 1.6,
            selectRotateX: 20,
            selectRotateY: 20,
            selectRotateZ: -10,
          }}
          initial={{
            scale: 0.8,
            rotateX: 70,
            rotateY: 40,
            rotateZ: -50,
            selectScale: 1.6,
            selectRotateX: 40,
            selectRotateY: 40,
            selectRotateZ: -10,
          }}
          transition={{ duration: 0.8 }}
          pickProperty={{ classPick: styles.images }}
          pickTransition={{ duration: 1, type: 'spring', mass: 1 }}
          delay={200}
        />
      ) : (
        <MagicStraight
          loading="lazy"
          classImages={styles.images}
          images={myImages}
          width={120}
          height={120}
          start={0}
          controller={40}
          delay={200}
          animate={{
            scale: 0.8,
            opacity: 1,
            selectScale: 1,
          }}
          initial={{
            scale: 0.8,
            selectScale: 1.6,
          }}
          transition={{ duration: 1, type: 'spring', mass: 0.2 }}
          pickTransition={{ duration: 1, type: 'spring', mass: 1 }}
          pickProperty={{ classPick: styles.images, white: false, alpha: 0.2, blur: 20, scale: 2, offset: 0 }}
        />
      )}
    </div>
  )
}

export default MagicCard
