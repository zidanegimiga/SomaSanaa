import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head'
import LessonPopUp from 'features/Home/LessonPopUp';
import Nav from 'features/Home/Nav';
import styles from './lessons.module.scss'

export default function LessonPage(){
    const router = useRouter();
    const {lesson} = router.query;
    const id = Number(lesson)
    
    return(
      <div> 
        <Head>
          <title>{mockData[id]?.title}</title>
        </Head>
        <Nav />
        <div className={styles.lessonsPageContainer}>
          <LessonPopUp mockData={mockData} id={id}/>
        </div>
      </div>
    )
}

const mockData = [
  {
    id: 1,
    title: "Decolonizing Art",
    author: "Sitawa Namwalie",
    description: "Sitawa Namwalie is an award-winning Kenyan poet, playwright, writer and performer who discovered her poetic gift in 2007 and by 2008 staged her first dramatised poetry show “Cut off My Tongue”, which was published as a book in 2009.",
    embedCode: "ycB29FkoylE"
  },
  {
    id: 2,
    title: "Accentuating body features through art, navigating a niche craft/industry & finding the right collaborations",
    author: "By Adrian and Naitemu",
    description: "Adrian Jankowiak and Naitemu Nyanjom are the founders of Nairobi Design week. In this masterclass they take you through a journey of lessons learnt through their production process. It gives insights and highlights of appreciating one…"
    ,embedCode: "4-079YIasck"
  },
  {
    id: 3,
    title: "Organizing an organization",
    author: "By Wambui Kinyua",
    description: "Meet Wambui Kinyua, a social scientist with a major interest in the creative sector. She works as the project/ community manager at Acacia collective as well as working as the curator at Santuri. She has over the years gathered a wealth of experience in project management…"
    ,embedCode: "-KysuBl2m_w"
  },
  {
    id: 4,
    title: "Accentuating body features through art, navigating a niche craft/industry & finding the right collaborations",
    author: "By Adrian and Naitemu",
    description: "Adrian Jankowiak and Naitemu Nyanjom are the founders of Nairobi Design week. In this masterclass they take you through a journey of lessons learnt through their production process. It gives insights and highlights of appreciating one…"
    ,embedCode: "jodhovumkHQ"
  },
  {
    id: 5,
    title: "Decolonizing Art",
    author: "Sitawa Namwalie",
    description: "Sitawa Namwalie is an award-winning Kenyan poet, playwright, writer and performer who discovered her poetic gift in 2007 and by 2008 staged her first dramatised poetry show “Cut off My Tongue”, which was published as a book in 2009."
    ,embedLink: "7vZmOF11P9A"
  },
  {
    id: 6,
    title: "Organizing an organization",
    author: "By Wambui Kinyua",
    description: "Meet Wambui Kinyua, a social scientist with a major interest in the creative sector. She works as the project/ community manager at Acacia collective as well as working as the curator at Santuri. She has over the years gathered a wealth of experience in project management…"
    ,embedCode: "kYVKCKyJe58"
  }	
];