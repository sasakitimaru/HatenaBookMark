import React from "react";
import styles from "./Comment.module.scss";
import { Avatar, Typography } from "@mui/material";
import { Comment } from "@/API";

const Comment = ({ comments }: { comments: Comment[] }) => {
  const currentWindowWidth = window.innerWidth;
  const width = currentWindowWidth > 768 ? "620px" : "320px";
  console.log(comments);
  return (
    <div className={styles["comment-container"]}>
      {comments.length > 0 &&
        comments.map((comment: Comment, index) => {
          return (
            <React.Fragment key={index}>
              <div className={styles["comment-row"]}>
                <Avatar sx={{ margin: 1 }} alt="Remy Sharp">
                  {comment.userId ? comment.userId[0].toUpperCase() : "U"}
                </Avatar>
                <div className={styles["comment-content"]} key={index}>
                  <Typography variant="body2" color="text.secondary">
                    {comment.content}
                  </Typography>
                  <Typography
                    sx={{ margin: 1.5 }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {comment.createdAt.slice(0, 10)}
                  </Typography>
                </div>
              </div>
              <hr className={styles["comment-hr"]} />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Comment;
