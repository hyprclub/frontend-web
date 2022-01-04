import clsx from 'clsx'
import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import styles from './settingsMenu.module.css'

const SettingsMenu = () => {


    const location = useLocation()
    console.log(location.pathname);
    
    const path = location.pathname;

    const navigate = useNavigate()



    const editProfile = () => {
        if(path !== '/settings'){
            navigate('/settings');
        }
    }

    const accSetting = () =>{
        if(path !== '/settings/accountsettings'){
            navigate('/settings/accountsettings');
        }
    }

    const themeSetting = () =>{
        if(path !== '/settings/theme'){
            navigate('/settings/theme');
        }
    }

    const privacySetting = () =>{
        if(path !== '/settings/privacyandsecurity'){
            navigate('/settings/privacyandsecurity');
        }
    }


    const help = () =>{
        if(path !== '/settings/help'){
            navigate('/settings/help');
        }
    }

    const contact = () =>{
        if(path !== '/settings/contact'){
            navigate('/settings/contact');
        }
    }


    

    return (
        <>
            <div className={styles.settingsMenu}>
                <h2 className={styles.heading}>Settings</h2>
                <div className={styles.pages}>
                    <p onClick={editProfile} className={clsx(styles.page,(path === '/settings') && styles.active)}>Edit Profile</p>
                    <p onClick={accSetting} className={clsx(styles.page, (path === '/settings/accountsettings') && styles.active)}>Account Settings</p>
                    <p onClick={themeSetting} className={clsx(styles.page, (path === '/settings/theme') && styles.active)}>Theme</p>
                    <p onClick={privacySetting} className={clsx(styles.page, (path === '/settings/privacyandsecurity') && styles.active)}>Privacy & Security</p>
                    <p onClick={help} className={clsx(styles.page, (path === '/settings/help') && styles.active)}>Help</p>
                    <p onClick={contact} className={clsx(styles.page, (path === '/settings/contact') && styles.active)}>Contact Us</p>
                </div>
            </div>
        </>
    )
}

export default SettingsMenu
