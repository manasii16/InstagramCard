import React from 'react';
import styles from './InstaPostCard.module.css';
import Profile from '../../assets/profile.jpeg';
import Header from '../header/Header';
import Image from '../image/Image';
import Actions from '../actions/Actions';
import Caption from '../caption/Caption';

export default function InstaPostCard() {
  return (
    <div className={styles.card}>
      <Header profile={Profile} />
      <Image image={Profile} />
      <Actions />
      <Caption />
    </div>
  );
}