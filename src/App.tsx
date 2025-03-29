import './App.css'
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CardsList from './components/CardsList/CardsList';
import CardInfo from './components/CardInfo/CardInfo';
import Form from './components/Form/Form';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import { fetchCards } from './redux/cardsSlice';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router';

function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state)=> state.cards.displayedCards)

  useEffect(()=>{
    dispatch(fetchCards())
  }, [dispatch])

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={ <CardsList data={data} />}></Route>
        <Route path='/products/:id' element={<CardInfo />}></Route>
        <Route path='/create-product' element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App
