import { React } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount="0" />
        <Post message="it's myfirst post" likesCount="23" />
      </div>
    </div>
  );
};

export default MyPosts;
