import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faUsers, faGlobe, faLightbulb, faUserPlus, faSignal, faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FaChevronCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Section1() {
    useEffect(() => {
        $(document).ready(function () {
            $('.customer-logos').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    setting: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 520,
                    setting: {
                        slidesToShow: 3
                    }
                }]
            });
        });

        window.onscroll = function () {
            myFunction();
        };

        const navbar_sticky = document.getElementById("navbar_sticky");
        const sticky = navbar_sticky.offsetTop;
        const navbar_height = document.querySelector('.navbar').offsetHeight;

        function myFunction() {
            if (window.pageYOffset >= sticky + navbar_height) {
                navbar_sticky.classList.add("sticky");
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                navbar_sticky.classList.remove("sticky");
                document.body.style.paddingTop = '0'
            }
        }

        var loder = document.getElementById("preloder");
        window.addEventListener("load", function () {
            loder.style.display = "none";
        });
    }, []); // empty dependency array ensures this effect runs only once, similar to componentDidMount()


    return (
        <>
        <Link to={`/index.html`}>
            <section id="center" className="center_home">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className="" aria-current="true"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/emplyee.gif?alt=media&token=bcf01b1d-fbaa-49f9-82bc-bcb4b3062988" className="d-block w-100" alt="..." style={{ filter: 'brightness(70%)' }} />
                            <div className="carousel-caption d-md-block carousel-caption_2">
                                <h5 className="mb-3 color_2">SOFTWARE DEVELOPMENT</h5>
                                <h1 className="color_1">Innovate, Scale, Succeed-software solutions</h1>
                                <p className="mb-4 mt-3">Business is the activity of making money to get more income.</p>
                                <h5 className="mb-0"><a className="button" href="services.html">CONSULT OUR EXPERT</a></h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/2.gif?alt=media&token=6eb874e5-2d90-4327-a6f4-2a94ed5db25e" className="d-block w-100" alt="..." style={{ filter: 'brightness(70%)' }} />
                            <div className="carousel-caption d-md-block carousel-caption_2">
                                <h5 className="mb-3 color_2">WEBSITE & APPLICATION DEVELOPMENT</h5>
                                <h1 className="color_1">Empowering Your Business IT Solutions for Success</h1>
                                <p className="mb-4 mt-3">Creating websites that reflect your brand's unique identity</p>
                                <h5 className="mb-0"><a className="button" href="services.html">CONSULT OUR EXPERT</a></h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/3.gif?alt=media&token=0b0a5338-1bf7-43a8-aea8-6505caac5e8b" className="d-block w-100" alt="..." style={{ filter: 'brightness(70%)' }} />
                            <div className="carousel-caption d-md-block carousel-caption_1">
                                <h5 className="mb-3 color_2">Secure IT & NON-IT Solutions</h5>
                                <h1 className="color_1">One-Stop Solutions for all your IT & NON-IT Needs</h1>
                                <p className="mb-4 mt-3">Maximize efficiency with our IT solutions and drive growth through strategic non-IT implementations.</p>
                                <h5 className="mb-0"><a className="button" href="services.html">CONSULT OUR EXPERT</a></h5>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            {/* ------------------------------------------ */}
            <section id="spec">
                <div className="container">
                    <div className="row spec_1">
                        <div className="col-md-3">
                            <div className="spec_1i position-relative">
                                <div className="spec_1i1 text-white text-center">
                                    <span><FontAwesomeIcon icon={faLaptop} /></span>
                                    <h4 className="mb-0">INNOVATIVE</h4>
                                </div>
                                <div className="spec_1i2 text-white text-center w-100 position-absolute h-100">
                                    <h4>Innovative</h4>
                                    <p className="mb-0">To introducing new ideas or methods that bring about progress and improvement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="spec_1i position-relative">
                                <div className="spec_1i1 spec_1i1o text-white text-center">
                                    <span><FontAwesomeIcon icon={faUsers} /></span>
                                    <h4 className="mb-0">COLLABORATE</h4>
                                </div>
                                <div className="spec_1i2 spec_1i2o text-white text-center w-100 position-absolute h-100">
                                    <h4>Collaborate</h4>
                                    <p className="mb-0">We are working together towards a common goal, pooling resources and expertise for mutual benefit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="spec_1i position-relative">
                                <div className="spec_1i1 text-white text-center">
                                    <span><FontAwesomeIcon icon={faGlobe} /></span>
                                    <h4 className="mb-0">VISIONARY</h4>
                                </div>
                                <div className="spec_1i2 text-white text-center w-100 position-absolute h-100">
                                    <h4>Visionary</h4>
                                    <p className="mb-0">IT refers to those with foresight and imagination, who lead by envisioning innovative solutions and future possibilities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="spec_1i position-relative">
                                <div className="spec_1i1 spec_1i1o text-white text-center">
                                    <span><FontAwesomeIcon icon={faLightbulb} /></span>
                                    <h4 className="mb-0">IDEALISTIC</h4>
                                </div>
                                <div className="spec_1i2 spec_1i2o text-white text-center w-100 position-absolute h-100">
                                    <h4>Idealistic</h4>
                                    <p className="mb-0">IT'S reflects a perspective driven by lofty principles and optimistic aspirations for positive change.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------------- */}
            <section id="about_h">
                <div className="container">
                    <div className="row about_h1">
                        <div className="col-md-6">
                            <div className="about_h1lm position-relative">
                                <div className="about_h1l clearfix">
                                    <div className="grid">
                                        <figure className="effect-jazz mb-0">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/about.png?alt=media&token=41364a07-dc74-4e92-a567-2ab9a3f7baf7" className="w-100" alt="abc" style={{ cursor: 'default' }} />
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
                            <div className="about_h1r">
                                <h6 className="color_1">ABOUT US</h6>
                                <h2 className="mt-3">Driving industries forward with visionary virtual reality <span className="color_1" style={{ color: '#e7b343' }}>Solutions!</span></h2>
                                <p className="mt-3">VR1 IT Solutions Pvt Ltd is a leading provider of immersive virtual reality experiences and bespoke software solutions. We specialize in leveraging VR technology to drive business innovation and success.</p>
                                <div className="about_h1ri row mt-4">
                                    <div className="col-md-6">
                                        <div className="about_h1ril">
                                            <span><FontAwesomeIcon icon={faUserPlus} className="color_1" /></span>
                                            <h4 className="mt-3">Expert Team</h4>
                                            <p>Tour expert team pioneers virtual reality innovations to redefine industries..</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about_h1ril">
                                            <span><FontAwesomeIcon icon={faSignal} className="color_1" /></span>
                                            <h4 className="mt-3">Growth</h4>
                                            <p>Our exponential growth is fueled by our commitment to innovation and client satisfaction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------------------- */}
            <section>
                <div className="counter-wrapper">
                    <div className="counter">
                        <h1 className="num" data-val="003">000</h1>
                        <p>PROJECT COMPLETED</p>
                    </div>
                    <div className="counter">
                        <h1 className="num" data-val="050">000</h1>
                        <p>EMPLOYEES</p>
                    </div>
                    <div className="counter">
                        <h1 className="num" data-val="005">000</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                    <div className="counter">
                        <h1 className="num" data-val="300">000</h1>
                        <p>REVIEWS</p>
                    </div>
                </div>
            </section>
            {/* --------------------------------------- */}
            <section id="feature">
                <div className="container">
                    <div className="row team_h1 text-center">
                        <div className="col-md-12">
                            <h6 className="color_1">PROJECTS</h6>
                            <h2>OUR PORTFOLIO<span className="color_1"> SPEAKS</span> </h2>
                        </div>
                    </div>
                    <div className="feature_1 mt-3 row">
                        <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2" aria-current="true"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="feature_1i row">
                                        {/* --------------------------------- */}
                                        <div className="col-md-4">
                                            <div className="feature_1im position-relative">
                                                <div className="feature_1im1 clearfix">
                                                    <div className="grid clearfix">
                                                        <figure className="effect-jazz mb-0">
                                                            <a href="contact.html"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/ASHARAYWEB.png?alt=media&token=5e76962c-3b3b-484c-ad45-56c581bb0df7" className="w-100" alt="abc" /></a>
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="feature_1im2 position-absolute p-3 text-center text-white clearfix">
                                                    <span><h5>ASHRAY LADIES HOSTEL</h5></span>
                                                    <h6 className="mb-0">PROJECT COMPLETED</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ------------------------------------- */}
                                        <div className="col-md-4">
                                            <div className="feature_1im position-relative">
                                                <div className="feature_1im1 clearfix">
                                                    <div className="grid clearfix">
                                                        <figure className="effect-jazz mb-0">
                                                            <a href="contact.html"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/BUSSINESS.png?alt=media&token=ad0ff7c6-0bff-432a-be89-2399d78cb079" className="w-100" alt="abc" /></a>
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="feature_1im2 position-absolute  p-3 text-center text-white clearfix">
                                                    <span><h5 style={{ fontSize: '16px', textShadow: '2px 2px #083355' }}>SOUP ECOMMERCE APPLICATION</h5></span>
                                                    <h6 className="mb-0" style={{ fontSize: '11px', textShadow: '2px 2px #083355' }}>PROJECT IN PROGRESS</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ------------------------------------------- */}
                                        <div className="col-md-4">
                                            <div className="feature_1im position-relative">
                                                <div className="feature_1im1 clearfix">
                                                    <div className="grid clearfix">
                                                        <figure className="effect-jazz mb-0">
                                                            <a href="contact.html"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/ASHRAY.png?alt=media&token=a6e84776-bc7e-4897-a4df-42d81828e743" className="w-100" alt="abc" /></a>
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="feature_1im2 position-absolute p-3 text-center text-white clearfix">
                                                    <span><h5 style={{ fontSize: '16px', textShadow: '2px 2px #083355' }}>DIGITAL MARKETING</h5></span>
                                                    <h6 className="mb-0" style={{ fontSize: '11px', textShadow: '2px 2px #083355' }}>PROJECT IN PROGRESS</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Repeat similar structure for other carousel items */}
                                    </div>
                                </div>
                                {/* Add other carousel items */}
                            </div>
                            {/* Add carousel controls */}
                        </div>
                    </div>
                </div>
            </section>
            {/* ----------------------------------------------------------- */}
            <section id="process">
                <div className="container">
                    <div className="row team_h1 text-center">
                        <div className="col-md-12">
                            <h6 className="color_1">PROJECT PROCESS</h6>
                            <h2>Our Working <span className="color_1">Process</span> </h2>
                        </div>
                    </div>
                    <div className="row process_1 mt-3">
                        <div className="col-md-3">
                            <div className="process_1i position-relative clearfix">
                                <div className="process_1i1 text-center">
                                    <div className="grid clearfix">
                                        <figure className="effect-jazz mb-0">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/1w.png?alt=media&token=74300da3-3001-4435-baa3-be63d8fc6860" className="rounded-circle" alt="abc" style={{ cursor: 'default' }} />
                                        </figure>
                                    </div>
                                </div>
                                <div className="process_1i2 position-absolute">
                                    <span>1</span>
                                </div>
                            </div>
                            <div className="process_1io text-center mt-3">
                                <h5>Project Analysis</h5>
                                <p className="font_14 mb-0">Project analysis involves a systematic examination and evaluation of various aspects of a project to gain insights, identify strengths and weaknesses, and make informed decisions.</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="process_1i position-relative clearfix">
                                <div className="process_1i1 text-center">
                                    <div className="grid clearfix">
                                        <figure className="effect-jazz mb-0">
                                            <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/2w.png?alt=media&token=012c4304-72a0-45c1-8a3e-f569516bc3bb" className="rounded-circle" alt="abc" style={{ cursor: 'default' }} /></a>
                                        </figure>
                                    </div>
                                </div>
                                <div className="process_1i2 position-absolute">
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="process_1io text-center mt-3">
                                <h5>Forecast Future Work</h5>
                                <p className="font_14 mb-0">Outline the upcoming tasks and milestones planned for the next reporting period. This helps stakeholders understand what to expect in the following weeks or months.</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="process_1i position-relative clearfix">
                                <div className="process_1i1 text-center">
                                    <div className="grid clearfix">
                                        <figure className="effect-jazz mb-0">
                                            <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/3w.png?alt=media&token=c6742860-7afd-4824-a905-d30890cd4c29" className="rounded-circle" alt="abc" style={{ cursor: 'default' }} /></a>
                                        </figure>
                                    </div>
                                </div>
                                <div className="process_1i2 position-absolute">
                                    <span>3</span>
                                </div>
                            </div>
                            <div className="process_1io text-center mt-3">
                                <h5>24/7 Support</h5>
                                <p className="font_14 mb-0">VR1 refers to a service or assistance provided continuously, around the clock, seven days a week, without interruption. This means that customers or clients can reach out for help, guidance, or troubleshooting at any time of the day or night.</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="process_1i position-relative clearfix">
                                <div className="process_1i1 text-center">
                                    <div className="grid clearfix">
                                        <figure className="effect-jazz mb-0">
                                            <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/4w.png?alt=media&token=c0edf0f2-4295-4854-ae7a-635497ec9f84" className="rounded-circle" alt="abc" style={{ cursor: 'default' }} /></a>
                                        </figure>
                                    </div>
                                </div>
                                <div className="process_1i2 position-absolute">
                                    <span>4</span>
                                </div>
                            </div>
                            <div className="process_1io text-center mt-3">
                                <h5>Deliver Results</h5>
                                <p className="font_14 mb-0">The project submission to the client was successful, meeting all specifications and deadlines. Initial feedback indicates client satisfaction and alignment with their objectives, fostering positive outcomes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------------------------------------------------- */}

            <section id="testim">
                <div className="container">
                    <div className="row team_h1 text-center">
                        <div className="col-md-12">
                            <h6 className="color_1">TESTIMONIAL</h6>
                            <h2>What Says <br /> Our <span className="color_1">Happy Clients</span></h2>
                        </div>
                    </div>
                    <div className="row testim_1 mt-3">
                        <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="testim_1i row">
                                        {/* ------------------------- */}
                                        <div className="col-md-6">
                                            <div className="testim_1i1">
                                                <span className="color_2">
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                </span>
                                                <img className="rounded-circle" src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/ceo.png?alt=media&token=b4ba049e-4904-4ebf-adc6-95aea878d081" alt="abc" />
                                                <span style={{ fontSize: '60px' }} className="d-block color_1 mt-2"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                                                <p className="mt-1">VR1 IT Solutions Pvt Ltd has been an invaluable partner for our organization. Their expertise in providing top-notch IT and non-IT manpower solutions has significantly contributed to our business growth. Their commitment to excellence and professionalism is truly commendable.</p>
                                                <h5>SUSHANTH</h5>
                                                <h6 className="color_2 mb-0">CEO & Co-founder</h6>
                                            </div>
                                        </div>
                                        {/* ------------------------------------ */}
                                        <div className="col-md-6">
                                            <div className="testim_1i1">
                                                <span className="color_2">
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                </span>
                                                <img className="rounded-circle" src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/ameli.png?alt=media&token=a8f99c06-9881-439a-8f65-947b1883de70" alt="abc" />
                                                <span style={{ fontSize: '60px' }} className="d-block color_1 mt-2"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                                                <p className="mt-1">We have had the pleasure of collaborating with VR1 IT Solutions Pvt Ltd for our training and placement needs. Their team's dedication and industry knowledge have made a positive impact on our workforce development initiatives.</p>
                                                <h5>Amelia</h5>
                                                <h6 className="color_2 mb-0">Software Engineer</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------ */}
                                <div className="carousel-item">
                                    <div className="testim_1i row">
                                        <div className="col-md-6">
                                            <div className="testim_1i1">
                                                <span className="color_2">
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                </span>
                                                <img className="rounded-circle" src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/manager.png?alt=media&token=29d3adce-aa41-4627-8f03-464b6f2f12e3" alt="abc" />
                                                <span style={{ fontSize: '60px' }} className="d-block color_1 mt-2"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                                                <p className="mt-1">VR1 IT Solutions Pvt Ltd has been instrumental in our talent acquisition strategy. Their ability to source and train skilled professionals for our IT projects has been exceptional. We are extremely satisfied with the quality of service they have provided.</p>
                                                <h5>Samir Kund</h5>
                                                <h6 className="color_2 mb-0">Manager</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="testim_1i1">
                                                <span className="color_2">
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                </span>
                                                <img className="rounded-circle" src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/executive.png?alt=media&token=a219218e-df17-4599-8b68-8de43ef6b6d1" alt="abc" />
                                                <span style={{ fontSize: '60px' }} className="d-block color_1 mt-2"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                                                <p className="mt-1">We are delighted with the partnership we have with VR1 IT Solutions Pvt Ltd. Their commitment to understanding our specific requirements and delivering tailor-made solutions has been outstanding. Their support in our skill development programs has been invaluable.</p>
                                                <h5>Prasanth Reddy</h5>
                                                <h6 className="color_2 mb-0">Executive</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className="carousel-item">
                                    <div className="testim_1i row">
                                        <div className="col-md-6">
                                            <div className="testim_1i1">
                                                <span className="color_2">
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                </span>
                                                <img className="rounded-circle" src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/doctor.png?alt=media&token=df8ed9bb-7610-45eb-9136-4bd47a4ecab1" alt="abc" />
                                                <span style={{ fontSize: '60px' }} className="d-block color_1 mt-2"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                                                <p className="mt-1">Working with VR1 IT Solutions Pvt Ltd has been a game-changer for our organization. Their collaborative approach, attention to detail, and proactive communication have set them apart. We are grateful for the positive impact they have made on our business operations.</p>
                                                <h5>Divyasha</h5>
                                                <h6 className="color_2 mb-0">Doctor</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="testim_1i1">
                                                <span className="color_2">
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                    <FontAwesomeIcon icon={faStar} style={{ color: '#e7b343' }} />
                                                </span>
                                                <img className="rounded-circle" src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/enternerper.png?alt=media&token=b6928acd-5f7c-4dfe-98c1-3f3fc362fb21" alt="abc" />
                                                <span style={{ fontSize: '60px' }} className="d-block color_1 mt-2"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                                                <p className="mt-1">We have had the pleasure of collaborating with VR1 IT Solutions Pvt Ltd for our training and placement needs. Their team's dedication and industry knowledge have made a positive impact on our workforce development initiatives. We highly recommend their services.</p>
                                                <h5>Dhiray Jain</h5>
                                                <h6 className="color_2 mb-0">Entrepreneur</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------------------------------------------------ */}
            <section className="pather">
                <div className="container">
                    <h2 className="text-center font-weight-bold" style={{ textAlign: 'center', padding: '20px' }}>Our Partners & Clients</h2>
                    <section className="customer-logos slider">
                        <div className="slide"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/iib.jpeg?alt=media&token=5630e562-be82-4f4c-a8db-b6a2ce39a3c4" alt="logo" /></div>
                        <div className="slide"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/nsdc.e85a94edc4741c94925b.jpeg?alt=media&token=34060f99-e35d-4094-9749-d4ed7b2c444b" alt="logo" /></div>
                        <div className="slide"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/ashraylogo.png?alt=media&token=1faa1182-ed61-469c-9613-f5e1410f90c0" alt="logo" /></div>
                        <div className="slide"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/india.a0e2cdeda72031ee2b35.png?alt=media&token=2903e1c4-f3df-4214-934b-186ddac7a41f" alt="logo" /></div>
                        <div className="slide"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/bizsharp.png?alt=media&token=34ba3a5d-379c-44cb-9b73-2c4d229f0e96" alt="logo" /></div>
                        <div className="slide"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/iib.jpeg?alt=media&token=5630e562-be82-4f4c-a8db-b6a2ce39a3c4" alt="logo" /></div>
                        <div className="slide"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/nsdc.e85a94edc4741c94925b.jpeg?alt=media&token=34060f99-e35d-4094-9749-d4ed7b2c444b" alt="logo" /></div>
                        <div className="slide"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/india.a0e2cdeda72031ee2b35.png?alt=media&token=2903e1c4-f3df-4214-934b-186ddac7a41f" alt="logo" /></div>
                    </section>
                </div>
            </section>

            {/* -------------------------------------------------------------- */}

            <section id="blog_h">
                <div className="container">
                    <div className="row team_h1 text-center">
                        <div className="col-md-12">
                            <h6 className="color_1">BLOGS</h6>
                            <h2>
                                Technology <span className="color_1">Updates </span>Here
                            </h2>
                        </div>
                    </div>
                    <div className="row blog_h1 mt-3 text-center">

                        <div className="col-md-4">
                            <div className="blog_h1 clearfix position-relative">
                                <div className="blog_h1i clearfix">
                                    <div className="grid clearfix">
                                        <figure className="effect-jazz mb-0">
                                            <a href="blog.html">
                                                <img
                                                    src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/b1.png?alt=media&token=49fe9581-22f5-4f7f-92be-49a2d15507da"
                                                    className="w-100"
                                                    alt="abc"
                                                />
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                                <div className="blog_h1i1 clearfix">
                                    <h4>
                                        <a href="#">Artificial Intelligence</a>
                                    </h4>
                                    <p className="mt-3">
                                        Artificial intelligence (AI) is the simulation of human
                                        intelligence processes by machines, typically computer
                                        systems. It encompasses a wide range of technologies that
                                        enable machines to perform tasks that would typically require
                                        human intelligence, such as learning, problem-solving,
                                        language understanding, and decision-making. AI has
                                        transformative potential across industries, driving
                                        innovation, automation, and efficiency while reshaping the
                                        way we interact with technology and the world around us.
                                    </p>
                                    <h5 className="mb-0 mt-3 text-center">
                                        <a className="button" href="blog.html">
                                            Read More{' '}
                                            <FaChevronCircleRight className="mx-1" />
                                        </a>
                                    </h5>
                                </div>
                                <div className="blog_h1i2 text-center  clearfix position-absolute">
                                    <h6 className="mb-0">
                                        <a href="blog.html" className="color_1">
                                            Blog
                                        </a>{' '}
                                        <span className="mx-1">|</span> Dec 20, 1988
                                    </h6>
                                </div>
                            </div>
                        </div>
                        {/* ------------------------------------------------ */}
                        <div className="col-md-4">
                            <div className="blog_h1 clearfix position-relative">
                                <div className="blog_h1i clearfix">
                                    <div className="grid clearfix">
                                        <figure className="effect-jazz mb-0">
                                            <a href="blog.html"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/b2.png?alt=media&token=db8b0020-358a-4ac3-b7c8-c4de6169fcfe" className="w-100" alt="abc" /></a>
                                        </figure>
                                    </div>
                                </div>
                                <div className="blog_h1i1 clearfix">
                                    <h4><a href="blog.html">Digital World</a></h4>
                                    <p className="mt-3">
                                        The digital world thrives on interconnected systems, facilitating instant communication and access to information globally. It encompasses various platforms and technologies, reshaping how we interact, learn, and conduct business. From social media networks to cloud computing, its influence permeates nearly every aspect of modern life. Despite its benefits, navigating the digital realm requires vigilance against cyber threats and misinformation. Embracing digital literacy and responsible usage empowers.
                                    </p>
                                    <h5 className="mb-0 mt-3 text-center">
                                        <a className="button" href="blog.html">
                                            Read More{' '}
                                            <FaChevronCircleRight className="mx-1" />
                                        </a>
                                    </h5>
                                </div>
                                <div className="blog_h1i2 text-center clearfix position-absolute">
                                    <h6 className="mb-0"><a href="blog.html" className="color_1">Blog</a> <span className="mx-1">|</span> May 7, 1980</h6>
                                </div>
                            </div>
                        </div>
                        {/* -------------------------------------------- */}
                        <div className="col-md-4">
                            <div className="blog_h1 clearfix position-relative">
                                <div className="blog_h1i clearfix">
                                    <div className="grid clearfix">
                                        <figure className="effect-jazz mb-0">
                                            <a href="blog.html"><img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/b3.png?alt=media&token=61440783-eda9-4239-88f4-f8a4cf87b36d" className="w-100" alt="abc" /></a>
                                        </figure>
                                    </div>
                                </div>
                                <div className="blog_h1i1 clearfix">
                                    <h4><a href="blog.html">voice Optimization</a></h4>
                                    <p className="mt-3">
                                        Voice optimization involves enhancing digital content to improve its visibility and relevance in voice search results. By optimizing for natural language queries and conversational phrases, businesses can better connect with users using voice-enabled devices like smart speakers and virtual assistants. This process often includes refining content structure, incorporating long-tail keywords, and focusing on providing concise, relevant answers to common questions, ultimately enhancing the overall user experience in voice interactions.
                                    </p>
                                    <h5 className="mb-0 mt-3 text-center">
                                        <a className="button" href="blog.html">
                                            Read More{' '}
                                            <FaChevronCircleRight className="mx-1" />
                                        </a>
                                    </h5>
                                </div>
                                <div className="blog_h1i2 text-center clearfix position-absolute">
                                    <h6 className="mb-0"><a href="blog.html" className="color_1">Blog</a> <span className="mx-1">|</span> Jan 3, 2011</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------- */}
            <section id="contact_h">
      <div className="container">
        <div className="row team_h1 text-center">
          <div className="col-md-12">
            <h6 className="color_1">CONTACT</h6>
            <h2>Get in <span className="color_1">Touch With Us</span></h2>
          </div>
        </div>
        <div className="row contact_h1 mt-3">
          <div className="col-md-6">
            <div className="contact_h1i">
              <input className="form-control" placeholder="Name" type="text" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact_h1i">
              <input className="form-control" placeholder="Email" type="text" />
            </div>
          </div>
        </div>
        <div className="row contact_h1 mt-3">
          <div className="col-md-6">
            <div className="contact_h1i">
              <input className="form-control" placeholder="Phone" type="text" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact_h1i">
              <input className="form-control" placeholder="Address" type="text" />
            </div>
          </div>
        </div>
        <div className="row contact_h1 mt-3">
          <div className="col-md-12">
            <div className="contact_h1i">
              <textarea placeholder="Your Message" className="form_1 form-control"></textarea>
              <h5 className="mb-0 mt-4 text-center"><a className="button" href="#">Send Message</a></h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Link>

        </>
    );
}

export default Section1;