import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";
import Drawer from "../Drawer/Drawer";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import Search from "../Search/Search";
interface HeaderProps {
  setHeaderHeight: (height: number) => void;
  setAlertVisible: React.Dispatch<React.SetStateAction<boolean>>
}
type Anchor = "left" | "right" | "top" | "bottom";
const Header: React.FC<HeaderProps> = ({
  setHeaderHeight,
  setAlertVisible
}) => {
  const headerRef = React.useRef<HTMLElement>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const anchor: Anchor = "right";
  const [state, setState] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [headerRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollTop =
          window.scrollY || document.documentElement.scrollTop;
        setHeaderVisible(
          currentScrollTop <= 0 || currentScrollTop < lastScrollTop
        );
        setLastScrollTop(currentScrollTop);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollTop]);
  return (
    <header
      ref={headerRef}
      className={`${styles["header-container"]} ${
        headerVisible ? "" : styles["header-hidden"]
      } `}
    >
      <div className={`${styles["wrapper"]} ${styles["site-header__wrapper"]}`}>
        <Link href="/" className={styles["brand"]}>
          Home
        </Link>
        <Search setAlertVisible={setAlertVisible}/>
        <nav className={styles["nav"]}>
          <ul className={styles["nav__wrapper"]}>
            <li className={styles["nav__item"]}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuOpenSharpIcon />
              </Button>
            </li>
            {/* <li className={styles['nav__item']}><Link href="#">profile</Link></li> */}
          </ul>
        </nav>
      </div>
      <Drawer anchor={anchor} state={state} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default Header;
