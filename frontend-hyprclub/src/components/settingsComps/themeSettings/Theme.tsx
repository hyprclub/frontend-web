import clsx from 'clsx'
import React from 'react'
import styles from './theme.module.css'

const Theme = () => {
    return (
        <>
            <div className={styles.mainDiv}>
                <h2 className={styles.title}>Theme</h2>
                <div className={styles.content}>
                    <p>Please select your favorite Web language:</p>
                  <div className={clsx('d-flex align-items-center mb-1')}>
                    <input className={styles.readioInput} type="radio" id="html" name="fav_language" value="HTML"/>
                    <label className={styles.readioLables} htmlFor='html'>Set theme to dark mode</label><br/>
                  </div>
                  <div className={clsx('d-flex align-items-center mb-1')}>
                    <input className={styles.readioInput} type="radio" id="css" name="fav_language" value="CSS"/>
                    <label className={styles.readioLables} htmlFor="css">Set theme to light mode</label><br/>
                  </div>
                  <div className={clsx('d-flex align-items-center mb-1')}>
                    <input className={styles.readioInput} type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                    <label className={styles.readioLables} htmlFor="javascript">Change theme automatically</label>
                  </div>
                </div>
            </div>    
        </>
    )       
}

export default Theme
