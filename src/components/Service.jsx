import React from 'react'
import { FaHome, FaChevronRight,FaCheck, FaArrowRight,FaLongArrowAltRight} from 'react-icons/fa';
import ServiceImage1 from '../Images/Services/onstop.png'
import ServiceImage2 from '../Images/Services/logo1.png'
import ServiceImage3 from '../Images/Services/logo2.png'
import ServiceImage4 from '../Images/Services/logo3.png'
import ServiceImage5 from '../Images/Services/logo4.png'
import ServiceImage6 from '../Images/Services/logo5.png'
import ServiceImage7 from '../Images/Services/logo6.png'
import ServiceImage8 from '../Images/Services/logo7.png'
import ServiceImage9 from '../Images/Services/logo8.png'
import ServiceImage10 from '../Images/Services/logo9.png'
import ServiceImage11 from '../Images/Services/logo10.png'
import ServiceImage12 from '../Images/Services/logo11.png'
import ServiceImage13 from '../Images/Services/logo12.png'
import ServiceImage14 from '../Images/Services/logo13.png'
import ServiceImage15 from '../Images/Services/logo14.png'
import ServiceImage16 from '../Images/Services/logo15.png'
import ServiceImage17 from '../Images/Services/logo16.png'
import ServiceImage18 from '../Images/Services/logo17.png'
import ServiceImage19 from '../Images/Services/logo18.png'
import ServiceImage20 from '../Images/Services/logo19.png'
import ServiceImage21 from '../Images/Services/logo20.png'
import ServiceImage22 from '../Images/Services/logo21.jpg'
import ServiceImage23 from '../Images/Services/logo22.jpg'
import ServiceImage24 from '../Images/Services/logo23.jpg'
function Service() {
  return (
   <>
   {/* ---------------------------------- */}
   <section id="center" className="center_serv">
      <div className="center_om clearfix">
        <div className="container">
          <div className="row center_o1 text-center">
            <div className="col-md-12">
              <h1 className="text-white">WHAT WE DO</h1>
              <h5 className="mb-0 mt-3 text-light">
                <a href="index.html"><FaHome /></a>
                <span className="span_1"><FaChevronRight /></span>
                <span className="color_1" style={{ color: '#fff' }}>Services</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
   {/* ------------------------------------- */}
    <section id="overview">
      <div className="container">
        <div className="row overview_1">
          <div className="col-md-6">
            <div className="overview_1l">
              <h2>One-Stop IT And NON-IT<span style={{ fontSize: '26px' }}> Solutions For All Your Requirements.</span></h2>
              <p className="mt-3">Discover comprehensive IT and non-IT solutions tailored to meet all your requirements under one roof. From cutting-edge technology solutions to traditional service needs, our expert team delivers seamless support and innovative strategies to optimize your business operations. Whether you seek IT infrastructure development, software solutions, or non-IT services like HR consulting or marketing strategies, we provide end-to-end solutions with efficiency and excellence.</p>
              <h5 className="mb-2"> <FaLongArrowAltRight className="color_1" /> Delivering End-to-End Solutions</h5>
              <h5 className="mb-2"> <FaLongArrowAltRight className="color_1" /> Empowering Your Goals</h5>
              <h5 className="mb-4"> <FaLongArrowAltRight className="color_1" /> Your Requirement-Our Vision</h5>
              <h6 className="mb-0"><a href="contact.html" className="button">Engage with Us</a></h6>
            </div>
          </div>
          <div className="col-md-6">
            <div className="overview_1r">
              <div className="grid clearfix">
                <figure className="effect-jazz mb-0">
                  <a href="#"><img src={ServiceImage1} className="w-100" alt="img25" style={{ cursor: 'default' }} /></a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   {/* ---------------------------------- */}

   <section id="serv_pg">
      <div className="container">
        <div className="row team_h1 text-center">
          <div className="col-md-12">
            <h6 className="color_1">OUR SERVICES</h6>
            <h2>We Provide IT <span className="color_1"> Services</span> </h2>
            <hr className="hr_line mx-auto" />
            <p>We deliver top-notch IT services, specializing in software development and network solutions. <br />Our team is dedicated to providing innovative technology solutions to propel your business forward.<br /> Partner with us for reliable and tailored IT support.</p>
          </div>
        </div>
        {/* ------------------- */}
        <div className="row serv_pg1 mt-3">
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage2} alt="Big Data Analytics" /></span>
              <h4 className="mt-3">Big Data Analytics</h4>
              <p className="font_14">Elevate your business with VR1 IT Solutions' Big Data Analytics services. Harness the power of data to drive strategic decisions and unlock growth opportunities. Experience seamless integration and tailored solutions for your organization's success.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage3} alt="Software Development" /></span>
              <h4 className="mt-3">Software Development</h4>
              <p className="font_14">Transform your vision into reality with VR1 IT Solutions' software development services. From concept to deployment, we craft bespoke solutions to elevate your business. Let our expertise empower your digital journey.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage4} alt="Artificial Intelligence" /></span>
              <h4 className="mt-3">Artificial Intelligence</h4>
              <p className="font_14">Experience the future of technology with VR1 IT Solutions' Artificial Intelligence services. From machine learning to natural language processing, we unlock the potential of AI to drive innovation and efficiency in your business.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
        </div>

        {/* -------------------------------------- */}
        <div className="row serv_pg1 mt-3">
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage5} /></span>
              <h4 className="mt-3">Cloud Computing</h4>
              <p className="font_14">Take your business to new heights with VR1 IT Solutions' Cloud Computing services. Seamlessly scale, innovate, and collaborate with our secure and reliable cloud solutions. Empower your organization to thrive in the digital aera</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage6} /></span>
              <h4 className="mt-3">Cyber Security</h4>
              <p className="font_14">Safeguard your digital assets with VR1 IT Solutions' Cybersecurity services. Our robust solutions protect your business from evolving cyber threats, ensuring peace of mind and uninterrupted operations. Trust us to secure your digital future.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage7} /></span>
              <h4 className="mt-3">Internet Of Things</h4>
              <p className="font_14">Elevate your business with VR1 IT Solutions' Internet of Things services. Seamlessly integrate connected devices for actionable insights and enhanced efficiency. Embrace the future of connectivity with our tailored IoT solutions.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
        </div>

