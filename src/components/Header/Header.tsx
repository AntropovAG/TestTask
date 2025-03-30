import React from 'react'
import { NavLink } from "react-router";
import styles from './header.module.css'

function Header() {
    return (
        <div className={styles.container}>
            <NavLink to={'/'} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                Домой
            </NavLink>
            <NavLink to={'/products'} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                Продукты
            </NavLink>
            <NavLink to={'/create-product'} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                Добавить
            </NavLink>
        </div>
    )
}

export default Header

