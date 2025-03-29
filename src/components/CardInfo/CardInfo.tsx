import React from 'react'
import styles from './cardinfo.module.css'
import { useParams, useNavigate } from 'react-router'
import { useAppSelector } from '../../utils/hooks';

export default function CardInfo() {
    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();
    const card = useAppSelector((state) => state.cards.cards.find((item) => item.id === Number(id)));

    if(!card) {
        return 'Нет данных карточки'
    }

    return (
        <div className={styles.container}>
            <img className={styles.img} src={card.url} alt="изображение" />
            <h1 className={styles.title}>{card.title}</h1>
            <p className={styles.description}>{card.description}</p>
            <button className={styles.button} onClick={()=>navigate(-1)}>Назад</button>
        </div>
    )
}
