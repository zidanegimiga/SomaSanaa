import React, { useState, Suspense } from "react";
import Head from "next/head";
import Hero from "features/Home/Hero";
import Classes from "features/Home/Classes";
import Nav from "shared/Nav";
import {masterClassesData} from '../../data'
import Footer from "shared/Footer";

export default function Index({ payload, id }) { 
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
