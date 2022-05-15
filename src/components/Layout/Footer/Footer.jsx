import React, { Fragment } from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <Fragment>
      <footer className={styles.footer}>
        <h5 className={styles["footer-title"]}>
          @ {new Date().getFullYear()} Meat SteakHouse
        </h5>
        <div className={styles["footer-block__icons"]}>
          <span className={styles.facebook}>
            <i className="bi bi-facebook"></i>
          </span>
          <span className={styles.twitter}>
            <i className="bi bi-twitter"></i>
          </span>
          <span className={styles.instagram}>
            <i className="bi bi-instagram"></i>
          </span>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
