'use client'

import { m } from 'framer-motion'
import styles from './styles.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideLink = () => {
  const url = process.env.MAIN_URL || ''
  const linkArr = [
    {
      title: 'Projects',
      slug: '/',
    },
    {
      title: 'Bio(EN)',
      slug: url,
    },
  ]
  const pathname = usePathname()
  return (
    <div className={styles.side_fixed}>
      <ul className={styles.ul_box}>
        {linkArr.map(({ slug, title }) => (
          <m.li
            animate={{
              x: 12,
              fontSize: '10px',
              height: '40px',
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
          >
            {slug === '/' ? (
              <Link className={styles.link_box + ' ' + (pathname === '/' ? styles.current_link : '')} href={slug}>
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
