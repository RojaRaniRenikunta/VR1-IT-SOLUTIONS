import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faMapMarker,faPhone ,faClock } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <>
            <section id="center" className="center_conc">
                <div className="center_om clearfix">
                    <div className="container">
                        <div className="row center_o1 text-center">
                            <div className="col-md-12">
                                <h1 className="text-white">Contact Us</h1>
                                <h5 className="mb-0 mt-3 text-light">
                                    <a href="index.html">Home</a> 
                                    <span className="span_1">/</span>
                                    <span className="color_1">Contact Us</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br />
            <div className="container">
                <div className="row team_h1 text-center">
                    <div className="col-md-12">
                        <h6 className="color_1">Get In Touch</h6>
                        <h4>Contact us by email, <span className="color_1">phone, or through our send request form below</span></h4>
                        <hr className="hr_line mx-auto" />
                    </div>
                </div>
            </div>

            {/* ------------------------------------- */}

            <section id="contact">
                <div className="container">
                    <div className="row contact_1">
                        <div className="col-md-12">
                            <p className="contact_paragraph">
                                At VR1 IT Solutions, we're more than just a software company; we're your partners in innovation. Whether you have questions, feedback, or are ready to embark on your next digital project, our team is here to support you every step of the way. Contact us today to explore how our tailored solutions can transform your business. With a focus on excellence and customer satisfaction, we're dedicated to exceeding your expectations. Reach out to us for a personalized consultation and discover the power of VR1 IT Solutions. Let's collaborate and build the future together.
                            </p>
                        </div>
                    </div>
                    <div className="contact_2 row clearfix">
                        <div className="col-md-8">
                            <div className="contact_2l clearfix">
                                <div className="blog_dt1l35">
                                    <div className="row quote_2">
                                        <div className="col-md-6">
                                            <div className="quote_2l">
                                                <input placeholder="Name" className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="quote_2l">
                                                <input placeholder="Email Address" className="form-control" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row quote_2 mt-4 text-center">
                                        <div className="col-md-6">
                                            <div className="quote_2l">
                                                <input placeholder="Phone Number" className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="quote_2l">
                                                <input placeholder="Address" className="form-control" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row quote_2 mt-4 text-center">
                                        <div className="col-md-12">
                                            <div className="quote_2l">
                                                <textarea style={{ height: '400px' }} placeholder="Write a Message" className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row quote_2 mt-4">
                                        <div className="col-md-12">
                                            <div className="quote_2l">
                                                <h6 className="d-inline-block mt-2 mb-0"><a className="button" href="#"> Send Request <FontAwesomeIcon icon={faPaperPlane} style={{ marginLeft: '5px' }} /> </a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact_2r row clearfix">
                                <div className="col-md-2">
                                    <div className="contact_2rl clearfix">
                                        <span className="col_1"> <FontAwesomeIcon icon={faMapMarker} className="color_2" /></span>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="contact_2rr clearfix">
                                        <h4 className="mgt">Location</h4>
                                        <hr className="hr_line" />
                                        <p>
                                            <strong>Head Office: </strong>
                                            144, 6th floor, 2JRF+XCQ, MS Ramaiah North City, Manayata Tech Park, Nagavara, Bengaluru, Karnataka 560045.<br/>
                                            <strong>Regional Office: </strong>
                                            THE 27, 5th floor 27/A, beside Palle vindu restaurant, Jayabheri Enclave, Gachibowli, Hyderabad, Telangana 500032.
                                        </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div className="contact_2r row clearfix">
                                <div className="col-md-2">
                                    <div className="contact_2rl clearfix">
                                        <span className="col_1">  <FontAwesomeIcon icon={faPhone} className="color_2" /></span>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="contact_2rr clearfix">
                                        <h4 className="mgt">Phone | Email</h4>
                                        <hr className="hr_line" />
                                        <p><span className="fw-bold">TS - </span> +91 9154338849</p>
                                        <p><span className="fw-bold">KA -</span>  +91 9154338850</p>
                                        <p><span className="fw-bold">E-Mail -</span> <a href="#">info@vr1itsolutions.com</a></p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div className="contact_2r row clearfix">
                                <div className="col-md-2">
                                    <div className="contact_2rl clearfix">
                                        <span className="col_1"> <FontAwesomeIcon icon={faClock} className="color_2" /></span>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="contact_2rr clearfix">
                                        <h4 className="mgt">Working Hours</h4>
                                        <hr className="hr_line" />
                                        <p><span className="fw-bold">Mon - Sat -</span>  09am - 06pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row contact_3 mt-4">
                        <div className="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8938119485933!2d77.62099477359035!3d13.042430613324408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17ff0223d471%3A0xde647c01ca41f92b!2sVR1%20IT%20Solutions%20Pvt%20Ltd%20Bangalore!5e0!3m2!1sen!2sin!4v1713441841370!5m2!1sen!2sin" height="450" style={{ border: '0', width: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="row contact_3 mt-4">
                        <div className="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.048691813297!2d78.34330348598571!3d17.447161421001816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9308ed845a0f%3A0x7b1d03c0c1e9644b!2sVR1%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1713441621095!5m2!1sen!2sin" height="450" style={{ border: '0', width: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
