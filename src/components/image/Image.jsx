import React from 'react';
import styles from './Image.module.css';

export default function Image({ image }) {
  return <img src={image} className={styles.img} />;
}