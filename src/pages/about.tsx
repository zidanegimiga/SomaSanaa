import { FC, useState } from "react";
import Nav from "shared/Nav";
import Modal from "react-modal";
import { useRouter } from "next/router";
import { masterClassesData } from "../../data";
import styles from "../styles/about.module.scss";
import Button from "shared/Button";

Modal.setAppElement("#__next");

const About: FC = () => {
  const [videoModal, setVideoModal] = useState(false);
  const router = useRouter();
  const path = router.isReady;
  console.log("Path: ", path);
  const handleClick = () => {
    setVideoModal(true);
  };

  return (
    <>
      <Nav payload={masterClassesData} />
      <div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
          <h1>About Us</h1>
          <div className={styles.videoBtnsection}>
            <div className={styles.videoBtnsectionLeft}>
              <div className={styles.videoBtnContainer}>
                <button
                  className={styles.videoBtn}
                  onClick={handleClick}
                ></button>
              </div>
            </div>
            <div className={styles.videoBtnsectionRight}>
              <div className={styles.watchVideo}>
                <div className={styles.horizontalLine}></div>
                <p>Watch video</p>
              </div>
              <p>Our masterclasses cover many creative skillsets instructed by experienced professionals, making it easy for you to upskill yourself to a consistently high standard, and gain the with motivation and resilience you need to succeed.</p>
              <button className={styles.exploreBtn}>Explore our catalogue</button>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <p>
              <span>Somasanaa</span> is a product built by Creatives Garage.
            </p>
            <p>
              Creatives Garage is an organization based in Nairobi Kenya. We
              conceptualize, create, and distribute content fed by African
              narrative. We film scripts written by undiscovered talent, publish
              books by revolutionary women, host art exhibitions, record and
              distribute podcasts and music. We also develop tools that embrace
              emerging and existing tech to build the Kenya Creative community
            </p>
            <br />
            <p>
              Creatives Garage focuses majorly on being a creative agency that
              will focus on creating strategic engagement in culture collateral
              and processes with creative brand audiences. We will strive to be
              the only art society in Kenya that promotes the use of art to
              showcase the interconnection of various aspects in human activity
              to relay emotions, struggles and inspire the society to cope and
              overcome the society’s challenges.
            </p>
          </div>
        </div>
        <Modal
          className="Modal"
          overlayClassName="Overlay"
          isOpen={videoModal}
          onRequestClose={() => setVideoModal(false)}
        >
          <div className={styles.video}>
            <iframe
              src="https://player.vimeo.com/video/756287692?h=100&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="Somasanaa"
            ></iframe>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default About;
