import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Fuse from "fuse.js";
import styles from "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ payload }) => {
  const [focus, setFocus] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleCloseBtnClick (){
    setSearchData("");
    setSearchModal(false);
  }

  const router = useRouter();

  // Search
  const options = {
    includeScore: true,
    keys: [
      {
        name: "title",
        weight: 0.9
      },
      {
        name: "instructor",
        weight: 0.8
      },
      {
        name: "category",
        weight: 0.7
      }
    ],
  };
  const fuse = new Fuse(payload, options);

  function handleSearchInput(e) {
    setSearchModal(true);
    setSearchData(e.target.value);
    const results = fuse.search(searchData);
    setSearchResults(results);
    console.log("Results: ", results);
  }
  return (
    <>
      <div className={styles.inputElements}>
        <FaSearch />
        <input
          className={styles.searchBarInput}
          placeholder={focus ? "Search by instructor or category" : "Search"}
          onFocus={() => setFocus(true)}
          onChange={handleSearchInput}
          name="searchInput"
          value={searchData}
        />
        {searchModal && (
          <>
            <div className={styles.closeBtnContainer}>
              <div
                className={styles.closeBtn}
                onClick={handleCloseBtnClick}
              ></div>
            </div>
            <div className={styles.searchResultModal}>
              {searchResults.length > 0 ? (
                searchResults?.map((result, index) => (
                  <div key={index} className={styles.searchResult}>
                    <div onClick={()=> {router.push(`/masterclass/${result?.item.id}`); setSearchModal(false); setSearchData(""); setFocus(false);}}>
                      <p>{result?.item.title}</p>
                      <span>By {result?.item.instructor}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.searchResult}>No results found</div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchBar;
