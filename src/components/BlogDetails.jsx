import React from 'react'
import blogdetailsimg from '../Images/BlogDetails/skynet.png'
import blogdetailsimg1 from '../Images/BlogDetails/comm1.png'
import blogdetailsimg2 from '../Images/BlogDetails/comm2.png'
import blogdetailsimg3 from '../Images/BlogDetails/comm3.png'
import blogdetailsimg4 from '../Images/BlogDetails/blog3.png'
import blogdetailsimg5 from '../Images/BlogDetails/blog5.png'
import blogdetailsimg6 from '../Images/BlogDetails/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaChevronRight, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaReply, FaClock } from 'react-icons/fa';
import { faSearch, faPaperPlane } from '@fortawesome/free-solid-svg-icons';




function BlogDetails() {
    return (
        <>
            <section id="center" className="center_blog_dt">
                <div className="center_om clearfix">
                    <div className="container">
                        <div className="row center_o1 text-center">
                            <div className="col-md-12">
                                <h1 className="text-white">Blog Detail</h1>
                                <h5 className="mb-0 mt-3 text-light"><a href="index.html">Home</a> <a href="blog_detail.html"> <span className="span_1">/</span>  <span className="color_1" style={{ color: '#ffff' }}>Blog</span></a>  </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ----------------------------------------------- */}
            <section id="blog">
                <div className="container">
                    <div className="row blog_1">
                        <div className="col-md-8">
                            <div className="blog_1dl">

                                <div className="blog_h1 clearfix position-relative">
                                    <div className="blog_h1i clearfix">
                                        <div className="grid clearfix">
                                            <figure className="effect-jazz mb-0">
                                                <img
                                                    src={blogdetailsimg}
                                                    height="480"
                                                    className="w-100"
                                                    alt="abc"
                                                    style={{ cursor: 'default' }}
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="blog_h1i1 clearfix">
                                        <h4>SkyNet Pro Future of Cloud Computing</h4>
                                        <p></p>
                                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                            In today's digital age, businesses need powerful, reliable, and scalable cloud computing solutions to stay competitive. That's why we're excited to announce the launch of SkyNet Pro – a cutting-edge cloud platform that is set to redefine the way businesses operate in the cloud.
                                        </p>
                                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                            SkyNet Pro is a revolutionary cloud computing platform that combines the latest advancements in technology with unparalleled performance, security, and scalability. Built by a team of experts with years of experience in cloud infrastructure, SkyNet Pro is designed to meet the evolving needs of modern businesses across industries.
                                        </p>
                                        <blockquote style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                            SkyNet Pro is a next-generation cloud computing platform designed to empower businesses of all sizes with unparalleled scalability, performance, and security. Built upon cutting-edge technology and years of research and development, SkyNet Pro offers a comprehensive suite of features to meet the diverse needs of modern enterprises.
                                            <p className="sign">
                                                <span>Mr. James Skyler</span>
                                            </p>
                                        </blockquote>
                                        <h4>Key Features</h4>
                                        <ul>
                                            <li>
                                                Elastic Scalability:
                                                <ul>
                                                    <li style={{ fontWeight: 'normal', textAlign: 'justify', textJustify: 'inter-word' }}>
                                                        SkyNet Pro provides elastic scalability, allowing businesses to seamlessly scale their infrastructure up or down based on demand. Whether you're experiencing a sudden surge in traffic or need to handle massive datasets, SkyNet Pro ensures that your applications can handle any workload with ease.
                                                    </li>
                                                </ul>
                                            </li>
                                            <p></p>
                                            <li>
                                                Advanced Security:
                                                <ul>
                                                    <li style={{ fontWeight: 'normal', textAlign: 'justify', textJustify: 'inter-word' }}>
                                                        Security is our top priority at SkyNet Pro. With robust encryption, multi-factor authentication, and continuous monitoring, you can trust that your data is safe and secure at all times. Say goodbye to security breaches and data leaks – SkyNet Pro has you covered.
                                                    </li>
                                                </ul>
                                            </li>
                                            <p></p>
                                            <li>
                                                High-Performance Computing:
                                                <ul>
                                                    <li style={{ fontWeight: 'normal', textAlign: 'justify', textJustify: 'inter-word' }}>
                                                        Powered by state-of-the-art hardware and optimized software, SkyNet Pro delivers unmatched performance for even the most demanding workloads. From AI and machine learning to big data analytics and gaming, SkyNet Pro accelerates your applications and unlocks new possibilities.
                                                    </li>
                                                </ul>
                                            </li>
                                            <p></p>
                                            <li>
                                                Global Reach:
                                                <ul>
                                                    <li style={{ fontWeight: 'normal', textAlign: 'justify', textJustify: 'inter-word' }}>
                                                        Whether your users are across the street or around the world, SkyNet Pro ensures low latency and high availability wherever they are. With a global network of data centers, you can reach your audience faster and provide an exceptional user experience, no matter their location.
                                                    </li>
                                                </ul>
                                            </li>
                                            <p></p>
                                            <li>
                                                Developer-Friendly Tools:
                                                <ul>
                                                    <li style={{ fontWeight: 'normal', textAlign: 'justify', textJustify: 'inter-word' }}>
                                                        SkyNet Pro is built with developers in mind. With intuitive APIs, SDKs, and developer tools, you can quickly deploy, manage, and scale your applications with ease. Spend less time wrestling with infrastructure and more time building amazing products.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <hr />
                                    </div>
                                    <div className="blog_h1i2 text-center clearfix position-absolute">
                                        <h6 className="mb-0">
                                            <a href="#" className="color_1">
                                                Tech Product
                                            </a>{' '}
                                            <span className="mx-1">|</span> April 20, 2024 <span className="mx-1">|</span> 1 Comments
                                        </h6>
                                    </div>
                                </div>
                                {/* ------------------------------------------- */}

                                <div className="blog_1dl1 mt-4">
                                    <div className="blog_1dl1">
                                        <h3>Comments (3)</h3>
                                    </div>
                                    <div className="blog_dt1l34 mt-3">
                                        <div className="blog_dt1l34i mt-4 row">
                                            <div className="col-md-2">
                                                <div className="blog_dt1l34il">
                                                    <img
                                                        alt="abc"
                                                        className="w-100"
                                                        src={blogdetailsimg1}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-10">
                                                <div className="blog_dt1l34ir">
                                                    <h5 className="normal color_2">Prasanth kumar  <FaClock style={{ marginRight: '5px' }} /> February 03 2024</h5>
                                                    <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                                        Great article! I've been considering migrating my company's infrastructure to the cloud, and your insights have really helped clarify the benefits. I especially appreciate the breakdown of cost savings and scalability advantages. Looking forward to reading more from you.
                                                    </p>
                                                    <h6>
                                                        <a className="button" href="#">
                                                            <FaReply style={{ marginRight: '5px' }} />
                                                            Reply
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog_dt1l34i mt-3 row">
                                            <div className="col-md-2">
                                                <div className="blog_dt1l34il">
                                                    <img
                                                        alt="abc"
                                                        className="w-100"
                                                        src={blogdetailsimg2}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-10">
                                                <div className="blog_dt1l34ir">
                                                    <h5 className="normal color_2">Nuthan  <FaClock style={{ marginRight: '5px' }} /> February 29 2024</h5>
                                                    <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                                        Thanks for sharing this informative post! As a small business owner, I'm always looking for ways to streamline operations and reduce costs. Cloud computing seems like the perfect solution, especially with its flexibility and accessibility. Your examples really drive home the benefits – excited to explore cloud options for my business.
                                                    </p>
                                                    <h6>
                                                        <a className="button" href="#">
                                                            <FaReply style={{ marginRight: '5px' }} />
                                                            Reply
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog_dt1l34i mt-3 pb-0 border-0 row">
                                            <div className="col-md-2">
                                                <div className="blog_dt1l34il">
                                                    <img
                                                        alt="abc"
                                                        className="w-100"
                                                        src={blogdetailsimg3}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-10">
                                                <div className="blog_dt1l34ir">
                                                    <h5 className="normal color_2">Devish Reddy  <FaClock style={{ marginRight: '5px' }} /> March 08 2022</h5>
                                                    <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                                        Really enjoyed your perspective on cloud computing! It's fascinating to see how rapidly the technology is evolving and how it's reshaping industries. Your discussion of collaboration and remote work capabilities highlights just how transformative the cloud can be. Can't wait to see what's next in the world of cloud innovation.
                                                    </p>
                                                    <h6>
                                                        <a className="button" href="#">
                                                            <FaReply style={{ marginRight: '5px' }} />
                                                            Reply
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* -------------------------------------------------------- */}
                                <div className="blog_1dl1 mt-4">
                                    <div className="blog_1dl1">
                                        <h3>Leave A Comment</h3>
                                    </div>
                                    <div className="row quote_2 mt-3 text-center">
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
                                                <input placeholder="Location" className="form-control" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row quote_2 mt-4 text-center">
                                        <div className="col-md-12">
                                            <div className="quote_2l">
                                                <textarea style={{ height: '200px' }} placeholder="Write your Comment" className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row quote_2 mt-4 text-center">
                                        <div className="col-md-12">
                                            <div className="quote_2l">
                                                <h6 className="d-inline-block mt-2 mb-0"><a className="button" href="#"> Post Comment <FontAwesomeIcon icon={faPaperPlane} style={{ marginLeft: '5px' }} />
                                                </a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* --------------------------- */}
                            </div>
                        </div>
                        {/* =================================================== */}

                        <div className="col-md-4">
                            <div className="blog_1r">
                                <div className="blog_1r1">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Here" />
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary" type="button">
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div className="blog_1r2 blog_1r2m mt-4">
                                    <h4>Categories</h4>
                                    <hr className="hr_line mb-4" />
                                    <h6 className="fw-normal"><a href="#"><FaChevronRight className="color_1" /> Technology</a></h6>
                                    <h6 className="fw-normal"><a href="#"><FaChevronRight className="color_1" /> Network</a></h6>
                                    <h6 className="fw-normal"><a href="#"><FaChevronRight className="color_1" /> Entrepreneurship</a></h6>
                                    <h6 className="fw-normal"><a href="#"><FaChevronRight className="color_1" /> Career Development In IT</a></h6>
                                    <h6 className="fw-normal"><a href="#"><FaChevronRight className="color_1" /> Tech Events & Conferences</a></h6>
                                    <h6 className="fw-normal mb-0 border-0 pb-0"><a href="#"><FaChevronRight className="color_1" /> New Tech Products</a></h6>
                                </div>
                                <div className="blog_1r3 blog_1r2m mt-4">
                                    <h4>Recent Post</h4>
                                    <hr className="hr_line mb-4" />

                                    <div className="row footer_1i1i">
                                        <div className="col-md-4 col-4">
                                            <div className="footer_1i1il">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blog_detail.html"><img src={blogdetailsimg4} height="90" className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-8">
                                            <div className="footer_1i1ir">
                                                <h6><a href="blog_detail.html">Network Automation Streamlining Operations</a></h6>
                                                <h6 className="fw-normal font_14 mb-0">February 13, 2024</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ================================= */}
                                    <div className="row footer_1i1i">
                                        <div className="col-md-4 col-4">
                                            <div className="footer_1i1il">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blog_detail.html"><img src={blogdetailsimg5} height="90" className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-8">
                                            <div className="footer_1i1ir">
                                                <h6><a href="blog_detail.html">Building a Strong IT Resume.</a></h6>
                                                <h6 className="fw-normal font_14 mb-0">January 23, 2024</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* --------------------------------- */}
                                    <div className="row footer_1i1i">
                                        <div className="col-md-4 col-4">
                                            <div className="footer_1i1il">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blog_detail.html"><img src={blogdetailsimg6} height="90" className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-8">
                                            <div className="footer_1i1ir">
                                                <h6><a href="blog_detail.html">Understanding the Advancements in Kubernetes 1.26</a></h6>
                                                <h6 className="fw-normal font_14 mb-0">February 29, 2024</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* =================================== */}
                                </div>
                                {/* Add other sidebar sections similarly */}

                                <div className="blog_1r3 blog_1r2m mt-4">
                                    <h4>Popular Tags</h4>
                                    <hr className="hr_line mb-4" />
                                    <ul className="mb-0">
                                        <li><a href="blog_detail.html">Network</a></li>
                                        <li><a href="blog_detail.html">IT</a></li>
                                        <li><a href="blog_detail.html">Resume</a></li>
                                        <li><a href="blog_detail.html">Tech</a></li>
                                        <li><a href="blog_detail.html">cloud</a></li>
                                        <li><a href="blog_detail.html">career</a></li>
                                        <li><a href="blog_detail.html">Latest Blog</a></li>
                                        <li><a href="blog_detail.html">Blockchain</a></li>
                                        <li><a href="blog_detail.html">New Tech Product</a></li>
                                    </ul>
                                </div>
                                <div className="blog_1r2 blog_1r2m mt-4">
                                    <h4>Follow Us</h4>
                                    <hr className="hr_line mb-4" />
                                    <ul className="social-network social-circle mb-0 mt-3">
                                        <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA" className="icoTwitter" title="Rss"><FaYoutube /></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v" className="icoFacebook" title="Facebook"><FaFacebook /></a></li>
                                        <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg==" className="icoRss" title="Twitter"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" className="icoLinkedin" title="Linkedin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --------------------------- */}
        </>
    )
}

export default BlogDetails
