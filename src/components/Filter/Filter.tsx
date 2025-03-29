import React from 'react'
import styles from './filter.module.css'
import { useAppDispatch } from '../../utils/hooks'
import { setFilter, filterCards } from '../../redux/cardsSlice'

export default function Filter() {
    const dispatch = useAppDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(e.target.value))
        dispatch(filterCards())
    }

    return (
        <form className={styles.container}>
            <input type="radio" id='all' name='filter' value={'all'} defaultChecked onChange={(e)=>handleChange(e)}/>
            <label htmlFor="all">Все</label>
            <input type="radio" id='liked' name='filter' value={'liked'} onChange={(e)=>handleChange(e)}/>
            <label htmlFor="liked">Избранные</label>
        </form>
    )
}
