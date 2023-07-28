import React from 'react';
import './Awards.scss';
import skateBoard from '../../assets/images/bg/skateBoard-award.png';
import skateBoardName from '../../assets/images/bg/skateBoard-name.svg';
import { PrizeDetail } from '../../components/organisms/PrizeDetail/PrizeDetail';
import { SliderImages } from '../../components/organisms/SliderImages/SliderImages';

const product = {
  name: skateBoardName,
  image: skateBoard,
  availability: '15 patinetas',
  details: [
    { name: 'Motor 500w',
      detail: 'Brushless'},
    {
      name:'Llantas', detail:'1" Sellomatic'},
    {
      name:'Velocidad Máxima', detail:'40 km/h'},
    {
      name:'Frenos', detail:'Hidráulicos en ambas ruedas'},
    {
      name:'Plegado', detail:'Fácil'},
    {
      name:'Peso máximo', detail:'100 kg'},
    {
      name:'Bateria', detail:'Litio 48V/15AH'},
    {
      name:'Autonomía', detail:'35 / 45 Km'},
    {
      name:'Tiempo de carga', detail:'8 horas'},
    {
      name:'Peso', detail:'22 kg'},
    {
      name:'Doble', detail:'Suspensión'},
    {
      name:'Luz', detail:'Direccionales'},
  ]
};

export const Awards = () => {
  return (
      <div className='awards'>
        <div className='awards--top'>
          <PrizeDetail data={product}/>
        </div>
        <div className='awards--slider'>
          <SliderImages/>
        </div>
      </div>
  )
}
