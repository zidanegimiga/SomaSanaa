import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footerWrapper}>
        <div className={styles.contacts}>
          <h4>Contact details</h4>
          <div className={styles.horizontalLine}></div>
          <div className={styles.contactItemsWrapper}>
            <div className={styles.contactItem}>
              <div className={styles.addressContactIcon}></div>
              <div className={styles.contactData}>
                <h5>Address:</h5>
                <p>Gigiri Courtyard, Gigiri lane,</p>
                <p>34064-00100 Nairobi, Kenya</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.phoneContactIcon}></div>
              <div className={styles.contactData}>
                <h5>Phone:</h5>
                <p>+254 113 196 118</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.emailContactIcon}></div>
              <div className={styles.contactData}>
                <h5>E-mail:</h5>
                <p>programmes@creativesgarage.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialMediaLinks}>
          <h4>Social Media</h4>
          <div className={styles.horizontalLine}></div>
          <div className={styles.smIconsGroup}>
            <div className={styles.facebook}></div>
            <div className={styles.instagram}></div>
            <div className={styles.whatsapp}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
