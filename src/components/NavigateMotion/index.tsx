'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { NavigateMotion } from 'react-navigate-motion'

const NavigateMotionLink = () => {
  const router = useRouter()
  return (
    <NavigateMotion
      href={'/'}
      exit={{
        opacity: 0,
        transition: { duration: 0.42 },
      }}
      routing={router}
    >
      Return Projects
    </NavigateMotion>
  )
}
export default NavigateMotionLink
