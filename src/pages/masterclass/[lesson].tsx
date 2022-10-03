import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "shared/Nav";
import { ReadMore } from "features/Home/LessonPopUp";
import YoutubeEmbedder from "features/Home/YoutubeEmbedder";
import styles from "../../styles/lessons.module.scss";
import { masterClassesData } from "../../../data";
import ClassCard from "features/Home/ClassCard";

export default function LessonPage({ lessons }) {
  const router = useRouter();
  const { lesson } = router.query;
  const masterclass = lessons?.find(
    (masterclass) => masterclass?.id === lesson
  );
  const payload = masterClassesData;
  const suggestedVideos = masterClassesData.filter((video) => video?.category === masterclass?.category)

  return (
    <div>
      <Head>
        <title>
          {masterclass?.instructor} - {masterclass?.title} 
        </title>
      </Head>
      <Nav payload={payload} />
      <div className={styles.lessonsPageContainer}>
        <div className={styles.navigator}>
          <Link href="/">
            <span>Home</span>
          </Link>
          <p>&gt;&gt; </p>
          <Link href={`/masterclass/${masterclass?.id}`}>
            <span> {masterclass?.title.slice(0, 25)}...</span>
          </Link>
        </div>
        <div className={styles.lessonsContentContainer}>
          <YoutubeEmbedder embedId={masterclass?.id} />
          <div className={styles.bodyContainer}>
            <div className={styles.pageBody}>
              <div className={styles.descriptionContainer}>
                <h3>{masterclass?.title}</h3>
                <hr />
                <h4>{masterclass?.instructor}</h4>
                <ReadMore>{masterclass?.description}</ReadMore>
              </div>
            </div>            
            <div className={styles.playlist}>
              <h3>More from this series</h3>
              <div className={styles.seriesVideos}>
                <div className={styles.seriesVideo}>
                  <div className={styles.seriesVideoImageContainer}>
                    <Image width={120} height={80} src="/CardImage.png" alt={`Image of the suggestion`}/>
                  </div>
                  <div className={styles.seriesVideoBody}>
                    <h5>Part 1 of 3</h5>
                    <p>Ochieng Oneko</p>
                  </div>
                </div>
                <div className={styles.seriesVideo}>
                  <div className={styles.seriesVideoImageContainer}>
                    <Image width={120} height={80} src="/CardImage.png" alt={`Image of the suggestion`}/>
                  </div>
                  <div className={styles.seriesVideoBody}>
                    <h5>Part 1 of 3</h5>
                    <p>Ochieng Oneko</p>
                  </div>
                </div>
                <div className={styles.seriesVideo}>
                  <div className={styles.seriesVideoImageContainer}>
                    <Image width={120} height={80} src="/CardImage.png" alt={`Image of the suggestion`}/>
                  </div>
                  <div className={styles.seriesVideoBody}>
                    <h5>Part 1 of 3</h5>
                    <p>Ochieng Oneko</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.suggestedVideosContainer}>
            <h3> Suggested videos</h3>
            <p>More from the same category</p>
            <div className={styles.suggestedVideos}>
              {
                suggestedVideos.map((video, index) =>(
                  <div key={index} className={styles.suggestedVideo}>
                    <ClassCard data={video}/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const payload = masterClassesData;
  return {
    props: {
      lessons: payload,
    },
  };
}
