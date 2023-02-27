import React from "react";
import styles from "../styles/Orders.module.css";

const Orders = () => {
  return (
    <div className={styles.container}>
      <table  className={styles.table}>
        <tr className={styles.tableHead}>
          <th>Order ID</th>
          <th>Products</th>
          <th>Payement</th>
          <th>Order Statue</th>
          <th>Date</th>
          <th>Total</th>
        </tr>
        <tr className={styles.tableRow}>
          <td>15876</td>
          <td>Tshirt Guchi</td>
          <td>Paypal</td>
          <td className={styles.badge}>Paid</td>
          <td>15/02/2023</td>
          <td>$150</td>
        </tr>
        <tr className={styles.tableRow}>
          <td>125</td>
          <td>Tshirt Guchi</td>
          <td>Paypal</td>
          <td className={styles.badge}>Paid</td>
          <td>05/02/2023</td>
          <td>$550</td>
        </tr>
        <tr className={styles.tableRow}>
          <td>5558</td>
          <td>Tshirt Guchi</td>
          <td>Paypal</td>
          <td className={styles.badge}>Paid</td>
          <td>17/02/2023</td>
          <td>$180</td>
        </tr>
      </table>
    </div>
  );
};

export default Orders;
