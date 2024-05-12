import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Service from '../components/Service';

function ServicePage() {
  return (
    <>
    <Link to={`/service.html`}>
        <NavBar></NavBar>
        <Service></Service>
        <Footer></Footer>
    </Link>
    </>
  )
}

export default ServicePage
