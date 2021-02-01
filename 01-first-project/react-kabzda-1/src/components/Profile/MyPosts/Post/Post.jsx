import { React } from "react";
import s from "./Post.module.css";

const Post = (props) => {
  console.log(props.message);

  return (
    <div className={s.item}>
      <img src="https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-928x523.jpg" />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
