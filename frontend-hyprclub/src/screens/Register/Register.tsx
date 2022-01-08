/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FormEvent } from "react";
import { Form } from "react-bootstrap";
import ButtonItself from "../../components/loginSignUpBtn/ButtonItself";
import InputField from "../../components/inputField/Input";
import Logo from "../../components/logo/Logo";
import SocialLogins from "../../components/socialLogins/SocialLogins";
import "./register.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setDoc, doc, getFirestore , collection , query, where, getDocs } from "firebase/firestore";
import { firebaseApp } from "../../firebaseConfig";
import {
  useSelector,
  useDispatch,
  RootStateOrAny,
  DefaultRootState,
} from "react-redux";
import { useNavigate } from "react-router";
import { error } from "console";

const Register = () => {
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const [phonenumStatus, setPhonenumStatus] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    username: "",
    phone: "",
  });

  const [checked, setChecked] = useState(true);

  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
    console.log({data});
  };
  const navigate = useNavigate();

  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );

  //check whether username is unique or not

  const checkUsername = async (e : React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === "") {

    }else{
      try {
        // const q = query(
        //   collection(db,"hyprApps","users")
        // );
        // const docSnap = await getDocs(q);
        // console.log(docSnap);
        
      } catch (error) {
        console.error(error);
      }
    }
  };
  //check whether password match or not

  const checkPassword = () => {};

  //check for valid phone number

  const checkPhoneNumber = () => {};

  //check for accepting terms and conditions

  const checkTerms = () => {};

  // function for handle submit
  const handleSubmit = async (e : React.ChangeEvent<HTMLInputElement>) => {
   e.preventDefault();
    console.log({ data });
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredentials.user;
      const uid = user.uid;
      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;

      const personalDetailsInfo =  await setDoc(doc(db,  "hyprUsers", uid),{
        name: data.name,
        email: data.email,
        username: data.username,
        profileViewsCount : 0,
        phone: data.phone,
        category: "",
        age: 0,
        gender: "",
        flagCounter : 0,
        bio: "",
        isNsfw: false,
        verified: false,
        portfolioUrl: "",
        instagramUsername: "",
        twitterUsername: "",
        facebookProfileUrl: "",
        youtubeProfileUrl: "",
        interests: {},
        isCreator: "Not Applied",
        dateOfJoining: date, // todo add todays date
        isKycDone: false,
        nfts: {
          purchasedNft: [],
          createdNft: [],
          savedNft: [
            "/NFT's/3"    // remove this after few some time 
          ]
        },
        followers: [],
        following: [],
        followerCount: 0,
        followingCount: 0,
        posts: {
          createdPosts:[],
          savedPosts:[],
        },
        bankAccountDetails : {
          accountHolderName : "",
          accountType : "",
          ifscCode : "",
          accountNumber : "",
          branchName : "",
          accountHolderPhoneNumber : ""
        }
      });
     
      console.log("Account Created : " , user);
      console.log(personalDetailsInfo);
    } catch (error) {
      console.error(error);
    }
  };

  //function for google sign-in

  const googleSignIn = async () => {};

  //function for facebook sign-in
  const facebookSignIn = async () => {};

  useEffect(() => {
    const run = async () => {
      if (loggedIn && uid) {
        navigate("/market");
      } else {
      }
    };
    run();
  }, [loggedIn, uid, navigate]);

  return (
    <div>
      <Logo />
      <div className="container-sm registerPage">
        <div className="d-flex justify-content-center">
          <div className="registerForm">
            <h1 className="registerHeaderText">
              Join the Next Big Social Revolution
            </h1>
            <p className="subtitleText">
              Already have an account?{" "}
              <span className="createAccount">
                {" "}
                <Link to="/login" className="link">
                  Login
                </Link>{" "}
              </span>
            </p>
            <div className="mb-3">
              <Form >
                <div className="d-flex registeInputs">
                  <InputField
                    typeOfInput="text"
                    half={false}
                    lableText={"Name"}
                    name="name"
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                    }}
                  />
                  {/* <InputField  half={true} typeOfInput='text' lableText={"Last Name"}/> */}
                </div>
                <InputField
                  typeOfInput="email"
                  name="email"
                  half={false}
                  lableText={"Email Address:"}
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                  }}
                />
                <div className="d-flex registeInputs">
                  <InputField
                    typeOfInput="text"
                    half={true}
                    value={data.username}
                    lableText={"Username"}
                    name="username"
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                      checkUsername(e);
                    }}
                  />
                  <InputField
                    typeOfInput="tel"
                    half={true}
                    lableText={"Mobile Number"}
                    name="phone"
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                    }}
                  />
                </div>
                <div className="d-flex registeInputs">
                  <InputField
                    typeOfInput="text"
                    half={true}
                    lableText={"Password"}
                    name="password"
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                    }}
                  />
                  <InputField
                    typeOfInput="password"
                    half={true}
                    lableText={"Confirm Password"}
                    name="cpassword"
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                    }}
                  />
                </div>

                <div className="d-flex checkBoxTexts align-items-center">
                  <input id="terms" name="terms" type="checkbox" />
                  <label className="ms-2" htmlFor="terms">
                    Yes, I agree to all the{" "}
                    <a className="termsLink" href="#">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                <div className="d-flex checkBoxTexts align-items-center">
                  <input name="newsletter" id="newsletter" type="checkbox" />
                  <label className="ms-2" htmlFor="newsletter">
                    I would like to receive promotional emails from HyprClub
                  </label>
                </div>
                <div className="mt-3">
                  <ButtonItself btnPurpose={"Sign Up"} onClick={(e : React.ChangeEvent<HTMLInputElement>) =>{
                    handleSubmit(e)
                  }} />
                </div>
              </Form>
            </div>
            <SocialLogins
              registerGoogle={() => googleSignIn()}
              registerFacebook={() => facebookSignIn()}
              login={false}
              purpose={"Sign Up"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
