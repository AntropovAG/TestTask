import React from 'react'
import styles from "./card.module.css"
import { Link } from 'react-router';
import { useAppDispatch } from '../../utils/hooks';
import { deleteCard, setLike } from '../../redux/cardsSlice';

export default function Card({id, url, title, isLiked}) {
    const dispatch = useAppDispatch();

    const handleLike = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        dispatch(setLike(id))
    }

    const handleDelete = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        dispatch(deleteCard(id))
    }

    return (
        <Link to={`/products/${id}`} className={styles.container} >
            <img loading='lazy' className={styles.img} src={url} alt="Фото продукта" />
            <div className={styles.infoContainer}>
                <h2 className={styles.name}>{title}</h2>
                <div className={styles.actionsContainer}>
                    <button className={styles.button} onClick={(e)=>handleLike(e, id)}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" style={{fill: isLiked ? 'pink' : 'none'}} viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
                        </svg>
                    </button>
                    <button className={`${styles.buttonDelete} ${styles.button}`} onClick={(e)=>handleDelete(e, id)}></button>
                </div>
            </div>
        </Link>
    )
}
