import React from 'react'
import styles from './print.module.css'

function PrintOut(props) {
    const {email, password} = props
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Hasil Print function componen Adalah</h2>
            <ul>
                    <li>Email : {email} </li>
                    <li>Password: {password}</li>
            </ul>
        </div>
    )
}

export default PrintOut
