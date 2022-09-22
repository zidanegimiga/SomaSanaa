import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Fuse from 'fuse.js';
import Button from 'shared/Button';
import styles from './Hero.module.scss';
import {FaSearch} from 'react-icons/fa';

const Hero = ({payload}) => {
  const [focus, setFocus] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [searchResults, setSearchResults] = useState([])
  
  const router = useRouter();

  // Search
  const options = {
    includeScore: true,
    keys: [
      {
        name: 'title',
        weight: 0.9
      },
      {
        name: 'instructor',
        weight: 0.8
      }
    ]
  }
  const fuse = new Fuse(payload, options)

  function handleSearchInput(e){
    setSearchModal(true);
    setSearchData(e.target.value);
    const results = fuse.search(searchData);
    setSearchResults(results);
    console.log("Results: ", results)    
  }

  const handleSearch = (e) =>{
    e.preventDefault();
    router.push(`/masterclass/${searchResults[0]?.id}`)
  }

  function handleBlur(){    
  }

  /** Routes user to random video page */
  function randomVideo(e){
    e.preventDefault();
    const randomId = Math.ceil(Math.random() * 10) - 1;
    const randomVideo = payload[randomId]
    router.push(`/masterclass/${randomVideo.id}`)
  }

  return (
    <>      
      <div className={styles.heroContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Online <br/> Masterclasses <br/> for All <span>Creatives</span></h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.subTitle}>
           SomaSanaa has a wide array of masterclasses<br/>
           from a selection of diverse and accomplished creatives.<br/>
           Elevate yourself with one of these videos.  
        </div>
        <div className={styles.buttonsContainer}>
          <Button text="SURPRISE ME!" action={randomVideo}/>
          <div className={styles.searchBar}>
            <form>
              <div className={styles.inputElements}>
                <input 
                  className={styles.searchBarInput}
                  placeholder={focus ? 'SEARCH BY INSTRUCTOR OR CATEGORY' : 'SEARCH'}
                  onFocus={() => setFocus(true)}
                  onBlur={handleBlur}
                  onChange={handleSearchInput}                 
                  name="searchInput"
                  value={searchData} 
                />
                <button 
                  className={styles.searchBarButton}
                  type='submit'
                  onClick={handleSearch}
                >
                  <FaSearch />
                </button>
                {
                  searchModal  &&
                  <div className={styles.searchResultModal}>
                    {
                      searchResults.length > 0 ?
                      searchResults?.map((result, index) => (                        
                        <div key={index} className={styles.searchResult}>
                          <Link href={`/masterclass/${result?.item.id}`}>
                            <p>{result?.item.title}</p>
                          </Link>
                          <span>By {result?.item.instructor}</span>
                        </div>
                      )) :
                      <div className={styles.searchResult}>No results found</div>
                    }
                  </div> 
                }
              </div>
            </form>          
          </div>
        </div>              
      </div>
    </>
  );
}

export default Hero