import React from "react";
import style from "./index.module.css";
export default function RankBody({ userId, body, title }) {
  return (
    <div className={style.rankBody}>
      <h1>{userId}</h1>
      <p>{body}</p>
      <p>{title}</p>
    </div>
  );
}
