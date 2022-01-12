import clsx from "clsx";
import React from "react";
import { useLocation } from "react-router";
import Header_login from "../../components/header/header_after_login/Header_login";
import AccSettings from "../../components/settingsComps/accSettings/AccSettings";
import Contact from "../../components/settingsComps/contact/Contact";
import EditProfile from "../../components/settingsComps/editProfile/EditProfile";
import Help from "../../components/settingsComps/help/Help";
import Privacy from "../../components/settingsComps/privacyAndSec/Privacy";
import SettingsMenu from "../../components/settingsComps/settingsMenu/SettingsMenu";
import Theme from "../../components/settingsComps/themeSettings/Theme";
import styles from "./settings.module.css";
import { Accordion } from "react-bootstrap";
import Transaction from "../../components/settingsComps/transaction/Transaction";
const Settings = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Header_login />
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.mainDiv, "row")}>
          {/* <div className={clsx("col-lg-2", styles.pageLinks)}>
            <PageLinks />
          </div> */}
          <div className={clsx("col-lg-3", styles.settingsMenu)}>
            <SettingsMenu />
          </div>
          <div className={styles.showSection1}>
            <Accordion>
              <div className={styles.heading}>Settings</div>
              <Accordion.Item className={styles.change} eventKey="0">
                <Accordion.Header className={styles.but}>Edit Profile</Accordion.Header>
                <Accordion.Body>
                  <EditProfile></EditProfile>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className={styles.change} eventKey="1">
                <Accordion.Header >Account Settings</Accordion.Header>
                <Accordion.Body>
                  <AccSettings></AccSettings>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className={styles.change} eventKey="2">
                <Accordion.Header >Theme</Accordion.Header>
                <Accordion.Body>
                  <Theme></Theme>
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item className={styles.change} eventKey="3">
                <Accordion.Header >Privacy & Security</Accordion.Header>
                <Accordion.Body>
                  <Privacy></Privacy>
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item className={styles.change} eventKey="4">
                <Accordion.Header >Transaction History</Accordion.Header>
                <Accordion.Body>
                  <Transaction/>
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item className={styles.change} eventKey="5">
                <Accordion.Header >Help</Accordion.Header>
                <Accordion.Body>
                  <Help></Help>
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item className={styles.change} eventKey="6">
                <Accordion.Header >Contact Us</Accordion.Header>
                <Accordion.Body>
                  <Contact></Contact>
                </Accordion.Body>
              </Accordion.Item>


            </Accordion>
          </div>
          <div className={clsx("col-lg-9", styles.showSection)}>
            {path === "/settings" && <EditProfile />}
            {path === "/settings/accountsettings" && <AccSettings />}
            {path === "/settings/theme" && <Theme />}
            {path === "/settings/privacyandsecurity" && <Privacy />}
            {path === "/settings/transactionhistory" && <Transaction />}
            {path === "/settings/help" && <Help />}
            {path === "/settings/contact" && <Contact />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
