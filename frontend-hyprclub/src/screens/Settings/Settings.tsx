import clsx from 'clsx'
import React from 'react'
import { useLocation } from 'react-router'
import PageLinks from '../../components/feedComponents/feedLeft/pageLinks/PageLinks'
import Header_login from '../../components/header/header_after_login/Header_login'
import AccSettings from '../../components/settingsComps/accSettings/AccSettings'
import Contact from '../../components/settingsComps/contact/Contact'
import EditProfile from '../../components/settingsComps/editProfile/EditProfile'
import Help from '../../components/settingsComps/help/Help'
import Privacy from '../../components/settingsComps/privacyAndSec/Privacy'
import SettingsMenu from '../../components/settingsComps/settingsMenu/SettingsMenu'
import Theme from '../../components/settingsComps/themeSettings/Theme'
import styles from './settings.module.css'

const Settings = () => {
    const location = useLocation()
    const path = location.pathname
    
    return (
        <>
            <Header_login/>
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.mainDiv, "row")}>
                <div className={clsx('col-lg-2', styles.pageLinks)}>
                    <PageLinks/>
                </div>
                <div className={clsx('col-lg-3', styles.settingsMenu)}>
                    <SettingsMenu/>
                </div>
                <div className={clsx('col-lg-7', styles.showSection)}>
                    {path === '/settings' && <EditProfile/> }
                    {path === '/settings/accountsettings' && <AccSettings/> }
                    {path === '/settings/theme' && <Theme/> }
                    {path === '/settings/privacyandsecurity' && <Privacy/> }
                    {path === '/settings/help' && <Help/> }
                    {path === '/settings/contact' && <Contact/> }
                </div>
            </div>
        </div>
        </>
    )
}

export default Settings
