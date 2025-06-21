import React from 'react';
import styles from './Caption.module.css';

export default function Caption(){
  console.log('caption component');
  return (
    <div className={styles.caption}>
      <b>manasii.shivarkar</b> Heyy!
    </div>
  );
}
