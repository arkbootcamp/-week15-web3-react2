import React, { Component } from 'react'
import style from './print.module.css'

class PrintOutCl extends Component {
    render() {
        const {email, password} = this.props
        return (
            <div className={style.wrapper}>
                 <h2 className={style.title}>Hasil Print class component Adalah</h2>
                <ul>
                    <li>Email : {email} </li>
                    <li>Password: {password}</li>
                </ul>
            </div>
        )
    }
}

export default PrintOutCl
