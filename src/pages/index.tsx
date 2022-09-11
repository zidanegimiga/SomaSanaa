import React from 'react';
import Head from 'next/head';
import Hero from 'features/Home/Hero';
import Classes from 'features/Home/Classes';

export default function Index() {
  return(
    <>
      <Head>
        <title> SomaSanaa</title>
      </Head>
      <Hero />
      <Classes />
    </>
  );  
}