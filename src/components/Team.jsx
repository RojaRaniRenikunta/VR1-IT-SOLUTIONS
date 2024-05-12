import React from 'react'
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaShareAlt } from 'react-icons/fa';
import teamimg1 from '../Images/Team/top1.jpg'
import teamimg2 from '../Images/Team/top2.jpg'
import teamimg3 from '../Images/Team/top3.jpg'
import teamimg4 from '../Images/Team/top4.jpg'
import teamimg5 from '../Images/Team/middle1.jpg'
import teamimg6 from '../Images/Team/middle2.jpg'
import teamimg7 from '../Images/Team/middle3.jpg'
import teamimg8 from '../Images/Team/middle4.jpg'
import teamimg9 from '../Images/Team/middle5.jpg'

function Team() {
    return (
        <>
            <section id="center" className="center_team">
                <div className="center_om clearfix">
                    <div className="container">
                        <div className="row center_o1 text-center">
                            <div className="col-md-12">
                                <h1 className="text-white">Our Team</h1>
                                <h5 className="mb-0 mt-3 text-light"><a href="index.html">Home</a><a href="team.html"><span className="span_1">/</span> <span className="color_1" style={{ color: '#fff' }}>Team</span>  </a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------------------------------------- */}
            <section id="team_h" className="pt-5">
                <div className="container">

                    <div className="row team_h1 text-center">
                        <div className="col-md-12">
                            <h6 className="color_1">JOIN YOUR COMPANY</h6>
                            <h2>Our Awesome <span className="color_1">VR1<br />
                                Team</span> Member</h2>
                        </div>
                    </div>


                    <div className="row team_h1 text-center" style={{ marginTop: '55px' }}>
                        <div className="col-md-12">
                            <h6 className="color_1">TOP MANAGEMENT</h6>

                        </div>
                    </div>
                    {/* ------------------------------------- */}
                    <div className="row team_h2 mt-3">

                        <div className="col-md-3">
                            <div className="team_h1m position-relative clearfix">
                                <div className="team_h1i clearfix">
                                    <div className="grid">
                                        <figure className="effect-jazz mb-0">
                                            <img src={teamimg1}
                                                className="w-100" alt="abc" style={{ cursor: 'default' }} />
                                        </figure>
                                    </div>
                                </div><br />
                                <div className="team_h1i1 position-absolute clearfix">
                                    <ul className="social-network social-circle mb-0">
                                        <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA"
                                            className="icoTwitter" title="Rss"><FaYoutube /></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v"
                                            className="icoFacebook" title="Facebook"><FaFacebook /></a></li>
                                        <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg=="
                                            className="icoRss" title="Twitter"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin"
                                            title="Linkedin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team_h1mo position-relative clearfix">
                                <div className="team_h1mo1 text-white clearfix">
                                    <h4>SRIRAM THOTA</h4>
                                    <h6 className="mb-0">Founder & Director</h6>
                                </div>
                                <div className="team_h1mo2 position-absolute clearfix">
                                    <a href="#"><span><FaShareAlt /></span></a>
                                </div>
                            </div>
                        </div>


                        {/* ------------------------------------- */}
                        <div className="col-md-3">
                            <div className="team_h1m position-relative clearfix">
                                <div className="team_h1i clearfix">
                                    <div className="grid">
                                        <figure className="effect-jazz mb-0">
                                            <img src={teamimg2}
                                                className="w-100" alt="abc" style={{ cursor: 'default' }} />
                                        </figure>
                                    </div>
                                </div><br />
                                <div className="team_h1i1 position-absolute clearfix">
                                    <ul className="social-network social-circle mb-0">
                                        <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA"
                                            className="icoTwitter" title="Rss"><FaYoutube /></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v"
                                            className="icoFacebook" title="Facebook"><FaFacebook /></a></li>
                                        <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg=="
                                            className="icoRss" title="Twitter"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin"
                                            title="Linkedin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team_h1mo position-relative clearfix">
                                <div className="team_h1mo1 text-white clearfix">
                                    <h4>B SRINIVAS RAO</h4>
                                    <h6 className="mb-0">Co-Director</h6>
                                </div>
                                <div className="team_h1mo2 position-absolute clearfix">
                                    <a href="#"><span><FaShareAlt /></span></a>
                                </div>
                            </div>
                        </div>
                        {/* -------------------------------------------- */}
                        <div className="col-md-3">
                            <div className="team_h1m position-relative clearfix">
                                <div className="team_h1i clearfix">
                                    <div className="grid">
                                        <figure className="effect-jazz mb-0">
                                            <img src={teamimg3}
                                                className="w-100" alt="abc" style={{ cursor: 'default' }} />
                                        </figure>
                                    </div>
                                </div><br />
                                <div className="team_h1i1 position-absolute clearfix">
                                    <ul className="social-network social-circle mb-0">
                                        <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA"
                                            className="icoTwitter" title="Rss"><FaYoutube /></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v"
                                            className="icoFacebook" title="Facebook"><FaFacebook /></a></li>
                                        <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg=="
                                            className="icoRss" title="Twitter"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin"
                                            title="Linkedin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team_h1mo position-relative clearfix">
                                <div className="team_h1mo1 text-white clearfix">
                                    <h4>VICTOR GERALD</h4>
                                    <h6 className="mb-0">Principal Advisor</h6>
                                </div>
                                <div className="team_h1mo2 position-absolute clearfix">
                                    <a href="#"><span><FaShareAlt /></span></a>
                                </div>
                            </div>
                        </div>
                        {/* ------------------------------------------------------------ */}
                        <div className="col-md-3">
                            <div className="team_h1m position-relative clearfix">
                                <div className="team_h1i clearfix">
                                    <div className="grid">
                                        <figure className="effect-jazz mb-0">
                                            <img src={teamimg4}
                                                className="w-100" alt="abc" style={{ cursor: 'default' }} />
                                        </figure>
                                    </div>
                                </div><br />
                                <div className="team_h1i1 position-absolute clearfix">
                                    <ul className="social-network social-circle mb-0">
                                        <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA"
                                            className="icoTwitter" title="Rss"><FaYoutube /></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v"
                                            className="icoFacebook" title="Facebook"><FaFacebook /></a></li>
                                        <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg=="
                                            className="icoRss" title="Twitter"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin"
                                            title="Linkedin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team_h1mo position-relative clearfix">
                                <div className="team_h1mo1 text-white clearfix">
                                    <h4>VENNELA DASARI</h4>
                                    <h6 className="mb-0">HR Manager</h6>
                                </div>
                                <div className="team_h1mo2 position-absolute clearfix">
                                    <a href="#"><span><FaShareAlt /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------------- */}
                    <div className="row team_h1 text-center" style={{ marginTop: '55px' }}>
                        <div className="col-md-12">
                            <h6 className="color_1">MIDDLE MANAGEMENT</h6>

                        </div>
                    </div>

                    <div className="row team_h2 mt-4" style={{ display: 'flex', justifyContent: 'center' }}>

                        <div className="col-md-3">
                            <div className="team_h1m position-relative clearfix">
                                <div className="team_h1i clearfix">
                                    <div className="grid">
                                        <figure className="effect-jazz mb-0">
                                            <img src={teamimg5}
                                                className="w-100" alt="abc" style={{ cursor: 'default' }} />
                                        </figure>
                                    </div>
                                </div><br />
                                <div className="team_h1i1 position-absolute clearfix">
                                    <ul className="social-network social-circle mb-0">
                                        <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA"
                                            className="icoTwitter" title="Rss"><FaYoutube /></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v"
                                            className="icoFacebook" title="Facebook"><FaFacebook /></a></li>
                                        <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg=="
                                            className="icoRss" title="Twitter"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin"
                                            title="Linkedin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team_h1mo position-relative clearfix">
                                <div className="team_h1mo1 text-white clearfix">
                                    <h4>MATHEW HENRY CHODISEETY</h4>
                                    <h6 className="mb-0">IT Manager</h6>
                                </div>
                                <div className="team_h1mo2 position-absolute clearfix">
                                    <a href="#"><span><FaShareAlt /></span></a>
                                </div>
                            </div>
                        </div>


                        {/* ------------------------------------- */}
                        <div className="col-md-3">
                            <div className="team_h1m position-relative clearfix">
                                <div className="team_h1i clearfix">
                                    <div className="grid">
                                        <figure className="effect-jazz mb-0">
                                            <img src={teamimg6}
                                                className="w-100" alt="abc" style={{ cursor: 'default' }} />
                                        </figure>
                                    </div>
                                </div><br />
                                <div className="team_h1i1 position-absolute clearfix">
                                    <ul className="social-network social-circle mb-0">
                                        <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA"
                                            className="icoTwitter" title="Rss"><FaYoutube /></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v"
                                            className="icoFacebook" title="Facebook"><FaFacebook /></a></li>
                                        <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg=="
                                            className="icoRss" title="Twitter"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin"
                                            title="Linkedin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team_h1mo position-relative clearfix">
                                <div className="team_h1mo1 text-white clearfix">
                                    <h4>NAGA PRASAD CHINTAPALLI</h4>
                                    <h6 className="mb-0">Project Manager</h6>
                                </div>
                                <div className="team_h1mo2 position-absolute clearfix">
                                    <a href="#"><span><FaShareAlt /></span></a>
                                </div>
                            </div>
                        </div>
                        {/* -------------------------------------------- */}
                        <div className="col-md-3">
                            <div className="team_h1m position-relative clearfix">
                                <div className="team_h1i clearfix">
                                    <div className="grid">
                                        <figure className="effect-jazz mb-0">
                                            <img src={teamimg7}
                                                className="w-100" alt="abc" style={{ cursor: 'default' }} />
                                        </figure>
                                    </div>
                                </div><br />
                                <div className="team_h1i1 position-absolute clearfix">
                                    <ul className="social-network social-circle mb-0">
                                        <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA"
                                            className="icoTwitter" title="Rss"><FaYoutube /></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v"
                                            className="icoFacebook" title="Facebook"><FaFacebook /></a></li>
                                        <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg=="
                                            className="icoRss" title="Twitter"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin"
                                            title="Linkedin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team_h1mo position-relative clearfix">
                                <div className="team_h1mo1 text-white clearfix">
                                    <h4>B SHIVA NAGA RAJU</h4>
                                    <h6 className="mb-0">Admin Manager</h6>
                                </div>
                                <div className="team_h1mo2 position-absolute clearfix">
                                    <a href="#"><span><FaShareAlt /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------ */}
                    <div className="row team_h2 mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col-md-3">
                            <div className="team_h1m position-relative clearfix">
                                <div className="team_h1i clearfix">
                                    <div className="grid">
                                        <figure className="effect-jazz mb-0">
                                            <img src={teamimg8}
                                                className="w-100" alt="abc" style={{ cursor: 'default' }} />
                                        </figure>
                                    </div>
                                </div><br />
                                <div className="team_h1i1 position-absolute clearfix">
                                    <ul className="social-network social-circle mb-0">
                                        <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA"
                                            className="icoTwitter" title="Rss"><FaYoutube /></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v"
                                            className="icoFacebook" title="Facebook"><FaFacebook /></a></li>
                                        <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg=="
                                            className="icoRss" title="Twitter"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin"
                                            title="Linkedin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team_h1mo position-relative clearfix">
                                <div className="team_h1mo1 text-white clearfix">
                                    <h4>YASHASWINI NAVILE Swamy</h4>
                                    <h6 className="mb-0">Accounts Manager</h6>
                                </div>
                                <div className="team_h1mo2 position-absolute clearfix">
                                    <a href="#"><span><FaShareAlt /></span></a>
                                </div>
                            </div>
                        </div>
                        {/* -------------------------- */}
                        <div className="col-md-3">
                            <div className="team_h1m position-relative clearfix">
                                <div className="team_h1i clearfix">
                                    <div className="grid">
                                        <figure className="effect-jazz mb-0">
                                            <img src={teamimg9}
                                                className="w-100" alt="abc" style={{ cursor: 'default' }} />
                                        </figure>
                                    </div>
                                </div><br />
                                <div className="team_h1i1 position-absolute clearfix">
                                    <ul className="social-network social-circle mb-0">
                                        <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA"
                                            className="icoTwitter" title="Rss"><FaYoutube /></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v"
                                            className="icoFacebook" title="Facebook"><FaFacebook /></a></li>
                                        <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg=="
                                            className="icoRss" title="Twitter"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin"
                                            title="Linkedin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team_h1mo position-relative clearfix">
                                <div className="team_h1mo1 text-white clearfix">
                                    <h4>SONALI <br />TORE</h4>
                                    <h6 className="mb-0">TEAM LEAD</h6>
                                </div>
                                <div className="team_h1mo2 position-absolute clearfix">
                                    <a href="#"><span><FaShareAlt /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
