import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>

        <div className={styles.logoContainer}>
              <Image src='/img/logo.png' alt='' width={200} height={70}/>
        </div>

        <div className={styles.searchSection}>

            <input type='search'></input>

        </div>

        <div className={styles.right}>

            <h3>login</h3>

        </div>
    </div>
  )
}

export default Navbar