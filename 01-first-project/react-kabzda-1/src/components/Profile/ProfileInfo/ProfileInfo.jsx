import { React } from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      {" "}
      <div>
        <img src="https://i.imgur.com/bHZAuNZ.jpg" width="1024" height="200" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
