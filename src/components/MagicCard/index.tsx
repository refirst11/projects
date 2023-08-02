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
    <>
      {dayOrNight ? (
        <MagicCircle
          loading="lazy"
          className={styles.component}
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
          transition={{ duration: 0.2 }}
          pickProperty={{ classPick: styles.images }}
          delay={60}
        />
      ) : (
        <MagicStraight
          loading="lazy"
          vertical={false}
          images={myImages}
          width={120}
          height={120}
          start={0}
          controller={40}
          reverseIndex={false}
          className={styles.component}
          classImages={styles.images}
          classImageSelect={styles.select}
          selectOffsetX={0}
          selectOffsetY={-120}
          delay={50}
          animate={{
            scale: 0.8,
            rotateX: 20,
            rotateY: -20,
            rotateZ: 0,
            opacity: 1,
            selectScale: 1,
            selectRotateX: 0,
            selectRotateY: 0,
            selectRotateZ: 0,
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
          transition={{ duration: 1.4, type: 'spring', mass: 0.2 }}
          pickTransition={{ duration: 0.2, type: 'spring', mass: 1 }}
          pickProperty={{ classPick: styles.images, white: false, alpha: 0.2, blur: 20, scale: 2, offset: 0 }}
        />
      )}
    </>
  )
}

export default MagicCard
