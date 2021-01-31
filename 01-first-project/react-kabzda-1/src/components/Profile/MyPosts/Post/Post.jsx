import { React } from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-928x523.jpg" />
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
