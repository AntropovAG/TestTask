import React from 'react'
import styles from './cardinfo.module.css'
import { useParams, Link } from 'react-router'
import { useAppSelector } from '../../utils/hooks';

export default function CardInfo() {
    const { id } = useParams<{ id: string }>();
    const card = useAppSelector((state) => state.cards.cards.find((item) => item.id === Number(id)));

    if (!card) {
        return 'Нет данных карточки'
    }

    return (
        <div className={styles.container}>
            <img className={styles.img} src={card.url} alt="изображение" />
            <h1 className={styles.title}>{card.title}</h1>
            <p className={styles.description}>{card.description}</p>
            <Link to="/products" className={styles.link}>К списку товаров</Link>
        </div>
    )
}
