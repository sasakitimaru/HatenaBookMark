import React, { useContext, useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import Link from "next/link";
import { ModalContext } from "../Global/Layout";
import { addArticle, addBookMark, addComment } from "@/lib/DynamoAPI";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { v4 as v4uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { ArticleContext } from "@/pages";
import { getArticle } from "@/graphql/queries";

const Modal = () => {
  const { setModalVisible } = useContext(ModalContext);
  const [isSaved, setIsSaved] = useState(false);
  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const { articles, setArticles } = useContext(ArticleContext);

  const handleSubmit = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const referringArticle: any = await API.graphql(
      graphqlOperation(getArticle, { id: url })
    );
    // console.log("searchedArticle:", referringArticle);
    let liked = 0;
    if (referringArticle.data.getArticle) liked = referringArticle.data.getArticle.liked + 1;
    const email = user.attributes.email;
    const uuid = v4uuid();
    console.log(uuid);
    Promise.all([
      addComment({
        id: uuid,
        content: comment,
        userId: email,
        articleId: url,
      }),
      addBookMark({
        id: uuid,
        userId: email,
        articleId: url,
      }),

      addArticle({
        id: url,
        title: title,
        link: url,
        liked,
      }),
    ])
      .then((response) => {
        // console.log(response);
        setArticles((prev) => [
          ...prev,
          {
            id: url,
            title: title,
            link: url,
            liked,
          },
        ]);
        setUrl("");
        setComment("");
        setIsSaved(true);
        setTimeout(() => {
          setIsSaved(false);
          setModalVisible(false);
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      onClick={() => setModalVisible(false)}
      className={styles["modal-container"]}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles["modal"]}>
        <input
          className={styles["modal-input"]}
          type="text"
          placeholder="URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          className={styles["modal-input"]}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={styles["modal-input"]}
          type="text"
          placeholder="Comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button className={styles["modal-button"]} onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {isSaved && (
        <div className={styles["modal-check"]}>
          <div className={styles["modal-check-container"]}>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className={styles["modal-check-icon"]}
            />
            <span>Saved!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
