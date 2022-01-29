import clsx from "clsx";
import { doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { ArrowLeft, X } from "phosphor-react";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { firebaseApp } from "../../../../firebaseConfig";
import { MODAL_CLOSE_SUCCESS } from "../../../../redux/constants/profileModals";
import GradientBorder from "../../../gradientBorderBtn/GradientBorder";
import InputField from "../../../inputField/Input";
import styles from "./modal.module.css";

const Modal = () => {
  const [modals, setModals] = useState({
    modal1: true,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
  });

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: MODAL_CLOSE_SUCCESS });
    setModals({
      modal1: true,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
    });
  };

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;

  const userData = useSelector((state: RootStateOrAny) => state?.userData);
  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );
  const [phoneCorrect, setPhoneCorrect] = useState(true);
  const [data, setData] = useState({
    instagramUsername: userData.socials.instagramUsername,
    twitterUsername: userData.socials.twitterUsername,
    youtubeProfileUrl: userData.socials.youtubeUrl,
    portfolioUrl: userData.socials.portfolioUrl,
    accountHolderName: userData.bankDetails.accountHolderName,
    accountNumber: userData.bankDetails.accountNumber,
    ifscCode: userData.bankDetails.ifscCode,
    accountType: userData.bankDetails.accountType,
    accountHolderPhoneNumber: userData.bankDetails.accountHolderPhoneNumber,
    docType: "adhar",
    documentNumber: ""
  });

  // handle update state changes
  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
    console.log({ data });
  };
  
  // Document upload
  const storage = getStorage(firebaseApp);
  const [document, setDocument] = useState<any>(null);
  const uploadDocument = async (event: any) => {
    const doc = event.target.files[0];
    if (!doc) return;
    setDocument(document);
    console.log(doc.size);
    if (doc.size >= 5242880){
      console.log("File Size Too Big");
    } else {
      const fileName = doc.name;
      const fileExtension = fileName.split('.').pop();
      const storagePFref = ref(
        storage,
        "users/" + userData.uid + "/Kyc_Details/" + data.docType + "." + fileExtension
      );
      await uploadBytesResumable(storagePFref, doc)
        .then((result) => {
          console.log(result.state);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // Signature upload
  const [signature, setSign] = useState<any>(null);
  const uploadSignature = async (event: any) => {
    const sign = event.target.files[0];
    if (!sign) return;
    setSign(signature);
    console.log(sign.size);
    if (sign.size >= 5242880) {
      console.log("File Size Too Big");
    } else {
      const fileName = sign.name;
      const fileExtension = fileName.split('.').pop();
      const storagePFref = ref(
        storage,
        "users/" + userData.uid + "/Kyc_Details/" + "sign." + fileExtension
      );
      await uploadBytesResumable(storagePFref, sign)
        .then((result) => {
          console.log(result.state);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const dragOver = (e: any) => {
    e.preventDefault();
    console.log("dragged");
  };

  const dragEnter = (e: any) => {
    e.preventDefault();
  };

  const dragLeave = (e: any) => {
    e.preventDefault();
  };

  const fileDrop = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
  };

  const dragOver1 = (e: any) => {
    e.preventDefault();
    console.log("dragged");
  };

  const dragEnter1 = (e: any) => {
    e.preventDefault();
  };

  const dragLeave1 = (e: any) => {
    e.preventDefault();
  };

  const fileDrop1 = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
    console.log("drag1");
  };
  
  
  // check for valid phone number or not.
  const checkPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || e.target.value.length > 10) {
      setPhoneCorrect(true);
    } else {
      const phoneValidString = "(0|91)?[7-9][0-9]{9}";
      if (e.target.value.match(phoneValidString)) {
        console.log("Phone num correct");
        setPhoneCorrect(false);
      } else {
        console.log("Phone Num not correct");
        setPhoneCorrect(true);
      }
    }
  };

  const makeRequestId = (len: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characterLengths = characters.length;
    for (let i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * characterLengths));
    }
    return result;
  }

  const handleSubmit = async () => {
    const db = getFirestore(firebaseApp);
    const ref = doc(db, "hyprUsers", uid);
    if (phoneCorrect === true) {
      console.log("Please Enter Correct Phone Number");
    } else {
      await updateDoc(ref, {
        socials: {
          instagramUsername: data.instagramUsername,
          twitterUsername: data.twitterUsername,
          youtubeProfileUrl: data.youtubeProfileUrl,
          portfolioUrl: data.portfolioUrl
        },
        bankAccountDetails: {
          accountHolderName: data.accountHolderName,
          accountNumber: data.accountNumber,
          ifscCode: data.ifscCode,
          accountType: data.accountType,
          accountHolderPhoneNumber: data.accountHolderPhoneNumber
        },
        creatorApproval: {
          approvalStatus: "Applied"
        }
      })
        .then(() => {
          console.log("Data Updated");
        })
        .catch((error) => {
          console.log(error);
        });
    }

  };
  const updateRequest = async () => {
    const db = getFirestore(firebaseApp);
    const requestId = "bug_id_" + makeRequestId(26);
    await setDoc(doc(db, "creatorRequest", requestId), {
      dateOfReporting: date,
      reporterEmailId: userData?.email,
      reporterUid: userData?.uid,
      documentNumber: data.documentNumber
    })
      .then(() => {
        console.log("Updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div className={clsx("container", styles.modalContent)}>
          <div
            className={clsx(
              styles.firstModal,
              modals.modal1 ? styles.show : styles.hide
            )}
          >
            <p className={styles.crossFirst}>
              <X onClick={closeModal} size={30} weight="bold" />
            </p>
            <div className={styles.topTitleDiv}>
              <h2 className={styles.gradientTitle}>
                Upgrade to a Creator Account
              </h2>
              <p className={styles.topDesc}>
                With a creator account, you can unlock a plethora of benefits
                and extra features.
              </p>
            </div>

            <div
              className={clsx("row align-items-center", styles.sellYourNftDiv)}
            >
              <div className={clsx("col-md-6")}>
                <h3 className={styles.sellYourNftTitle}>
                  Sell your work as NFT
                </h3>
                <p className={styles.sellYourNftdesc}>
                  You can sell your content - be it photography, drawings,
                  gaming clips or even videos- as NFTs.
                </p>
              </div>
              <div className={clsx("col-md-6", styles.sellYourNftImg)}>
                <img
                  className={styles.imgWithMoney}
                  src="/images/sellYourwork.png"
                  alt="heu"
                />
              </div>
            </div>

            <div
              className={clsx("row align-items-center", styles.sellYourNftDiv)}
            >
              <div className={clsx("col-md-6")}></div>
              <div className={clsx("col-md-6", styles.analyse)}>
                <h3 className={styles.analyseTitle}>
                  Analyse your progress with a personalised Creator Dashboard
                </h3>
                <p className={styles.analysedesc}>
                  You can sell your content - be it photography, drawings,
                  gaming clips or even videos- as NFTs.
                </p>
              </div>
            </div>

            <div className={styles.bottom}>
              <p className={styles.comingSoon}>
                Many more features are coming soon!
              </p>
              <p className={styles.comingSoonDesc}>
                With a creator account, you can unlock a plethora of benefits
                and extra features.
              </p>

              <GradientBorder
                onClick={() =>
                  setModals({
                    modal1: false,
                    modal2: true,
                    modal3: false,
                    modal4: false,
                    modal5: false,
                  })
                }
                text="Upgrade to Creator Account"
              />
            </div>
          </div>

          <div
            className={clsx(
              styles.secondModal,
              modals.modal2 ? styles.show : styles.hide
            )}
          >
            <p className={styles.cross}>
              <ArrowLeft
                onClick={() =>
                  setModals({
                    modal1: true,
                    modal2: false,
                    modal3: false,
                    modal4: false,
                    modal5: false,
                  })
                }
                size={30}
                weight="bold"
              />
              <X onClick={closeModal} size={30} weight="bold" />
            </p>
            <h2 className={styles.gradientTitle}>
              Upgrade to a Creator Account
            </h2>

            {/* <div className={styles.modal2Btn}>
                                        <GradientBorder onClick={() => setModals({modal1: false, modal2: false, modal3:true, modal4:false, modal5:false})} text='Next'/>
                                    </div> */}

            <p className={styles.secTopDesc}>
              We check each creator application manually to ensure authenticity
              on the platform. Don’t worry, you don’t need to have a huge
              following to be a creator, we welcome all, small or big
              influencers.{" "}
            </p>
            <div className={styles.step1}>
              <p className={styles.step1Title}>STEP 1: SOCIAL MEDIA HANDLES</p>
              <form action="#">
                <div className={styles.inputs}>
                  <InputField
                    required
                    garyBold
                    name="instagramUsername"
                    lableText="INSTAGRAM"
                    value={data?.instagramUsername}
                    typeOfInput="text"
                    placeholder="Enter Instagram Username"
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                    }}
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                  <InputField
                    required
                    garyBold
                    name="twitterUsername"
                    lableText="TWITTER"
                    value={data?.twitterUsername}
                    typeOfInput="text"
                    placeholder="Enter Link..."
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                    }}
                  />
                  <InputField
                    required
                    garyBold
                    name="youtubeProfileUrl"
                    lableText="YOUTUBE"
                    value={data?.youtubeProfileUrl}
                    typeOfInput="text"
                    placeholder="Enter Link..."
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                    }}
                  />
                  <InputField
                    required
                    garyBold
                    name="portfolioUrl"
                    lableText="YOUR PERSONAL WEBSITE"
                    value={data?.portfolioUrl}
                    typeOfInput="text"
                    placeholder="Enter Link..."
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                    }}
                  />
                </div>

                <div className={styles.modal2Btn}>
                  <GradientBorder
                    onClick={(e: React.ChangeEvent<any>) => {
                      e.preventDefault();
                      setModals({
                        modal1: false,
                        modal2: false,
                        modal3: true,
                        modal4: false,
                        modal5: false,
                      });
                    }}
                    text="Next"
                  />
                </div>
              </form>
            </div>
          </div>

          <div
            className={clsx(
              styles.thirdModal,
              modals.modal3 ? styles.show : styles.hide
            )}
          >
            <p className={styles.cross}>
              <ArrowLeft
                onClick={() =>
                  setModals({
                    modal1: false,
                    modal2: true,
                    modal3: false,
                    modal4: false,
                    modal5: false,
                  })
                }
                size={30}
                weight="bold"
              />
              <X onClick={closeModal} size={30} weight="bold" />
            </p>
            <h2 className={styles.gradientTitle}>
              Upgrade to a Creator Account
            </h2>
            <p className={styles.secTopDesc}>
              We check each creator application manually to ensure authenticity
              on the platform. Don’t worry, you don’t need to have a huge
              following to be a creator, we welcome all, small or big
              influencers.{" "}
            </p>
            <div className={styles.step2}>
              <p className={styles.step1Title}>STEP 2: SUBMIT BANK DETAILS</p>
              <div className={styles.inputs}>
                <InputField
                  className="mb-3"
                  garyBold
                  name="accountHolderName"
                  lableText="NAME OF THE ACCOUNT HOLDER"
                  value={data?.accountHolderName}
                  typeOfInput="text"
                  placeholder="eg. John Maxwell"
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                  }}
                />
                <InputField
                  className="mb-3"
                  garyBold
                  name="accountNumber"
                  lableText="ACCOUNT NUMBER"
                  value={data?.accountNumber}
                  typeOfInput="number"
                  placeholder="eg. 1234567890"
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                  }}
                />
                <InputField
                  className="mb-3"
                  garyBold
                  name="ifscCode"
                  lableText="IFSC CODE"
                  value={data?.ifscCode}
                  typeOfInput="text"
                  placeholder="eg. HYPR09879854"
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                  }}
                />

                <div
                  className={clsx(
                    "d-flex align-items-center",
                    styles.savingsAndCurrent
                  )}
                >
                  <div className={clsx(styles.selectDiv, "halfWidth")}>
                    <label className="grayBold">ACCOUNT TYPE</label>
                    <Form.Select
                      name="accountType"
                      value={data?.accountType}
                      className={clsx(styles.select, "mb-3")}
                      aria-label="Default select example"
                      onChange={(e: React.ChangeEvent<any>) => {
                        updateState(e);
                      }}
                    >
                      <option value="savings">SAVINGS</option>
                      <option value="current">CURRENT</option>
                    </Form.Select>
                  </div>
                  <InputField
                    className="mb-3"
                    half
                    garyBold
                    name="accountHolderPhoneNumber"
                    lableText="PHONE NUMBER"
                    value={data?.accountHolderPhoneNumber}
                    typeOfInput="number"
                    placeholder="+91 1234567890"
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                      checkPhoneNumber(e);
                    }}
                  />
                </div>
              </div>

              <div className={styles.modal2Btn}>
                <GradientBorder
                  onClick={() =>
                    setModals({
                      modal1: false,
                      modal2: false,
                      modal3: false,
                      modal4: true,
                      modal5: false,
                    })
                  }
                  text="Next"
                />
              </div>
            </div>
          </div>

          <div
            className={clsx(
              styles.fourthModal,
              modals.modal4 ? styles.show : styles.hide
            )}
          >
            <p className={styles.cross}>
              <ArrowLeft
                onClick={() =>
                  setModals({
                    modal1: false,
                    modal2: false,
                    modal3: true,
                    modal4: false,
                    modal5: false,
                  })
                }
                size={30}
                weight="bold"
              />
              <X onClick={closeModal} size={30} weight="bold" />
            </p>
            <h2 className={styles.gradientTitle}>
              Upgrade to a Creator Account
            </h2>
            <p className={styles.secTopDesc}>
              We check each creator application manually to ensure authenticity
              on the platform. Don’t worry, you don’t need to have a huge
              following to be a creator, we welcome all, small or big
              influencers.{" "}
            </p>
            <div className={styles.step2}>
              <p className={styles.step1Title}>STEP 3: COMPLETE KYC</p>
              <div className={styles.inputs}>
                <div
                  className={clsx(
                    "d-flex align-items-center",
                    styles.savingsAndCurrent
                  )}
                >
                  <div className={clsx(styles.selectDiv, "halfWidth")}>
                    <label className="grayBold">CHOOSE DOCUMENT TYPE</label>
                    <Form.Select
                      name="docType"
                      className={clsx(styles.select, "mb-3")}
                      aria-label="Default select example"
                      onChange={(e: React.ChangeEvent<any>) => {
                        updateState(e);
                      }}
                    >
                      <option value="adhar">ADHAR CARD</option>
                      <option value="pan">PAN CARD</option>
                    </Form.Select>
                  </div>
                  <InputField
                    className="mb-3"
                    half
                    garyBold
                    name="documentNumber"
                    lableText="ENTER DOCUMENT NUMBER"
                    value={data?.documentNumber}
                    typeOfInput="text"
                    placeholder=""
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                    }}
                  />
                </div>

                <div className={styles.verificationDocumentDiv}>
                  <h3 className={styles.uploadText}>
                    Upload verification document
                  </h3>
                  <p className={styles.dragndrop}>
                    Drag or choose your file to upload
                  </p>
                  <input
                    accept=".jpeg,.jpg,.png,.pdf, image/jpeg,image/png"
                    id="documentVerficationInput"
                    type="file"
                    style={{ display: "none" }}
                    onChange={uploadDocument}
                  />
                  <label
                    onDragOver={dragOver1}
                    onDragEnter={dragEnter1}
                    onDragLeave={dragLeave1}
                    onDrop={fileDrop1}
                    className="w-100"
                    role="button"
                    htmlFor="documentVerficationInput"
                  >
                    <div
                      className={clsx(
                        styles.dragField,
                        "d-flex justify-content-center flex-column align-items-center"
                      )}
                    >
                      <i className="bi bi-file-earmark-arrow-up"></i>
                      <p className={styles.pngorjpeg}>
                        PNG, JPG or PDF. Max 5MB.
                      </p>
                    </div>
                  </label>
                </div>

                <div className={styles.verificationDocumentDiv}>
                  <h3 className={styles.uploadText}>
                    Upload a signed photograph
                  </h3>
                  <p className={styles.dragndrop}>
                    Drag or choose your file to upload
                  </p>
                  <input
                    accept=".jpeg,.jpg,.png,.pdf, image/jpeg,image/png"
                    id="documentVerficationInput1"
                    type="file"
                    style={{ display: "none" }}
                    onChange={uploadSignature}
                  />
                  <label
                    className="w-100"
                    role="button"
                    htmlFor="documentVerficationInput1"
                  >
                    <div
                      className={clsx(
                        styles.dragField,
                        "d-flex justify-content-center flex-column align-items-center"
                      )}
                    >
                      <i className="bi bi-file-earmark-arrow-up"></i>
                      <p className={styles.pngorjpeg}>
                        PNG, JPG or PDF. Max 5MB.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className={styles.modal2Btn}>
                <GradientBorder
                  onClick={(e: React.ChangeEvent<any>) => {
                    handleSubmit();
                    updateRequest();
                    setModals({
                      modal1: false,
                      modal2: false,
                      modal3: false,
                      modal4: false,
                      modal5: true,
                    });
                  }
                  }
                  text="Next"
                />
              </div>
            </div>
          </div>

          {/* <div className={styles.modal2Btn}>
                <GradientBorder
                  onClick={() =>
                    setModals({
                      modal1: false,
                      modal2: false,
                      modal3: false,
                      modal4: true,
                      modal5 : false
                    })
                  }
                  text="Next"
                />
              </div> */}
        </div>
      </div>

      {/* last one */}
      <div
        className={clsx(
          styles.thirdModal,
          modals.modal5 ? styles.show : styles.hide
        )}
      >
        <p className={styles.crossLast}>
          <X onClick={closeModal} size={30} weight="bold" />
        </p>
        <div className={styles.thankYouDiv}>
          <h2 className={styles.gradientTitleLast}>Thank You For Applying!</h2>
          <p className={styles.lastDesc}>
            We will reach out to you soon! Be sure to check your registered
            email to activate your creator account at HyprClub.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
function e(e: any): React.ChangeEventHandler<HTMLInputElement> | undefined {
  throw new Error("Function not implemented.");
}

