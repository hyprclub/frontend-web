import React from "react";
import styles from "./Landing.module.css";
import PostButton from "../../components/postButton/PostButton";
import Header_login from "../../components/header/header_after_login/Header_login";
import { height } from "@mui/system";
import { Button } from "react-bootstrap";
import BG_STARS from "./BG_STARS.svg";
const Landing = () => {
  return (
    <>
    <Header_login></Header_login>
    {/* style={{ backgroundImage: `url(${BG_STARS})` }} */}
      <div className={styles.part1}  >
        <div className={styles.hypr}><span><a>HYPRCLUB</a>&nbsp;PRESENTS</span></div>
        <div className={styles.Revolution}>The Next <span>Social <br></br> Revolution</span></div>
        <div className={styles.SocialNetwork}>A Social Network where Creator Economy<br></br> meets the Metaverse.</div>
        <Button className={styles.postBtna}> <span className={styles.PostbtnTexta}>Get Early Access</span></Button>
        {/* <PostButton btnText='Get Early Access' small={false}></PostButton></div> */}
      </div>
    </>
  );
};
// width 120
// height55
export default Landing;
