import React from 'react';
import styles from './Header.module.css';

export default function Header({ profile }) {
  return (
    <div className={styles.header}>
      <img src={profile} className={styles.profileimg} />
      <div className={styles.username}>manasii.shivarkar</div>
      
    </div>
  );
}