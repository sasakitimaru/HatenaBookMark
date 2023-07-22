import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { DisplayModeContext } from "@/pages/_app";
import { useRouter } from "next/router";
const ResultOfSearch = ({
  titles,
  setShowResult,
  setSearchWord,
  inputRef,
}: {
  titles: string[];
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
}) => {
  const { displayMode } = React.useContext(DisplayModeContext);
  const bgcolor = displayMode === "dark" ? "grey.800" : "grey.100";
  const color = displayMode === "dark" ? "grey.100" : "grey.800";
  console.log(inputRef);
  const router = useRouter();
  const handleRouting = (title: string) => {
    router.push(`/articles/${title}`);
    setSearchWord("");
    if (inputRef.current) inputRef.current.value = "";
    setShowResult(false);
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor, color }}>
      {!titles ? (
        <ListItem alignItems="flex-start">
          <ListItemText primary="There are no result" />
        </ListItem>
      ) : (
        titles.map((title, index) => (
          <React.Fragment key={index}>
            <ListItem
              alignItems="flex-start"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                handleRouting(title);
              }}
            >
              <ListItemText primary={title} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))
      )}
      <ListItem
        sx={{ cursor: "pointer" }}
        onClick={() => {
          setShowResult(false);
        }}
      >
        <ListItemText primary="Close" />
      </ListItem>
    </List>
  );
};
export default ResultOfSearch;
