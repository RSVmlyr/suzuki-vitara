import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { Template } from '../components/templates/Template'
import Terms from '../pages/Terms/Terms'
import { Galery } from '../pages/Galery/Galery'
import { Awards } from '../pages/Awards/Awards'
import { Ranking } from '../pages/Ranking/Ranking'
import { Faqs } from '../pages/Faqs/Faqs'


export const AppRouter = () => {
  return (
    <Routes>
        <Route element={<Template/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/premios' element={<Awards/>}/>
            <Route path='/galeria' element={<Galery/>} />
            <Route path='/ranking' element={<Ranking/>}/>
            <Route path='/faqs' element={<Faqs/>}/>
            <Route path='/condiciones' element={<Terms/>} />
        </Route>
    </Routes>
  )
}
