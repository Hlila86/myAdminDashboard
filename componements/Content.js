import React from 'react'
import styles from '../styles/Content.module.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import data from '../utils/data'

const Content = () => {
  return (
    <div className={styles.container}>
      
 <div className={styles.tabWrapper}>

  <div className={styles.tab}>
    <div className={styles.tabTitle}>

       Nb of Products :
    </div> 
  </div>

  <div className={styles.tab}>
    <div className={styles.tabTitle}>

       Nb of Sales :
    </div> 
  </div>

  <div className={styles.tab}>
    <div className={styles.tabTitle}>

       Total Sales :
    </div> 
  </div> 

 </div>

<div className={styles.chatsWrapper}>

<div className={styles.barChart}>
  <h2>Sales</h2>


</div>

<div className={styles.circleChart}>
  <h2>Costumers Arrived</h2>
  <Doughnut data={data}  width={400} height={400}  />

</div>

</div>

      </div>
  )
}

export default Content