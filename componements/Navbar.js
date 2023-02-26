import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";
import { AiFillSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import {AiOutlineMenuFold} from 'react-icons/ai'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      
      <AiOutlineMenuFold />
      
      </div>
      <div className={styles.right}>
        <ul className={styles.rightItems}>
          <li>
            <Link href="/" className={styles.settings}>
              <AiFillSetting />
            </Link>
          </li>
          <li className={styles.notification}>
            <Link href="/" className={styles.notificationLink}>
              <IoMdNotificationsOutline />
            </Link>
          </li>

          <li className={styles.profileSection}>
            <Link href='#' className={styles.profileLlink}>
            <img src="/img/blank-profile.webp" alt="profile-picture" />  
            </Link>
         
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
