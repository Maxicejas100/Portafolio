import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './animate.css'
import {Nav} from './components/Nav/Nav'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { NavProvider } from './Context/NavProvider'
import { Airplane } from './components/Airplane/Airplane'





ReactDOM.createRoot(document.getElementById('root')).render(
  <NavProvider>
  <React.StrictMode>
    <Nav/>
    <Hero/>
    <About/>
    <Skills/>
    <Airplane/>
  </React.StrictMode>
  </NavProvider>
)
