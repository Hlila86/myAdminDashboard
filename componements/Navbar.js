import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'

import {IoMdNotificationsOutline} from 'react-icons/io'

const Navbar = () => {
  return (
    <div className={styles.container}>
      

      <div className={styles.left}>
        left
      </div>
      <div className={styles.right}>
right

<IoMdNotificationsOutline />
        <div className={styles.profileSection}>
        <img src='/img/blank-profile.webp' alt='profile-picture' />

        </div>
   
      </div>
       
    </div>
  )
}

export default Navbar