import React from 'react';
import styles from "./cardslist.module.css";
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import { Card as CardInterface } from '../../utils/interfaces';

interface CardsListProps {
  data: CardInterface[]
}

function CardsList( {data}: CardsListProps ) {
  return (
    <>
            <Filter />
      <div className={styles.container}>
        {data.length > 0 ? data.map((item) => <Card key={item.id} {...item}/>) : 'Нет карточек'}
      </div>
      </>
  )
}

export default CardsList
