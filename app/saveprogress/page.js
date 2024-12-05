'use client'
import React from "react";
import styles from "./save.module.css";
import { useRouter } from "next/navigation";


const Page = () => {
  const router = useRouter();
  const goToAbout = () => {
    router.push('/pdf2');
  };
  

  const data = [
    {
      field: "Employment Income",
      clientAmount: "£45,000",
      reviewedAmount: "£45,000 (Verified)",
    },
    {
      field: "Self-Employment Income",
      clientAmount: "£45,000",
      reviewedAmount: "£45,000 (Verified)",
    },
    {
      field: "Other Income (Interest)",
      clientAmount: "£45,000",
      reviewedAmount: "£45,000 (Verified)",
    },
    {
      field: "Allowable Expenses",
      clientAmount: "£45,000",
      reviewedAmount: "£49,000 (Corrected)",
    },
    {
      field: "Personal Allowance",
      clientAmount: "£45,000",
      reviewedAmount: "£45,000 (Verified)",
    },
  ];

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
            <h1 className={styles.titlee}>Step1</h1>
            <h1 className={styles.title}>Income and Expenses Review</h1>
          </div>

          <div className={styles.right}>
            <div className={styles.container1}>
        
              <div className={styles.tableContainer}>
                
                <table className={styles.table}>
                  
                  <thead>
                  
                    <tr>
                    
                      <th className={styles.th}>Field</th>
                      <th className={styles.th}>Client Amount Entered</th>
                      <th className={styles.th}>Amount Reviewed</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                    {data.map((row, index) => (
                      <tr key={index} className={styles.tr}>
                      
                        <td className={styles.td}>{row.field}</td>
                        <td className={styles.td}>{row.clientAmount}</td>
                        <td className={styles.td}>{row.reviewedAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.buttonContainer}>
             
                <button className={styles.submitButton}>Submit</button>{" "}
              </div>
            </div>
          </div>
        </div>


        {/* step2 */}
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={styles.titlee}>Step1</h1>
            <h1 className={styles.title}>Income and Expenses Review</h1>
          </div>

          <div className={styles.right}>
            <div className={styles.container1}>
        
              <div className={styles.tableContainer}>
                
                <table className={styles.table}>
                  
                  <thead>
                  
                    <tr>
                    
                      <th className={styles.th}>Field</th>
                      <th className={styles.th}>Client Amount Entered</th>
                      <th className={styles.th}>Amount Reviewed</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                    {data.map((row, index) => (
                      <tr key={index} className={styles.tr}>
                      
                        <td className={styles.td}>{row.field}</td>
                        <td className={styles.td}>{row.clientAmount}</td>
                        <td className={styles.td}>{row.reviewedAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.buttonContainer}>
             
                <button className={styles.submitButton}>Submit</button>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* step3 */}
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={styles.titlee}>Step1</h1>
            <h1 className={styles.title}>Income and Expenses Review</h1>
          </div>

          <div className={styles.right}>
            <div className={styles.container1}>
        
              <div className={styles.tableContainer}>
                
                <table className={styles.table}>
                  
                  <thead>
                  
                    <tr>
                    
                      <th className={styles.th}>Field</th>
                      <th className={styles.th}>Client Amount Entered</th>
                      <th className={styles.th}>Amount Reviewed</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                    {data.map((row, index) => (
                      <tr key={index} className={styles.tr}>
                      
                        <td className={styles.td}>{row.field}</td>
                        <td className={styles.td}>{row.clientAmount}</td>
                        <td className={styles.td}>{row.reviewedAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.buttonContainer}>
             
                <button className={styles.submitButton}  onClick={goToAbout}>Submit</button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
