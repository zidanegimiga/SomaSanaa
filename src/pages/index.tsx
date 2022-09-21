import React, { useState, Suspense } from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import Hero from "features/Home/Hero";
import Classes from "features/Home/Classes";
import Modal from 'react-modal';
import LessonPopUp from "features/Home/LessonPopUp";
import Nav from "features/Home/Nav";

Modal.setAppElement("#__next");

export default function Index({ payload, id }) { 
  const router = useRouter();
  const {lesson} = router.query;

  return (
    <>
      <Head>
        <title> SomaSanaa </title>
      </Head>
      <Nav />
      <Hero />
      <Suspense>
        <Classes data={payload}/>
      </Suspense>
      <Modal
        className="Modal"
        overlayClassName="Overlay"
        isOpen={!!router.query.lesson} 
        onRequestClose={() => router.push("/")}
      >
        <LessonPopUp payload={payload} id={router.query.lesson}/>
      </Modal>
    </>
  );
}

export async function getServerSideProps(context){
  const masterclasses = await fetch(`http://localhost:3000/api/masterclass/`);
  const payload = await masterclasses.json();

  return{
    props:{
      payload,
    }
  }
}
