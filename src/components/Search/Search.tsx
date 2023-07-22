import React, { useEffect, useState, useRef } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { SearchGPT } from "@/lib/PublicAPI";
import { Alert, CircularProgress } from "@mui/material";
import ResultOfSearch from "../ResultOfSearch/ResultOfSearch";
import styles from "./Search.module.scss";
import { relative } from "path";
const Search = ({
  setAlertVisible,
}: {
  setAlertVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchWord, setSearchWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [titles, setTitles] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);

    if (searchWord.length < 2) return;

    searchTimeout.current = setTimeout(async () => {
      setIsLoading(true);
      const response = await SearchGPT({ text: searchWord });
      const content = response.choices[0].message.content;
      try {
        const validJson = content.replace(/'/g, '"');
        const _titles = JSON.parse(validJson);
        setTitles([..._titles]);
        setShowResult(true);
      } catch (e) {
        console.log(e);
        setAlertVisible(true);
      }
      setIsLoading(false);
    }, 500);
  }, [searchWord]);
  return (
    <div style={{ position: "relative" }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Articles"
        inputProps={{ "aria-label": "Search Articles" }}
        inputRef={inputRef}
        onChange={(e: any) => {
          setSearchWord(e.target.value);
        }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        {isLoading ? (
          <CircularProgress size={15} color="inherit" />
        ) : (
          <SearchIcon />
        )}
      </IconButton>
      <div className={styles["search-result-container"]}>
        {showResult && (
          <ResultOfSearch
            titles={titles}
            setShowResult={setShowResult}
            setSearchWord={setSearchWord}
            inputRef={inputRef}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
