import React, { useState, Suspense } from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import Hero from "features/Home/Hero";
import Classes from "features/Home/Classes";
import Nav from "shared/Nav";
import {masterClassesData} from '../../data'

// Modal.setAppElement("#__next");

export default function Index({ payload, id }) { 
  const router = useRouter();
  // const {lesson} = router.query;
  // console.log(lesson)

  return (
    <>
      <Head>
        <title> SomaSanaa </title>
      </Head>
      <Nav payload={payload}/>
      <Hero payload={payload}/>
      <Suspense>
        <Classes data={payload} categoryTitle="Recently Added"/>
        <Classes data={payload} categoryTitle="Organisation" category="organisation"/>
        <Classes data={payload} categoryTitle="Video Production" category="video-production"/>
        <Classes data={payload} categoryTitle="Music" category="music"/>
        <Classes data={payload} categoryTitle="Non-fungible Tokens" category="nft"/>
      </Suspense>
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
