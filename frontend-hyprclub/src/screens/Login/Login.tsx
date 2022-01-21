/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ButtonItself from "../../components/loginSignUpBtn/ButtonItself";
import InputField from "../../components/inputField/Input";
import Logo from "../../components/logo/Logo";
import SocialLogins from "../../components/socialLogins/SocialLogins";
import "./login.css";
import { useSelector, RootStateOrAny } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { firebaseApp } from "../../firebaseConfig";
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );
  const userData = useSelector((state: RootStateOrAny) => state.userData);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const navigate = useNavigate();

  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
    console.log({ data });
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    await signInWithPopup(auth, provider)
      .then((userCredentials) => {
        const uid = userCredentials.user.uid;
        const name = userCredentials.user.displayName;
        const email = userCredentials.user.email;
        const photoUrl = userCredentials.user.photoURL;
        const phone = userCredentials.user.phoneNumber;
        getDoc(doc(db, "hyprUsers", uid))
          .then((querySnapshot) => {
            if (querySnapshot.exists()) {
              console.log("User Data Exits");
            } else {
              console.log("Set Doc");
              const username = "Hello312";
              setDoc(doc(db, "hyprUsers", uid), {
                name: name,
                email: email,
                username: "hello", //add username here
                profileViewsCount: 0,
                phone: phone,
                uid: uid,
                newsletterSubscription: false,
                category: "",
                age: "",
                gender: "",
                flagCounter: 0,
                profileUrl: "",
                bio: "",
                isNsfw: false,
                verified: false,
                socials: {
                  portfolioUrl: "",
                  instagramUsername: "",
                  twitterUsername: "",
                  facebookProfileUrl: "",
                  youtubeProfileUrl: "",
                },
                interests: {},
                isCreator: "Not Applied",
                dateOfJoining: date,
                isKycDone: false,
                nfts: {
                  purchasedNft: [],
                  createdNft: [],
                  savedNft: [],
                },
                followers: [],
                following: [],
                followerCount: 0,
                followingCount: 0,
                posts: {
                  createdPosts: [],
                  savedPosts: [],
                },
                bankAccountDetails: {
                  accountHolderName: "",
                  accountType: "",
                  ifscCode: "",
                  accountNumber: "",
                  branchName: "",
                  accountHolderPhoneNumber: "",
                },
              }).then((snap) => {
                window.location.reload();
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const facebookSignIn = async () => {};

  const handleSubmit = async (e: React.FormEvent<any>) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        console.log(userCredentials.user);
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/user-not-found") {
          console.log("User Not Found");
        } else if (error.code === "auth/invalid-email") {
          console.log("Please Enter Valid Email Address");
        } else {
          console.log("Invalid Credentials");
        }
      });
  };

  useEffect(() => {
    if (loggedIn && userData.username) {
      navigate("/" + userData.username);

      console.log(userData.username);
    } else {
      console.log("No username");
    }
  }, [navigate, loggedIn, uid, userData]);

  const forgetPassword = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("Forget Password");
  };

  return (
    <div>
      <Logo />
      <div className="container loginPage">
        <div className="d-flex justify-content-center">
          <div className="loginForm">
            <h1 className="loginHeaderText">
              Join the Next Big Social Revolution
            </h1>
            <p className="subtitleText">
              New to HyprClub?{" "}
              <span className="createAccount">
                {" "}
                <Link to="/register" className="link">
                  Create Account
                </Link>{" "}
              </span>
            </p>
            <Form
              action="#"
              onSubmit={(e: React.FormEvent<any>) => {
                handleSubmit(e);
              }}
            >
              <InputField
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  updateState(e)
                }
                typeOfInput="email"
                half={false}
                name="email"
                lableText={"Email Address"}
                required
              />
              <InputField
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  updateState(e)
                }
                typeOfInput="password"
                name="password"
                half={false}
                lableText={"Password"}
                required
              />
              <p className="forgotPassword">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    forgetPassword(e);
                  }}
                  className="link"
                >
                  Forgot Password?
                </a>
              </p>
              <ButtonItself
                onClick={(e: React.FormEvent<HTMLInputElement>) =>
                  handleSubmit(e)
                }
                btnPurpose={"Login"}
              />
            </Form>
            <div className="social">
              <SocialLogins
                loginGoogle={googleSignIn}
                loginFacebook={() => facebookSignIn}
                login={true}
                purpose={"Login"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
