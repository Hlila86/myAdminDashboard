import Link from 'next/link'
import React from 'react'
import styles from '../styles/Sidebar.module.css'
import {AiFillDashboard} from 'react-icons/ai'
import {FaTshirt} from 'react-icons/fa'
import {MdAttachMoney} from 'react-icons/md'
import {AiFillSetting} from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className={styles.container}>

      <dv className={styles.logo}>
        <h2>MyDashoard</h2>
      </dv>

      <div className={styles.wrapper}>
        <ul>
          <li>
            <AiFillDashboard />
            <Link href='/' className={styles.links}>Dashoard</Link></li>
          <li>
            <FaTshirt />
            <Link href='/' className={styles.links}>Products</Link></li>
          <li>
            <MdAttachMoney />
            <Link href='/' className={styles.links}>Sales</Link></li>
          
          <li>
            <AiFillSetting />
            <Link href='/' className={styles.links}>Settings</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar