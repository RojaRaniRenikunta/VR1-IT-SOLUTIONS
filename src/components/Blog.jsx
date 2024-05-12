import React from 'react';
import blogimg1 from '../Images/Blog/blo1.png'
import blogimg2 from '../Images/Blog/blog2.png'
import blogimg3 from '../Images/Blog/blog3.png'
import blogimg4 from '../Images/Blog/blog4.png'
import blogimg5 from '../Images/Blog/blog5.png'
import blogimg6 from '../Images/Blog/blog6.png'
import blogimg7 from '../Images/Blog/blog7.png'
import blogimg8 from '../Images/Blog/blog8.png'
import blogimg9 from '../Images/Blog/blog9.png'
import { FaChevronCircleRight, FaChevronLeft, FaChevronRight, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Blog() {
    return (
        <>
            <section id="center" className="center_blog">
                <div className="center_om clearfix">
                    <div className="container">
                        <div className="row center_o1 text-center">
                            <div className="col-md-12">
                                <h1 className="text-white">Blog</h1>
                                <h5 className="mb-0 mt-3 text-light">
                                    <a href="#">Home</a>
                                    <a href="blog.html">
                                        <span className="span_1">/</span>
                                        <span className="color_1" style={{ color: '#fff' }}>Blog</span>
                                    </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="blog">
                <div className="container">
                    <div className="row blog_1">
                        <div className="col-md-8">
                            <div className="blog_1l">
                                {/* ---------------- */}
                                <div className="row blog_h1 text-center">
                                    {/* Each Blog Post */}
                                    {/* Blog Post 1 */}
                                    <div className="col-md-6">
                                        <div className="blog_h1 clearfix position-relative">
                                            {/* Blog Post Image */}
                                            <div className="blog_h1i clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blogdetails.html"><img src={blogimg1} className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                            {/* Blog Post Content */}
                                            <div className="blog_h1i1 clearfix">
                                                <h4><a href="blogdetails.html">Unlocking the Future Quantum Leap in Computing Technology</a></h4>
                                                <p className="mt-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>While still in early stages of development, there have significant advancements in quantum computing research of the experimentation Companies like IBM, Google, and Rigetti are making strides in building quantum computers process and developing quantum algorithms.</p>
                                                <h5 className="mb-0 mt-3 text-center"><a className="button" href="blogdetails.html">Read More<FaChevronCircleRight className="mx-1" />  </a></h5>
                                            </div>
                                            {/* Blog Post Metadata */}
                                            <div className="blog_h1i2 text-center  clearfix position-absolute">
                                                <h6 className="mb-0"><a href="blogdetails.html" className="color_1">Technology</a> <span className="mx-1">|</span> January, 2022</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Blog Post 2 */}
                                    {/* Similarly, translate other blog posts */}
                                    <div className="col-md-6">
                                        <div className="blog_h1 clearfix position-relative">
                                            {/* Blog Post Image */}
                                            <div className="blog_h1i clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blogdetails.html"><img src={blogimg2} className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>


                                            {/* Blog Post Content */}
                                            <div className="blog_h1i1 clearfix">
                                                <h4><a href="blogdetails.html">Breaking Chains Exploring the Latest Blockchain Innovations.</a></h4>
                                                <p className="mt-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Blockchain technology continues to advance, with new protocols, consensus mechanisms, and applications emerging. Projects focusing decentralized finance (DeFi), non-fungible tokens (NFTs), and supply chain management particularly active in this space.</p>
                                                <h5 className="mb-0 mt-3 text-center"><a className="button" href="blogdetails.html">Read More <FaChevronCircleRight className="mx-1" />  </a></h5>
                                            </div>
                                            {/* Blog Post Metadata */}
                                            <div className="blog_h1i2 text-center  clearfix position-absolute">
                                                <h6 className="mb-0"><a href="blogdetails.html" className="color_1">Technology</a> <span className="mx-1">|</span> April, 2023</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ---------------------------- */}
                                <div className="row blog_h1 text-center">
                                    {/* Each Blog Post */}
                                    {/* Blog Post 1 */}
                                    <div className="col-md-6">
                                        <div className="blog_h1 clearfix position-relative">
                                            {/* Blog Post Image */}
                                            <div className="blog_h1i clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blogdetails.html"><img src={blogimg3} className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                            {/* Blog Post Content */}
                                            <div className="blog_h1i1 clearfix">
                                                <h4><a href="blogdetails.html">Network Automation Streamlining Operations</a></h4>
                                                <p className="mt-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Operations with AI and Machine Learning Discuss how AI and machine learning are transforming network management from predictive to automated troubleshooting and optimization.</p>
                                                <h5 className="mb-0 mt-3 text-center"><a className="button" href="blogdetails.html">Read More<FaChevronCircleRight className="mx-1" />   </a></h5>
                                            </div>
                                            {/* Blog Post Metadata */}
                                            <div className="blog_h1i2 text-center  clearfix position-absolute">
                                                <h6 className="mb-0"><a href="blogdetails.html" className="color_1">Technology</a> <span className="mx-1">|</span> January, 2022</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Blog Post 2 */}
                                    {/* Similarly, translate other blog posts */}
                                    <div className="col-md-6">
                                        <div className="blog_h1 clearfix position-relative">
                                            {/* Blog Post Image */}
                                            <div className="blog_h1i clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blogdetails.html"><img src={blogimg4} className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                            {/* Blog Post Content */}
                                            <div className="blog_h1i1 clearfix">
                                                <h4><a href="blogdetails.html">Rise of 5G and Its Implications for Networking. </a></h4>
                                                <p className="mt-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Explore how the widespread adoption of 5G technology is reshaping networking infrastructure enabling new applications & services.</p>
                                                <h5 className="mb-0 mt-3 text-center"><a className="button" href="blogdetails.html">Read More <FaChevronCircleRight className="mx-1" />   </a></h5>
                                            </div>
                                            {/* Blog Post Metadata */}
                                            <div className="blog_h1i2 text-center  clearfix position-absolute">
                                                <h6 className="mb-0"><a href="blogdetails.html" className="color_1">Network</a> <span className="mx-1">|</span> February, 2024</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ---------------------------------- */}
                                <div className="row blog_h1 text-center">
                                    {/* Each Blog Post */}
                                    {/* Blog Post 1 */}
                                    <div className="col-md-6">
                                        <div className="blog_h1 clearfix position-relative">
                                            {/* Blog Post Image */}
                                            <div className="blog_h1i clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blogdetails.html"><img src={blogimg5} className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                            {/* Blog Post Content */}
                                            <div className="blog_h1i1 clearfix">
                                                <h4><a href="blogdetails.html">Building a Strong IT Resume</a></h4>
                                                <p className="mt-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Offer advice on crafting an impressive resume tailored to IT roles, including tips for highlighting technical skills, relevant experience, certifications, and projects. Provide examples of effective resume formats and how to optimize it for applicant tracking systems (ATS).</p>
                                                <h5 className="mb-0 mt-3 text-center"><a className="button" href="blogdetails.html">Read More <FaChevronCircleRight className="mx-1" />   </a></h5>
                                            </div>
                                            {/* Blog Post Metadata */}
                                            <div className="blog_h1i2 text-center  clearfix position-absolute">
                                                <h6 className="mb-0"><a href="blogdetails.html" className="color_1">Career Tech</a> <span className="mx-1">|</span>January 23, 2024</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Blog Post 2 */}
                                    {/* Similarly, translate other blog posts */}
                                    <div className="col-md-6">
                                        <div className="blog_h1 clearfix position-relative">
                                            {/* Blog Post Image */}
                                            <div className="blog_h1i clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blogdetails.html"><img src={blogimg6} className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>


                                            {/* Blog Post Content */}
                                            <div className="blog_h1i1 clearfix">
                                                <h4><a href="blogdetails.html">Preparing for Interviews.</a></h4>
                                                <p className="mt-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Share practical tips and techniques for acing job interviews in the IT industry, including common technical interview questions, behavioral interview questions, and how to demonstrate problem-solving abilities and communication skills. To make Pratice day by day well make new skills development.</p>
                                                <h5 className="mb-0 mt-3 text-center"><a className="button" href="blogdetails.html">Read More <FaChevronCircleRight className="mx-1" />  </a></h5>
                                            </div>
                                            {/* Blog Post Metadata */}
                                            <div className="blog_h1i2 text-center  clearfix position-absolute">
                                                <h6 className="mb-0"><a href="blogdetails.html" className="color_1">Career Tech</a> <span className="mx-1">|</span>January 18, 2022</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ------------------------------------------------------- */}


                                {/* Pagination */}
                                <div className="pages mt-4 row text-center">
                                    <div className="col-md-12">
                                        <ul className="mb-0">
                                            <li><a href="blogdetails.html"><FaChevronLeft />
                                            </a></li>
                                            <li className="act"><a href="blogdetails.html">1</a></li>
                                            <li><a href="blogdetails.html">2</a></li>
                                            <li><a href="blogdetails.html">3</a></li>
                                            <li><a href="blogdetails.html">4</a></li>
                                            <li><a href="blogdetails.html">5</a></li>
                                            <li><a href="blogdetails.html">6</a></li>
                                            <li><a href="blogdetails.html"><FaChevronRight />
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            {/* Sidebar Content */}
                            {/* Search */}
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
                                {/* Categories */}
                                <div className="blog_1r2 blog_1r2m mt-4">
                                    <h4>Categories</h4>
                                    <hr className="hr_line mb-4" />
                                    <h6 className="fw-normal"><a href="blogdetails.html"><FaChevronRight className="color_1" />
                                        Technology</a></h6>
                                    <h6 className="fw-normal"><a href="blogdetails.html"><FaChevronRight className="color_1" />
                                        Network</a></h6>
                                    <h6 className="fw-normal"><a href="blogdetails.html"><FaChevronRight className="color_1" />
                                        Entrepreneurship</a></h6>
                                    <h6 className="fw-normal"><a href="blogdetails.html"><FaChevronRight className="color_1" />
                                        Carrer Development In IT</a></h6>
                                    <h6 className="fw-normal"><a href="blogdetails.html"><FaChevronRight className="color_1" />
                                        Tech Events & Conferences</a></h6>
                                    <h6 className="fw-normal"><a href="blogdetails.html"><FaChevronRight className="color_1" />
                                        New Tech Products</a></h6>
                                </div>
                                {/* Recent Posts */}
                                <div className="blog_1r3 blog_1r2m mt-4">
                                    <h4>Recent Post</h4>
                                    <hr className="hr_line mb-4" />
                                    {/* Recent Post 1 */}
                                    {/* ----------------------------------------- */}
                                    <div className="row footer_1i1i">
                                        <div className="col-md-4 col-4">
                                            <div className="footer_1i1il">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blogdetails.html"><img src={blogimg7} height="90" className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-8">
                                            <div className="footer_1i1ir">
                                                <h6><a href="blogdetails.html">Understanding the Advancements in Kubernetes 1.26</a></h6>
                                                <h6 className="fw-normal font_14 mb-0">February 29, 2024</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -------------------------------------- */}
                                    <div className="row footer_1i1i">
                                        <div className="col-md-4 col-4">
                                            <div className="footer_1i1il">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blogdetails.html"><img src={blogimg8} height="90" className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-8">
                                            <div className="footer_1i1ir">
                                                <h6><a href="blogdetails.html">Network Automation Streamlining Operations</a></h6>
                                                <h6 className="fw-normal font_14 mb-0">February 13, 2024</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ----------------------------------------- */}
                                    <div className="row footer_1i1i">
                                        <div className="col-md-4 col-4">
                                            <div className="footer_1i1il">
                                                <div className="grid clearfix">
                                                    <figure className="effect-jazz mb-0">
                                                        <a href="blogdetails.html"><img src={blogimg9} height="90" className="w-100" alt="abc" /></a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-8">
                                            <div className="footer_1i1ir">
                                                <h6><a href="blogdetails.html">Building a Strong IT Resume.</a></h6>
                                                <h6 className="fw-normal font_14 mb-0">January 23, 2024</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ------------------------------------------------------------- */}
                                </div>
                                {/* Popular Tags */}
                                <div className="blog_1r3 blog_1r2m mt-4">
                                    <h4>Popular Tags</h4>
                                    <hr className="hr_line mb-4" />
                                    <ul className="mb-0">
                                        <li><a href="blogdetails.html">Network</a></li>
                                        <li><a href="blogdetails.html">IT</a></li>
                                        <li><a href="blogdetails.html">Resume</a></li>
                                        <li><a href="blogdetails.html">Tech</a></li>
                                        <li><a href="blogdetails.html">cloud</a></li>
                                        <li><a href="blogdetails.html">career</a></li>
                                        <li><a href="blogdetails.html">Latest Blog</a></li>
                                        <li><a href="blogdetails.html">Blockchain</a></li>
                                        <li><a href="blogdetails.html">New Tech Product</a></li>
                                    </ul>
                                </div>
                                {/* Social Media */}
                                <div className="blog_1r2 blog_1r2m mt-4">
                                    <h4>Follow Us</h4>
                                    <hr className="hr_line mb-4" />
                                    <ul className="social-network social-circle mb-0 mt-3">
                                        <li><a href="https://www.youtube.com/channel/UCChiisX-fvACE6g1CAhssSA" class="icoTwitter" title="Rss"><FaYoutube />

                                        </a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61557161950708&mibextid=rS40aB7S9Ucbxw6v" class="icoFacebook" title="Facebook"><FaFacebook />
                                        </a></li>
                                        <li><a href="https://www.instagram.com/vr1_it_solutions?igsh=MW95cmxybXd1ejN5Yg==" class="icoRss" title="Twitter"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/company/vr1-it-solutions/" class="icoLinkedin" title="Linkedin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