{/* ------------------------------------------- */}
<div className="row serv_pg1 mt-3">
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage8} /></span>
              <h4 className="mt-3">Robotics</h4>
              <p className="font_14">Enter the era of automation with VR1 IT Solutions' Robotics services. From industrial robotics to AI-driven automation, we revolutionize workflows for enhanced productivity. Embrace innovation with our tailored robotics solutions.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage9} /></span>
              <h4 className="mt-3">Engineering R&D</h4>
              <p className="font_14">Drive innovation forward with VR1 IT Solutions' Engineering R&D services. From concept to prototype, we empower your R&D initiatives with cutting-edge technology and expertise. Let us be your partner in shaping the future of engineering.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage10} /></span>
              <h4 className="mt-3">Future Skills</h4>
              <p className="font_14">Future-proof your workforce with VR1 IT Solutions' Future Skills services. Empower your team with the latest technologies and training to thrive in tomorrow's digital landscape. Invest in innovation, invest in your people.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
        </div>
        {/* ----------------------------------- */}
        <div className="row serv_pg1 mt-3">
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage11} /></span>
              <h4 className="mt-3">Mobile App Development</h4>
              <p className="font_14">Elevate your brand with VR1 IT Solutions' Mobile Application Development services. From concept to launch, we craft seamless mobile experiences tailored to your business goals. Stand out in the digital marketplace with our innovative solutions.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage12} /></span>
              <h4 className="mt-3">Web Development</h4>
              <p className="font_14">Elevate your online presence with VR1 IT Solutions' Web Development services. Tailored to your needs, we craft dynamic websites that captivate and convert. Experience the power of digital innovation with us.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage13} /></span>
              <h4 className="mt-3">QA Testing & Automation</h4>
              <p className="font_14">Elevate your software quality with VR1 IT Solutions' QA Testing & Automation Development services. From meticulous testing to seamless automation, we ensure reliability and efficiency in your products. Trust us to enhance your user experience.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
        </div>





      </div>
    </section>


   {/* --------------------------------------- */}
   <section id="serv_pg">
      <div className="container">
        <div className="row team_h1 text-center">
          <div className="col-md-12">
            <h2>We Provide NON-IT <span className="color_1"> Services</span> </h2>
            <hr className="hr_line mx-auto" />
            <p>We offer expert non-IT services, including consultancy and facility management. <br />Streamlining operations for diverse sectors, we ensure maximum efficiency and success. <br />Experience excellence beyond technology with VR1 IT Solutions Pvt Ltd.</p>
          </div>
        </div>
        <div className="row serv_pg1 mt-3">
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage14} alt="" /></span>
              <h4 className="mt-3">Logistic Management</h4>
              <p className="font_14">Unlock seamless logistics management with VR1 IT Solutions - your trusted partner beyond technology. From warehousing to distribution, we optimize operations for unparalleled efficiency. Elevate your supply chain with VR1 IT Solutions today.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage15} alt="" /></span>
              <h4 className="mt-3">Export & Import Management</h4>
              <p className="font_14">Experience seamless import & export management solutions with VR1 IT Solutions - your trusted partner beyond technology. Elevate your global trade operations effortlessly.</p>
              <h6 ><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage16} alt="" /></span>
              <h4 className="mt-3">Banking Services</h4>
              <p className="font_14">Elevate your financial operations with VR1 IT Solutions - your trusted partner beyond technology. From risk management to compliance, we ensure seamless banking solutions for your business. Experience excellence in financial services with VR1.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------------- */}
        <div className="row serv_pg1 mt-3">
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage17} alt="" /></span>
              <h4 className="mt-3">Logistic Management</h4>
              <p className="font_14">Unlock seamless logistics management with VR1 IT Solutions - your trusted partner beyond technology. From warehousing to distribution, we optimize operations for unparalleled efficiency. Elevate your supply chain with VR1 IT Solutions today.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage18} alt="" /></span>
              <h4 className="mt-3">Export & Import Management</h4>
              <p className="font_14">Experience seamless import & export management solutions with VR1 IT Solutions - your trusted partner beyond technology. Elevate your global trade operations effortlessly.</p>
              <h6 ><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage19} alt="" /></span>
              <h4 className="mt-3">Banking Services</h4>
              <p className="font_14">Elevate your financial operations with VR1 IT Solutions - your trusted partner beyond technology. From risk management to compliance, we ensure seamless banking solutions for your business. Experience excellence in financial services with VR1.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------- */}
        <div className="row serv_pg1 mt-3">
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage20} alt="" /></span>
              <h4 className="mt-3">Bussiness Process Management</h4>
              <p className="font_14">Optimize your business processes with VR1 IT Solutions - beyond technology excellence. Our non-IT services streamline operations for maximum efficiency and growth. Experience seamless business process management with VR1 IT Solutions.</p>
              <h6><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="serv_pg1i bg-white">
              <span><img src={ServiceImage21} alt="" /></span>
              <h4 className="mt-3">Marketing and Advertising</h4>
              <p className="font_14">Elevate your brand with VR1 IT Solutions - beyond technology, exceptional marketing strategies await. Our expert non-IT services drive engagement, growth, and lasting connections. Experience excellence in marketing and advertising with VR1.</p>
              <h6 ><a href="contact.html">Connect With Us<FaChevronRight className="font_14" /></a></h6>
            </div>
          </div>
         
        </div>
      </div>
    </section>
   {/* ---------------------------------------- */}
   <section id="pricing">
      <div className="container">
        <div className="row team_h1 text-center">
          <div className="col-md-12">
            <h6 className="color_1">Work Progress</h6>
            <h2>How We <span className="color_1">Work</span> </h2>
            <center>
              <p style={{ paddingLeft: '15px', paddingRight: '15px' }}>We're committed to delivering the best to our clients, from the initial business idea.<br />To the final launch of the software. We think carefully about what we do, why we do it,<br />how we can do it better. Our simple and proven process exemplifies this approach.</p>
            </center>
          </div>
        </div>
        {/* ---------------------------------------- */}
        <div className="row pricing_1 mt-3">
          <div className="col-md-4">
            <div className="pricing_1i bg-white">
              <img src={ServiceImage22} alt="imagetrusted" width="310" height="188" style={{ padding: '10px', marginTop: '-30px', marginBottom: '10px' }} />
              <h4 className="color_1">TRUSTED</h4><br />

              <h6 className="fw-normal mb-3"><FaCheck className="color_1" /> Expert Guidance Always</h6>
              <h6 className="fw-normal mb-3"><FaCheck className="color_1" /> Reliable Solutions Guaranteed</h6>
              <h6 className="fw-normal mb-3"><FaCheck className="color_1" /> Client-Centered Approach</h6>
              <h6 className="fw-normal mb-3"><FaCheck className="color_1" /> Proven Track Record Established</h6>
              <h6 className="fw-normal mb-4"><FaCheck className="color_1" /> Excellence in Every Interaction</h6>
              <h6><a className="button" href="#">Discover Our Offerings <FaArrowRight className="font_14" /></a></h6>
            </div>
          </div>
          {/* Same structure for other columns */}
          <div className="col-md-4">
            <div className="pricing_1i bg-white">
              <img src={ServiceImage23} alt="imagetrusted" width="310" height="188" style={{ padding: '10px', marginTop: '-30px', marginBottom: '10px' }} />
              <h4 className="color_1">QUALITY</h4><br />

              <h6 className="fw-normal mb-3"><FaCheck className="color_1" /> Precision in Every Process</h6>
              <h6 className="fw-normal mb-3"><FaCheck className="color_1" /> Excellence in Every Detail</h6>
              <h6 className="fw-normal mb-3"><FaCheck className="color_1" /> Commitment to Perfectiont</h6>
              <h6 className="fw-normal mb-3"><FaCheck className="color_1" />  Quality Assured Every Time</h6>
              <h6 className="fw-normal mb-4"><FaCheck className="color_1" /> Consistent High Standards</h6>
              <h6><a className="button" href="#">Discover Our Offerings <FaArrowRight className="font_14" /></a></h6>
            </div>
          </div>
          {/* ----------------------------- */}
          <div className="col-md-4">
            <div className="pricing_1i bg-white">
              <img src={ServiceImage24} alt="imagetrusted" width="310" height="188" style={{ padding: '10px', marginTop: '-30px', marginBottom: '10px' }} />
              <h4 className="color_1">TRUSTED</h4><br />

              <h6 className="fw-normal mb-3"><FaCheck className="color_1" /> Affordability</h6>
              <h6 className="fw-normal mb-3"><FaCheck className="color_1" />Maximum Value Delivered </h6>
              <h6 className="fw-normal mb-3"><FaCheck className="color_1" /> Cost-Effective Solutions </h6>
              <h6 className="fw-normal mb-3"><FaCheck className="color_1" /> Optimal ROI Assured Everytime</h6>
              <h6 className="fw-normal mb-4"><FaCheck className="color_1" /> Value-Driven Approach Applied</h6>
              <h6><a className="button" href="#">Discover Our Offerings <FaArrowRight className="font_14" /></a></h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ----------------------------------------- */}
   </>
  )
}

export default Service
