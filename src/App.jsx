import React from 'react'
import LandingPage from './pages/LandingPage'
import './css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './css/about.css'
import './css/blog.css'
import './css/contact.css'
import './css/font-awesome.min.css'
import './css/gallery.css'
import './css/global.css'
import './css/index.css'
import './css/pather.css'
import './css/reviewscroll.css'
import './css/services.css'

import ServicePage from './pages/ServicePage'
import CareerPage from './pages/CareerPage'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import BusinessPage from './pages/BusinessPage'
import UAEHealthcarePage from './pages/UAEHealthcarePage'
import EmailPage from './pages/EmailPage'
import UaebankingservicesPage from './pages/UaebankingservicesPage'
import FullStackPage from './pages/FullStackPage'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}></Route>
      <Route path='/index.html' element={<LandingPage></LandingPage>}></Route>
      <Route path='/service.html' element={<ServicePage></ServicePage>}></Route>
      <Route path='/career.html' element={<CareerPage></CareerPage>}></Route>
      <Route path='/about.html' element={<AboutPage></AboutPage>}></Route>
      <Route path='/team.html' element={<TeamPage></TeamPage>}></Route>
      <Route path='/gallery.html' element={<GalleryPage></GalleryPage>}></Route>
      <Route path='/contact.html' element={<ContactPage></ContactPage>}></Route>
      <Route path='/blog.html' element={<BlogPage></BlogPage>}></Route>
      <Route path='/blogdetails.html' element={<BlogDetailsPage></BlogDetailsPage>}></Route>
      <Route path='/businessverification.html' element={<BusinessPage></BusinessPage>}></Route>
      <Route path='/UAEHealthcare.html' element={<UAEHealthcarePage></UAEHealthcarePage>}></Route>
      <Route path='/emailprocessing.html' element={<EmailPage></EmailPage>}></Route>
      <Route path='/uaebankingservices.html' element={<UaebankingservicesPage></UaebankingservicesPage>}></Route>
      <Route path='/fullstackdeveloper.html' element={<FullStackPage></FullStackPage>}></Route>     
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
