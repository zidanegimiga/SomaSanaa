import React, { useState, Suspense } from "react";
import Head from "next/head";
import Hero from "features/Home/Hero";
import Classes from "features/Home/Classes";
import Nav from "shared/Nav";
import {masterClassesData} from '../../data';
import Footer from "shared/Footer";
import styles from '../styles/classes.module.scss';

export default function Index({ payload, id }) { 
  return (
    <>
      <Head>
        <title> SomaSanaa </title>
      </Head>
      <Nav payload={payload}/>
      <Hero payload={payload}/>
      <Suspense>
        <div className={styles.classesWrapper}>
          <Classes data={payload} categoryTitle="Recently Added" />
          <Classes data={payload} categoryTitle="Organisation" category="organisation"/>
          <Classes data={payload} categoryTitle="Video Production" category="video-production"/>
          <Classes data={payload} categoryTitle="Music" category="music"/>
          <Classes data={payload} categoryTitle="Digital Art" category="digital-art"/>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context){
  const payload = masterClassesData;
  return{
    props:{
      payload,
    }
  }
}
