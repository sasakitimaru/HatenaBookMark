import React, { useContext } from "react";
import {
  Drawer as MUIDrawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MUISwitch from "../MUISwitch/MUISwitch";
import { CurrentPage, CurrentPageContext } from "@/pages";
import { Auth } from "aws-amplify";

type Anchor = "left" | "right" | "top" | "bottom";
type PageItem = {
  text: string;
  icon: React.ReactElement;
  pageType: CurrentPage;
};

interface DrawerProps {
  anchor: Anchor;
  state: {
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
  };
  toggleDrawer: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
const Drawer: React.FC<DrawerProps> = ({ anchor, state, toggleDrawer }) => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const pageItems: PageItem[] = [
    { text: "Ranking", icon: <EmojiEventsIcon />, pageType: "ranking" },
    {
      text: "Your bookmark",
      icon: <BookmarkAddedIcon />,
      pageType: "bookMark",
    },
  ];
  const handleChangePage = (page: CurrentPage) => {
    setCurrentPage(page);
  };
  const handleSignOut = async () => {
    await Auth.signOut();
  };
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pageItems.map((item, index) => (
          <ListItem
            onClick={() => handleChangePage(item.pageType)}
            key={item.text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{ text: "Sign Out", icon: <ExitToAppIcon /> }].map((item, index) => (
          <ListItem
            onClick={() => item.text === "Sign Out" && handleSignOut()}
            key={item.text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <ListItemIcon>{item.icon}</ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <MUISwitch />
      </List>
    </Box>
  );
  return (
    <MUIDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
    //   onOpen={toggleDrawer(anchor, true)}
    >
      {list(anchor)}
    </MUIDrawer>
  );
};

export default Drawer;
