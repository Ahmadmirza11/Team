import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import pic1 from "../../public/assets/gg.png";
const Page = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image src={pic1} alt=""></Image>
          <p style={{ marginTop: 10 }}>Accounteer Smart Cloud Accounting Ltd</p>
          <p style={{ marginTop: 10 }}>No Mambilla street, </p>
          <p style={{ marginTop: 10 }}>Federal Capital Territory, Abuja</p>
          <p style={{ marginTop: 10 }}>team@accounteer.com</p>
        </div>

        <div className={styles.box}>
          <div className={styles.left}>
            <p style={{ fontSize: 17, padding: 5 }}>Client Information</p>

            <div className={styles.box1}>
              <div className={styles.left1}>
                <p style={{ fontSize: 19, fontWeight: "bold" }}>Name:</p>
                <p style={{ fontSize: 19, fontWeight: "bold" }}>Address:</p>
              </div>
              <div className={styles.right1}>
                <p style={{ fontSize: 19, fontWeight: "bold" }}>
                  Al-Furqaan Farms Nigeria:
                </p>
                <p style={{ fontSize: 19 }}>
                  No 6 Enoma street, Ago-Palace way, :
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <p style={{ fontSize: 17, padding: 5, fontWeight: "bold" }}>
              Details
            </p>

            <div className={styles.box2}>
              <div className={styles.left2}>
                <p style={{ fontSize: 19, fontWeight: "bold" }}>Invoice no:</p>
                <p style={{ fontSize: 19, fontWeight: "bold" }}>
                  Invoice date :
                </p>
                <p style={{ fontSize: 19, fontWeight: "bold" }}>Invoicee du:</p>
              </div>
              <div className={styles.right1}>
                <p style={{ fontSize: 19, fontWeight: "bold" }}>
                  Al-Furqaan Farms Nigeria:
                </p>
                <p style={{ fontSize: 19 }}>
                  No 6 Enoma street, Ago-Palace way, :
                </p>
                <p style={{ fontSize: 19 }}>No 6 Enoma street, </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.balance}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingLeft: 10,
            }}
          >
            <p style={{ fontSize: 19, color: "grey", padding: 26 }}>
              Item/Description
            </p>

            <p style={{ fontSize: 19, color: "grey", padding: 26 }}>
              Description
            </p>

            <p style={{ fontSize: 19, color: "grey", padding: 26 }}>Amount</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 60,
            }}
          >
            <div>
              <p style={{ fontSize: 22 }}>Tax Balance:</p>
              <p
                style={{
                  fontSize: 16,
                  maxWidth: 400,
                  paddingLeft: 22,
                  paddingTop: 10,
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor
              </p>
            </div>

            <div>
              <p style={{ fontSize: 22 }}>Outstanding Tax Balance</p>
              <p>Total Payable</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: 22 }}>1500$</p>
              <p style={{ fontSize: 22 }}>1500$</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              height: 200,
            
            }}
          >

            <p style={{fontSize:18,padding:10,marginTop:5,marginLeft:10}}>bank Name:  GT Bank</p>
            <p style={{fontSize:18,padding:10,marginTop:5,marginLeft:10}}>Account Name:   Tapakal</p>
            <p style={{fontSize:18,padding:10,marginTop:5,marginLeft:10}}>bank Number: 3528328</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              height: 200,
      
              justifyContent: "space-around",
            }}
          >
            <p
              style={{
                fontSize: 19,
                fontWeight: "bolder",
                color: "skyblue",
                // padding: 12,
              }}
            >
              Note
            </p>
            <p
              style={{
                fontSize: 16,
                color: "grey",
                maxWidth: 400,
                padding: 12,
                textAlign: "center",
              }}
            >
              Please pay the sum total via bank transfer or cash deposit 2in the
              bank. All payments are due within 5 days.
            </p>

            <p
              style={{
                fontSize: 16,
                color: "grey",
                maxWidth: 400,
                padding: 12,
                textAlign: "center",
              }}
            >
              Late payments not received within the 5 days are subject to a fee
              of #1,000 per day. :
            </p>
          </div>
        </div>
      </div>



      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:33}}>
        <p style={{fontSize:18, color:"skyblue"}}>acb@gmail.com</p>
        <button style={{ width:300,height:40,background:"skyblue", fontWeight:"bold",color:"white"}}>Send Details</button>
      </div>
    </div>
  );
};

export default Page;
