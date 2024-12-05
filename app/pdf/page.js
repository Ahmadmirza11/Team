'use client'
import React from "react";
import { useState } from 'react';
import styles from "./pdf.module.css";
const Page = () => {
  const [description, setDescription] = useState('');

  const handleChange = (event) => {
      setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      // Here you can handle the description submission
      console.log('Description submitted:', description);
      // You might want to reset the input field after submission
      setDescription('');
  };
  return (
    <div>
      <div className={styles.bar}>
        <div className={styles.pdfContainerleft}>
          <p className={styles.p1}>VAT_Receipts_AcmeCorp.pdf</p>
        </div>

        <div className={styles.pdfContaineright}>
          <button className={styles.download}>Download</button>
          <button className={styles.export}>Export</button>
        </div>
      </div>

      <div className={styles.contain}>
        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.text1}>Personal Information</p>
          </div>

          <div className={styles.right}>
            <ul>
              <li>
                Name: <span className={styles.text2}>John Doe</span>
              </li>
              <li>
                Taxpayer ID: <span className={styles.text2}>123-45-6789</span>
              </li>
              <li>
                Address:{" "}
                <span className={styles.text2}>
                  {" "}
                  123 Main Street, London, UK
                </span>
              </li>
              <li>
                Tax Year: <span className={styles.text2}>1-33-4556</span>
              </li>
              <li>
                Filling date: <span className={styles.text2}>1-7-7733</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.text1}>Income Details</p>
          </div>

          <div className={styles.right}>
            <ul>
              <li>
                Total employes Income: <span className={styles.text2}> $4477</span>
              </li>
              <li>
              Self employes Income: <span className={styles.text2}>$6789</span>
              </li>
              <li>
                Other Income:{" "}
                <span className={styles.text2}>
                  {" "}
                $500 (intrest&divider)
                </span>
              </li>
              <li>
                Total Income: <span className={styles.text2}>4556</span>
              </li>
            
            </ul>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.text1}>Deduction & Expedtion</p>
          </div>

          <div className={styles.right}>
            <ul>
              <li>
                Available Expencess: <span className={styles.text2}> $1200</span>
              </li>
              <li>
                 Personal Allowed: <span className={styles.text2}>$1200</span>
              </li>
              <li>
                Netexable income:{" "}
                <span className={styles.text2}>
                  {" "}
                  $1200
                </span>
              </li>
            
            </ul>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.text1}>Personal Information</p>
          </div>

          <div className={styles.right}>
            <ul>
              <li>
                Name: <span className={styles.text2}>John Doe</span>
              </li>
              <li>
                Taxpayer ID: <span className={styles.text2}>123-45-6789</span>
              </li>
              <li>
                Address:{" "}
                <span className={styles.text2}>
                  {" "}
                  123 Main Street, London, UK
                </span>
              </li>
              <li>
                Tax Year: <span className={styles.text2}>1-33-4556</span>
              </li>
              <li>
                Filling date: <span className={styles.text2}>1-7-7733</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.text1}>Personal Information</p>
          </div>

          <div className={styles.right}>
            <ul>
              <li>
                Name: <span className={styles.text2}>John Doe</span>
              </li>
              <li>
                Taxpayer ID: <span className={styles.text2}>123-45-6789</span>
              </li>
              <li>
                Address:{" "}
                <span className={styles.text2}>
                  {" "}
                  123 Main Street, London, UK
                </span>
              </li>
              <li>
                Tax Year: <span className={styles.text2}>1-33-4556</span>
              </li>
              <li>
                Filling date: <span className={styles.text2}>1-7-7733</span>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.t1}>
          Message
        </p>
        <form onSubmit={handleSubmit}>
              
                    <textarea
                        id="description"
                        value={description}
                        onChange={handleChange}
                        rows="4"
                        cols="50"
                        placeholder="Enter your description here..."
                        required
                        className={styles.input}
                    />
               <div className={styles.submit}>
                   <button className={styles.approve} type="submit">Approve</button>
                <button className={styles.reject} type="submit">Reject and New Request</button>
               </div>
             
            </form>
      </div>
    </div>
  );
};

export default Page;
