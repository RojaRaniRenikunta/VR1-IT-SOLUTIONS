import React, { useState ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import navbar from '../Images/NavBar/VR1 Logo.png'


function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    return (
        <>
            <section id="top">
                <div className="container-fluid p-0">
                    <div className="row top_1 m-0">
                        <div className="col-md-8 col-lg-7 p-0">
                            <div className="top_1l">
                                <ul className="mb-0">
                                    <li className="d-inline-block me-3">
                                        <a href="mailto:info@vr1itsolutions.com?subject=New Query">
                                            <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                                            info@vr1itsolutions.com
                                        </a>
                                    </li>
                                    <li className="d-inline-block">
                                        <a href="tel:+919154338849">
                                            <FontAwesomeIcon icon={faPhone} className="me-1" />
                                            +91 9154338849 (TS)
                                        </a>
                                    </li>
                                    <li className="d-inline-block">
                                        <a href="tel:+919154338850" style={{ paddingLeft: '17px' }}>
                                            <FontAwesomeIcon icon={faPhone} className="me-1" />
                                            +91 9154338850 (KA)
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-5">
                            <div className="top_1r text-end">
                                <ul className="social-network social-circle mb-0">
                                    <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA" className="icoTwitter" title="Rss"><FontAwesomeIcon className='i' icon={faYoutube} /></a></li>
                                    <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v" className="icoFacebook" title="Facebook"><FontAwesomeIcon className='i' icon={faFacebook} /></a></li>
                                    <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg==" className="icoRss" title="Twitter"><FontAwesomeIcon className='i' icon={faInstagram} /></a></li>
                                    <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin" title="Linkedin"><FontAwesomeIcon className='i' icon={faLinkedin} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="header" style={{ position: isHeaderFixed ? 'fixed' : 'relative', top: 0, left: 0, right: 0, zIndex: 999 }}>
                <nav className="navbar navbar-expand-md navbar-light" id="navbar_sticky">
                    <div className="container">
                        <a className="navbar-brand color_2" href="index.html"><img src={navbar} alt="Logo" style={{ width: '210px', height: '105px', marginTop: '-100px', marginBottom: '-100px', marginLeft: '-20px' }} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-0  ms-auto">
                                <li className="nav-item">
                                    <Link to={`/index.html`}><a className="nav-link active" aria-current="page" href="index.html">Home</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/service.html`}> <a className="nav-link" href="services.html">Services</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/career.html`}><a className="nav-link" href="career.html">Career</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about.html'><a className="nav-link" href="about.html">About Us</a></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        onClick={toggleDropdown}
                                        aria-expanded={isDropdownOpen ? "true" : "false"}
                                    >
                                        Blog
                                    </a>
                                    <ul
                                        className={`dropdown-menu drop_1 ${isDropdownOpen ? 'show' : ''}`}
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li><Link to='/blog.html'><a className="dropdown-item" href="blog.html">Blog</a></Link></li>
                                        <li><Link to='/blogdetails.html'><a className="dropdown-item border-0" href="blog_detail.html">Blog Detail</a></Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link to='/team.html'><a className="nav-link" href="team.html">Team</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/gallery.html'><a className="nav-link" href="gallery.html">Gallery</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contact.html'><a className="nav-link" href="contact.html">Contact Us</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default NavBar;
