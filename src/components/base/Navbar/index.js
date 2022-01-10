import React, { useContext } from 'react'
import styles from './navbar.module.css'
import { userContext } from '../../../context/UserContext'
const Navbar = () => {

    const {user, setUser} = useContext(userContext)
    return (
        <div className={styles.wrapper}>
            {user && <p>{user.name}</p>}
        </div>
    )
}

export default Navbar
