"use client"

import Link from 'next/link'
import styles from './page.module.scss'

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'PortFolio',
        url: '/portfolio'
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog'
    },
    {
        id: 4,
        title: 'About',
        url: '/about'
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact'
    },
    {
        id: 6,
        title: 'DashBoard',
        url: '/dashboard'
    }
]

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                Jerry
            </Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link
                        key={link.id}
                        href={link.url}
                        className={styles.link}
                    >{link.title}</Link>
                ))}
                <button className={styles.logout} onClick={() => {
                    console.log('logout')
                }}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default NavBar