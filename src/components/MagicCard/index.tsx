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
      {dayOrNight ? (
        <MagicCircle
          classImages={styles.images}
          images={myImages}
          dynamic
          start={1}
          radius={200}
          width={140}
          height={140}
          controller={40}
          fadeRange={10}
          transTime={0.5}
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
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          pickTransition={{ duration: 0.8, ease: 'easeInOut' }}
          pickProperty={{ classPick: styles.images }}
          delay={200}
        />
      ) : (
        <MagicStraight
          classImages={styles.images}
          images={myImages}
          vertical={false}
          width={150}
          height={150}
          start={1}
          controller={40}
          fadeRange={2}
          transTime={0.2}
          animate={{
            scale: 0.8,
            opacity: 1,
            selectScale: 1,
          }}
          initial={{
            scale: 0.8,
            selectScale: 2.99,
          }}
          transition={{ duration: 0.357, ease: 'easeInOut' }}
          pickTransition={{ duration: 0.357, ease: 'easeInOut' }}
          pickProperty={{ classPick: styles.images }}
          delay={200}
        />
      )}
    </div>
  )
}

export default MagicCard
