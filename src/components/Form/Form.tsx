import React from 'react'
import styles from './form.module.css'
import { useState } from 'react'
import { useAppDispatch } from '../../utils/hooks'
import { createCard } from '../../redux/cardsSlice'

export default function Form() {
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState({
        url: '',
        description: '',
        title: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(formData)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newCard = {
            id: Date.now(),
            url: formData.url,
            description: formData.description,
            title: formData.title,
            isLiked: false
        };
        alert('Карточка добавлена')
        dispatch(createCard(newCard));
        setFormData({
            url: '',
            description: '',
            title: ''
        })
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="title">Название</label>
            <input className={styles.input} type="text" name="title" id="title" minLength={2} value={formData.title} required onChange={handleChange} />

            <label className={styles.label} htmlFor="image">Ссылка на картинку</label>
            <input className={styles.input} type="url" name='url' id='url' value={formData.url} required onChange={handleChange} />

            <label className={styles.label} htmlFor="description">Описание</label>
            <input className={styles.input} type="text" name='description' id='description' minLength={2} value={formData.description} required onChange={handleChange} />

            <button className={styles.button} type='submit'>Добавить карточку</button>
        </form>
    )
}
