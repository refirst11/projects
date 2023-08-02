'use client'

import { useState } from 'react'
import { m } from 'framer-motion'
import styles from './styles.module.scss'
import Link from 'next/link'

const SideLink = () => {
  const url = String(process.env.SENTRY_URL)
  const linkArr = [
    {
      title: 'Projects',
      slug: '/',
    },
    {
      title: 'Biography',
      slug: url,
    },
  ]
  const [isHover, setIsHover] = useState('')

  return (
    <div className={styles.side_fixed}>
      <ul className={styles.ul_box}>
        {linkArr.map(({ slug, title }) => (
          <m.li
            animate={{
              x: isHover == slug ? 40 : 0,
              fontSize: isHover == slug ? '14px' : '10px',
              height: isHover == slug ? '80px' : '40px',
              transition: {
                x: {
                  delay: 0,
                  duration: 0.1,
                },
                fontSize: {
                  delay: 0.2,
                  duration: 0.2,
                },
                height: {
                  delay: 0.2,
                  duration: 0.2,
                },
              },
            }}
            className={styles.list_box}
            key={slug}
            onMouseEnter={() => setIsHover(slug)}
            onMouseLeave={() => setIsHover('')}
          >
            {slug == '/' ? (
              <Link className={styles.link_box} href={slug}>
                {title}
              </Link>
            ) : (
              <a className={styles.link_box} href={slug}>
                {title}
              </a>
            )}
          </m.li>
        ))}
      </ul>
    </div>
  )
}

export default SideLink
