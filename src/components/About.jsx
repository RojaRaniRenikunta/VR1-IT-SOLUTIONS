import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import aboutimg1 from '../Images/About/our services.png'
import aboutimg2 from '../Images/About/vision.jpg'
import aboutimg3 from '../Images/About/choose.png'
import aboutimg4 from '../Images/About/choose1.png'
import aboutimg5 from '../Images/About/choose2.png'
import aboutimg6 from '../Images/About/choose3.png'
import aboutimg7 from '../Images/About/mission.jpg'





function About() {
    return (
        <>
            <section id="center" className="center_o">
                <div className="center_om clearfix">
                    <div className="container">
                        <div className="row center_o1 text-center">
                            <div className="col-md-12">
                                <h1 className="text-white">About US</h1>
                                <h5 className="mb-0 mt-3 text-light">
                                    <a href="index.html">Home</a>
                                    <a href="about.html">
                                        <span className="span_1">/</span>
                                        <span className="color_1" style={{ color: '#fff' }}>About Us</span>
                                    </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about_pg">
                <div className="container">
                    <div className="row about_pg1">
                        <div className="col-md-6">
                            <div className="about_pg1l">
                                <h6 className="color_1 line">Our Solutions</h6>
                                <h2 className="mt-3">Building Tomorrow's Technology <span className="color_1">Today</span></h2>
                                <p className="mt-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Where innovation meets determination, we shape a brighter digital future. Our mission: pioneering groundbreaking solutions, one step at a time.</p>
                            </div>
                            <div className="about_pg1li row mt-4">
                                <div className="col-md-6">
                                    <div className="about_pg1li1">
                                        <h6 className="mb-3"><FaCheckCircle className="color_1" /> Web & Mobile Application</h6>
                                        <h6 className="mb-3"> <FaCheckCircle className="color_1" />Big Data Analytics</h6>
                                        <h6 className="mb-3"> <FaCheckCircle className="color_1" />Artifical Intelligence</h6>
                                        <h6 className="mb-3"> <FaCheckCircle className="color_1" />Cloud Computing</h6>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about_pg1li1">
                                        <h6 className="mb-3"><FaCheckCircle className="color_1" />Bussiness Process Management</h6>
                                        <h6 className="mb-3"> <FaCheckCircle className="color_1" /> UAE Banking Services</h6>
                                        <h6 className="mb-3"> <FaCheckCircle className="color_1" /> UAE Health Services</h6>
                                        <h6 className="mb-3"> <FaCheckCircle className="color_1" />Marketing & Advertising</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_pg1r position-relative clearfix">
                                <div className="about_pg1r1 clearfix">
                                    <img src={aboutimg1} className="rounded-circle" alt="abc" />
                                </div>
                                <div className="about_pg1r2 position-absolute">
                                    <h6 className="fw-normal">It's a<br />Startup <br /> Organization </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------------------------------------- */}
            <section id="about_h">
                <div className="container">
                    <div className="row about_h1">
                        <div className="col-md-6">
                            <div className="about_h1lm position-relative">
                                <div className="about_h1l clearfix">
                                    <div className="grid">
                                        <figure className="effect-jazz mb-0">
                                            <a href="#"><img src={aboutimg2} className="w-100" alt="abc" style={{ cursor: 'default' }} /></a>
                                        </figure>
                                    </div>
                                </div>
                                <div className="about_h1l1 position-absolute bg-white p-5 pb-4 pt-4 clearfix">
                                    <h4>Beyond Boundaries & Solutions</h4>
                                    <p className="mb-0">We are Redefining boundaries, delivering innovative solutions to our Customers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_h1r" style={{ marginTop: '110px' }}>
                                <h2 className="mt-3">Unveiling Our Vision</h2>
                                <p className="mt-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                    Bringing brands across the globe closer to their customers through personalized experiences service and dedicated Team of intellectual creating a smart environment in one room.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------------------- */}
            <br /><br /><br />
            <section id="event">
                <div className="eventm">
                    <div className="container">
                        <div className="row team_h1 mb-3 text-center">
                            <div className="col-md-12">
                                <h6 className="color_1" style={{ color: '#fff' }}>Why Choose Us</h6>
                                <h2 className="text-white" style={{ marginBottom: '17px' }}>We Believe <span className="color_1" style={{ color: '#fff' }}>In</span> </h2>
                            </div>
                        </div>
                        <div className="event_1 row">
                            <div className="col-lg-6 col-md-12">
                                <div className="event_1l">
                                    <div className="row event_1li m-0">
                                        <div className="col-md-6 p-0">
                                            <div className="event_1lil">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="#"><img src={aboutimg3} height="255" className="w-100" alt="img25" style={{ cursor: 'default' }} /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="event_1lir position-relative">
                                                <div className="event_1lir1">
                                                    <h5 className="text-white">Innovative Solutions</h5>
                                                    <p className="text-light font_14">Pioneering the future with ingenious and inventive solutions tailored to exceed expectations.</p>
                                                    <h6 className="mb-0"><a className="button_1" href="#">Discover Why</a></h6>
                                                </div>
                                                <div className="event_1lir2 position-absolute w-100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* --------------------------- */}
                            <div className="col-lg-6 col-md-12">
                                <div className="event_1l">
                                    <div className="row event_1li m-0">
                                        <div className="col-md-6 p-0">
                                            <div className="event_1lil">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="#"><img src={aboutimg4} height="255" className="w-100" alt="img25" style={{ cursor: 'default' }} /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="event_1lir position-relative">
                                                <div className="event_1lir1">
                                                    <h5 className="text-white">Customer-Centric Approach</h5>
                                                    <p className="text-light font_14">Tailored solutions ensuring satisfaction, putting you at the forefront of our approach.</p>
                                                    <h6 className="mb-0"><a className="button_1" href="#">Discover Why</a></h6>
                                                </div>
                                                <div className="event_1lir2 position-absolute w-100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        {/* ------------------------------------------------------------------- */}
                        <br/>
                        <div className="event_1 row">
                            <div className="col-lg-6 col-md-12">
                                <div className="event_1l">
                                    <div className="row event_1li m-0">
                                        <div className="col-md-6 p-0">
                                            <div className="event_1lil">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="#"><img src={aboutimg5} height="255" className="w-100" alt="img25" style={{ cursor: 'default' }} /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="event_1lir position-relative">
                                                <div className="event_1lir1">
                                                    <h5 className="text-white">Efficiency</h5>
                                                    <p className="text-light font_14">Streamlined processes, maximizing productivity without compromising quality or effectiveness.</p>
                                                    <h6 className="mb-0"><a className="button_1" href="#">Discover Why</a></h6>
                                                </div>
                                                <div className="event_1lir2 position-absolute w-100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* --------------------------- */}
                            <div className="col-lg-6 col-md-12">
                                <div className="event_1l">
                                    <div className="row event_1li m-0">
                                        <div className="col-md-6 p-0">
                                            <div className="event_1lil">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="#"><img src={aboutimg6} height="255" className="w-100" alt="img25" style={{ cursor: 'default' }} /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="event_1lir position-relative">
                                                <div className="event_1lir1">
                                                    <h5 className="text-white">Digital Journey</h5>
                                                    <p className="text-light font_14">Embark on your transformative digital journey with us—innovation, guidance, and success await.</p>
                                                    <h6 className="mb-0"><a className="button_1" href="#">Discover Why</a></h6>
                                                </div>
                                                <div className="event_1lir2 position-absolute w-100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------------------- */}
            <section id="overview">
      <div className="container">
        <div className="row overview_1">
          <div className="col-md-6">
            <div className="overview_1l" style={{ marginTop: '55px' }}>
              <h2><span style={{ fontSize: '26px' }}>Embracing Our</span> Collective Mission</h2>
              <p className="mt-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>To change lives and provide excellent service. Leverage the talented workforce to serve our customers, impacting communities throughout our country, supported by world-class technologies.</p>
              <h5 className="mb-2"><i className="fa fa-long-arrow-right color_1"></i> Delivering End-to-End Solutions</h5>
              <h5 className="mb-2"><i className="fa fa-long-arrow-right color_1"></i> Empowering Your Goals</h5>
              <h5 className="mb-4"><i className="fa fa-long-arrow-right color_1"></i> Your Requirement-Our Vision</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="overview_1r">
              <div className="grid clearfix">
                <figure className="effect-jazz mb-0">
                  <a href="#"><img src={aboutimg7} className="w-100" alt="img25" style={{ cursor: 'default' }} /></a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default About
