import { styled } from "@mui/material";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AVAILNFT_MODAL_CLOSE_SUCCESS,
  AVAILNFT_MODAL_OPEN_SUCCESS,
} from "../../../redux/constants/availnftModal";
import styles from "../../../screens/NFTs/NFTS.module.css";
import { RootStore } from "../../../store";
import Avail_modals from "../Avail_modals/Avail_modals";
import GradBorder from "../GradBorder/GradBorder";
interface Props {
  item: any;
  Bought: boolean;
}

const Perks = ({ item, Bought }: Props) => {
  const { clicked_a } = useSelector(
    (state: RootStore) => state.availnftModalOpen
  );
  const dispatch = useDispatch();
  const AvailPerks = () => {
    dispatch({ type: AVAILNFT_MODAL_OPEN_SUCCESS });
  };
  useEffect(() => {
    if (clicked_a) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [clicked_a]);
  const closeModal = () => {
    dispatch({ type: AVAILNFT_MODAL_CLOSE_SUCCESS });
  };
  const [isIndex, setIsIndex] = useState(4);
  const toggleReadMore = () => {
    {
      isIndex === 4 ? setIsIndex(item.length) : setIsIndex(4);
    }
  };
  return (
    <>
      <ul className={styles.ul}>
        {item.map((e: any, index: number) => {
          if (index < isIndex) {
            return <li key={index}>{e.content}</li>;
          }
        })}
      </ul>
      {item.length > 4 && (
        <span onClick={toggleReadMore} className={styles.readHide}>
          {" "}
          {isIndex === 4 ? "View More" : "View Less"}
        </span>
      )}
      {Bought && (
        <GradBorder
          className={styles.avail_perk_button}
          text="Avail Perk"
          onClick={AvailPerks}
        />
      )}
      <div
        className={clsx(styles.modalDiv, clicked_a ? styles.show : styles.hide)}
        onClick={closeModal}
      >
        <Avail_modals />
      </div>
    </>
  );
};

export default Perks;
