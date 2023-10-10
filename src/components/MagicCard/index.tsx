'use client'

import { CircleRotation, StraightInfinity } from 'react-magic-card'
import styles from './styles.module.scss'

const MagicCard = () => {
  const images = [
    {
      src: '/pexels-alex-andrews-821736.jpg',
      alt: 'Alex Andrews the pexels picture',
    },
    {
      src: '/pexels-cottonbro-studio-6869655.jpg',
      alt: 'Cottonbro Studio the pexels picture',
    },
    {
      src: '/pexels-matheus-bertelli-7410722.jpg',
      alt: 'Matheus Bertelli the pexels picture',
    },
    {
      src: '/pexels-matteo-petralli-1828875.jpg',
      alt: 'Matteo Petralli the pexels picture',
    },
    {
      src: '/pexels-timo-volz-3643714.jpg',
      alt: 'Timo Volz the pexels picture',
    },
  ]

  const time = new Date().getHours()
  const heatTime = (time >= 21 && time <= 24) || (time >= 0 && time < 2)

  return (
    <div className={styles.container}>
      {heatTime ? (
        <CircleRotation
          classImages={styles.images}
          images={images}
          start={Math.ceil(images.length / 2 - 1)}
          radius={150}
          width={100}
          height={150}
          controller={40}
          animate={{
            scale: 0.8,
            rotateX: 66,
            rotateY: 66,
            rotateZ: -10,
            selectScale: 1.6,
            selectRotateX: 20,
            selectRotateY: 20,
            selectRotateZ: -10,
          }}
          initial={{
            rotateX: 246,
            rotateY: 246,
            rotateZ: -50,
            selectScale: 1.6,
            selectRotateX: 40,
            selectRotateY: 40,
            selectRotateZ: -10,
          }}
          transition={{ duration: 0.8, type: 'spring', mass: 0.93 }}
          detailProperty={{ scale: 3 }}
          detailTransition={{ duration: 0.2 }}
        />
      ) : (
        <StraightInfinity
          className={styles.rotate}
          classImages={styles.images}
          images={images}
          width={200}
          height={300}
          start={Math.ceil(images.length / 2 - 1)}
          controller={200}
          margin={-20}
          animate={{
            scale: 0.8,
            opacity: 1,
            selectScale: 1.2,
            selectRotate: 45,
            rotateY: -50,
            rotateX: -20,
          }}
          initial={{
            scale: 0.8,
            selectScale: 2.99,
          }}
          transition={{ duration: 0.32, type: 'spring', mass: 0.93 }}
          detailProperty={{ rotate: -45 }}
          detailTransition={{ duration: 0.2 }}
        />
      )}
    </div>
  )
}

export default MagicCard
