import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head'
import LessonPopUp from 'features/Home/LessonPopUp';
import Nav from 'features/Home/Nav';
import styles from './lessons.module.scss'

export default function LessonPage({lessons}){
    const router = useRouter();
    const {lesson} = router.query;
    const masterclass = lessons?.find((masterclass) => masterclass?.id === lesson);
    
    return(
      <div> 
        <Head>
          <title>{masterclass?.title}</title>
        </Head>
        <Nav />        
        <div className={styles.lessonsPageContainer}>
          <LessonPopUp payload={lessons} id={lesson}/>
        </div>
      </div>
    )
}

export async function getServerSideProps(context){
  if(process.env.NODE_ENV === "development"){
    const masterclasses = await fetch(`http://localhost:3000/api/masterclass/`);
    const payload = await masterclasses.json();
    if (!payload) {
      return {
        notFound: true
      };
    }
  
    return {
      props: { lessons: payload }
    };    
  } 
  else{
    const masterclasses = await fetch(`${process.env.VERCEL_URL}/api/masterclass/`);
    const payload = await masterclasses.json();
    if (!payload) {
      return {
        notFound: true
      };
    }
  
    return {
      props: { lessons: payload }
    };   
  }
}
