import React, { useState } from 'react';
import styles from './Actions.module.css';
import styled from 'styled-components';

const Likeicon = styled.svg`
fill: ${(props) => (props.$liked ? 'red' : 'white')};
stroke: ${(props) => (props.$liked ? 'red' : 'black')};
  stroke-width: 2;
`;

const Saveicon = styled.svg`
fill: ${(props) => (props.$saved ? 'black' : 'white')};
stroke: ${(props) => (props.$saved ? 'black' : 'black')};
  stroke-width: 1;
`;


export default function Action(){
    const [like, setLike] = useState(false);
    const [likesCount, setLikesCount] = useState(50);

    const likeCounts = ()=>{
        console.log('like clicked');
        setLike(!like);

        if(like){
            setLikesCount(likesCount-1);
        }else{
            setLikesCount(likesCount+1);
        }
    }

    const [save, setSave] = useState(false);
    const saveClick=()=>{
        console.log("Save clicked");
        setSave(!save);
    }

    return(
        <div>
            <div className={styles.iconRow}>
                <div className={styles.lefticons}>
                    <Likeicon className={styles.icon} viewBox="0 0 24 24" $liked={like} onClick={likeCounts} ><path d="M7 3C4.23858 3 2 5.21619 2 7.95C2 10.157 2.87466 15.3947 11.4875 20.6903C11.7994 20.8821 12.2006 20.8821 12.5125 20.6903C21.1253 15.3947 22 10.157 22 7.95C22 5.21619 19.7614 3 17 3C14.2386 3 12 6 12 6C12 6 9.76142 3 7 3Z" strokeLinecap="round" strokeLinejoin="round"/></Likeicon>    
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M12 3c5.514 0 10 3.685 10 8.213 0 5.04-5.146 8.159-9.913 8.159-2.027 0-3.548-.439-4.548-.712l-4.004 1.196 1.252-2.9c-.952-1-2.787-2.588-2.787-5.743 0-4.528 4.486-8.213 10-8.213zm0-2c-6.628 0-12 4.573-12 10.213 0 2.39.932 4.591 2.427 6.164l-2.427 5.623 7.563-2.26c1.585.434 3.101.632 4.523.632 7.098.001 11.914-4.931 11.914-10.159 0-5.64-5.372-10.213-12-10.213z" /></svg>
                    <svg className={styles.icon} viewBox="0 0 24 24" ><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.03-.47-.09-.7l7-4.11c.53.5 1.23.81 2 .81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.03.47.09.7l-7 4.11c-.53-.5-1.23-.81-2-.81C2.34 8 1 9.34 1 11s1.34 3 3 3c.77 0 1.47-.31 2-.81l7.12 4.17c-.05.21 -.08.43-.08.64 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z" /></svg>
                </div>

                <Saveicon className={styles.saveicon} xmlns="http://www.w3.org/2000/svg" $saved ={save} onClick={saveClick} viewBox="0 0 24 24" ><path d="M5 3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V21.618C19 22.3296 18.1442 22.7349 17.5547 22.2764L12 18L6.44526 22.2764C5.85583 22.7349 5 22.3296 5 21.618V3Z"/></Saveicon>            
            </div>
            <div className={styles.likeCount}>{likesCount} likes</div>                
        </div>
    )

}