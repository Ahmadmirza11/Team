'use client'
import React from "react";
import styles from "./approval.module.css";
export const Aproval = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.approval}>
          <p className={styles.p1}> Keep it up, Jake</p>
          <p className={styles.p2}>Here is what taxk is doing work</p>
        </div>

        <div style={{ padding: 22 }}>
          <button className={styles.button}>jul 19-Aug-11</button>
        </div>
      </div>

      <div className={styles.row}>
        <p className={styles.p4}> Pending client approval (22)</p>
        <p className={styles.p4}>In progress (34)</p>
        <p className={styles.p4}>new tasks (15)</p>
        <p className={styles.p4}>completed (78)</p>
      </div>
    </div>
  );
};
