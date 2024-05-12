import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import footerimg1 from '../Images/Footer/VR1 Logo 1.png'
import footerimg2 from '../Images/Footer/location1.png'
import footerimg3 from '../Images/Footer/location2.png'



function Footer() {
    return (
        <section id="footer">
            <div className="container">
                <div className="row footer_1">
                    <div className="col-md-3">
                        <div className="footer_1i">
                            <h3><a className="text-white" href="index.html"><img src={footerimg1} alt="" style={{ width: '210px', height: '95px', marginBottom: '-31px', marginTop: '-25px' }} /></a></h3>
                            <p className="text-light font_14 mt-3">VR1 IT Solutions is a leading provider of comprehensive IT services, specializing in virtual reality solutions tailored to meet the diverse needs of modern businesses. With a focus on innovation and cutting-edge technology, we deliver scalable and customized VR solutions that drive growth and efficiency.</p>
                            <ul className="social-network social-circle mb-0 mt-3">
                                <li style={{backgroundColor:'#e1a730',marginLeft:'5px',width:'40px',height:'40px',borderRadius:'5px',fontSize:'20px'}}><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA" className="icoTwitter" title="Rss"><FontAwesomeIcon className='i' icon={faYoutube} /></a></li>
                                <li style={{backgroundColor:'#e1a730',marginLeft:'5px',width:'40px',height:'40px',borderRadius:'5px',fontSize:'20px'}}><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v" className="icoFacebook" title="Facebook"><FontAwesomeIcon className='i' icon={faFacebook} /></a></li>
                                <li style={{backgroundColor:'#e1a730',marginLeft:'5px',width:'40px',height:'40px',borderRadius:'5px',fontSize:'20px'}}><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg==" className="icoRss" title="Twitter"><FontAwesomeIcon className='i' icon={faInstagram} /></a></li>
                                <li style={{backgroundColor:'#e1a730',marginLeft:'5px',width:'40px',height:'40px',borderRadius:'5px',fontSize:'20px'}}><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin" title="Linkedin"><FontAwesomeIcon className='i' icon={faLinkedin} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
            <div className="footer_1i">
                <h4 className="color_2 mb-4" style={{ color: '#fff' }}>Our Services</h4>
                <ul className="text-light font_14" style={{ listStyleType: 'none', padding: 0 }}>
                    <li><FontAwesomeIcon icon={faCircle} className="fa-fw" style={{ fontSize: '12px', marginRight: '5px' }} /> <a className="text-light" href="services.html">Customers Services</a></li>
                    <li><FontAwesomeIcon icon={faCircle} className="fa-fw" style={{ fontSize: '12px', marginRight: '5px' }} /> <a className="text-light" href="services.html">Business verification process</a></li>
                    <li><FontAwesomeIcon icon={faCircle} className="fa-fw" style={{ fontSize: '12px', marginRight: '5px' }} /> <a className="text-light" href="services.html">Software development</a></li>
                    <li><FontAwesomeIcon icon={faCircle} className="fa-fw" style={{ fontSize: '12px', marginRight: '5px' }} /> <a className="text-light" href="services.html">Logistic Management</a></li>
                    <li><FontAwesomeIcon icon={faCircle} className="fa-fw" style={{ fontSize: '12px', marginRight: '5px' }} /> <a className="text-light" href="services.html">Big Data Analytics</a></li>
                    <li><FontAwesomeIcon icon={faCircle} className="fa-fw" style={{ fontSize: '12px', marginRight: '5px' }} /> <a className="text-light" href="services.html">Operations Executive</a></li>
                    <li><FontAwesomeIcon icon={faCircle} className="fa-fw" style={{ fontSize: '12px', marginRight: '5px' }} /> <a className="text-light" href="services.html">Application Development</a></li>
                    <li><FontAwesomeIcon icon={faCircle} className="fa-fw" style={{ fontSize: '12px', marginRight: '5px' }} /> <a className="text-light" href="#">IT Services</a></li>
                </ul>
            </div>
        </div>
                    <div className="col-md-3">
            <div className="footer_1i1">
                <h4 className="color_2 mb-4" style={{ color: '#fff' }}>Locations</h4>
                <div className="row footer_1i1i">
                    <div className="col-md-4 col-4">
                        <div className="footer_1i1il">
                            <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src={footerimg2} height="70" className="w-100" alt="Location 1" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-8 px-0">
                        <div className="footer_1i1ir">
                            <h6 className="text-light fw-normal font_14 mb-0" style={{ color: '#e7b343' }}>Head Office</h6>
                            <h6><a className="text-light" href="https://maps.app.goo.gl/Q34CRm3iY1yvRr7o6" style={{ fontSize: 'small' }}>144, 6th floor, 2JRF+XCQ, MS Ramaiah North City, Manayata Tech Park, Nagavara, Bengaluru, Karnataka 560045</a></h6>
                        </div>
                    </div>
                </div>
                <div className="row footer_1i1i pb-0 mb-0 border-0">
                    <div className="col-md-4 col-4">
                        <div className="footer_1i1il">
                            <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src={footerimg3} height="70" className="w-100" alt="Location 2" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-8 px-0">
                        <div className="footer_1i1ir">
                            <h6 className="text-light fw-normal font_14 mb-0">Regional Office</h6>
                            <h6><a className="text-light" href="https://maps.app.goo.gl/uZvBxKSvSHqr51Hi9" style={{ fontSize: 'small' }}>THE 27, 5th floor 27/A, beside Palle vindu restaurant, Jayabheri Enclave, Gachibowli, Hyderabad, Telangana 500032</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="footer_1i">
                <h4 className="color_2 mb-4" style={{ color: '#fff' }}>Connect Us</h4>
                <p className="text-light font_14">Thank you for your interest in VR1 IT SOLUTIONS. Whether you’re a client, Customer, or investor, you can find the best way to contact us below.</p>

                <p className="text-light font_14"><a href="tel:+919154338849" style={{ color: '#fff' }}><FontAwesomeIcon icon={faPhone} className="me-1" /> +91 9154338849</a></p>
                <p className="text-light font_14"><a href="tel:+919154338850" style={{ color: '#fff' }}><FontAwesomeIcon icon={faPhone} className="me-1" /> +91 9154338850</a></p>
                <p className="text-light font_14"><a href="mailto:info@vr1itsolutions.com?subject=New Query" style={{ color: '#fff' }}><FontAwesomeIcon icon={faEnvelope} className="me-1" /> info@vr1itsolutions.com</a></p>
            </div>
        </div>
                <div className="row footer_2 text-center">
                    <div className="col-md-12">
                        <p className="mb-0 text-light">© 2024 VR1 IT SOLUTIONS. All Copy Rights Reserved</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Footer;

