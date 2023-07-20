import React from "react";
import { Box, Skeleton } from "@mui/material";
import styles from "./Loading.module.scss";

const Loading = () => {
  const ArticleSkeleton = () => {
    return (
      <div className={styles["loading-container"]}>
        <Skeleton height={100} />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </div>
    );
  };
  return (
    <Box sx={{ width: 500 }} className={styles["loading-skeleton"]}>
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
    </Box>
  );
};

export default Loading;
