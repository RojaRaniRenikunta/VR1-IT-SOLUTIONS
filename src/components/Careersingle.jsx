import React from 'react'
import careerimg1 from '../Images/Career/logo1.png'
import careerimg2 from '../Images/Career/logo2.png'
import careerimg3 from '../Images/Career/logo3.png'
import careerimg4 from '../Images/Career/logo4.png'
import careerimg5 from '../Images/Career/business1.jpg'
import careerimg6 from '../Images/Career/business2.jpg'
import careerimg7 from '../Images/Career/business3.jpg'
import careerimg8 from '../Images/Career/bank.jpg'
import careerimg9 from '../Images/Career/bank2.jpg'



import '../css/carrer.css'
import { FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Careersingle() {
  return (
    <>
      <section id="center" className="center_ser">
        <div className="center_om clearfix">
          <div className="container">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="text-white">We Are Hiring</h1>
                <h5 className="mb-0 mt-3 text-light">
                  <a href="index.html">Home</a>
                  <span className="span_1">/</span>
                  <span className="color_1" style={{ color: '#fff' }}>Career</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="container">
        <div className="row team_h1 text-center">
          <div className="col-md-12">
            <h6 className="color_1">Benefits</h6>
            <h2>Benefits Of <span className="color_1"> Work At VR1</span> </h2>
            <hr className="hr_line mx-auto" />
            <p>Unlock a world of benefits at VR1 IT Solutions! From competitive salaries to comprehensive healthcare coverage.<br />We prioritize your well-being. Enjoy opportunities for professional growth and a vibrant company culture.<br />Join us and thrive in a dynamic, supportive work environment</p>
          </div>
        </div>
      </div>

      <br />
      <br /><br /><br />

      <section id="spec" >
        <div className="container">
          <div className="row spec_1">
            <div className="col-md-3">
              <div className="spec_1i position-relative">
                <div className="spec_1i1 text-white text-center">
                  <span>
                    <img src={careerimg1} alt="icon" />
                  </span>
                  <h4 className="mb-0">COMPETITIVE PAY</h4>
                </div>
                <div className="spec_1i2 text-white text-center w-100 position-absolute h-100">
                  <h4 style={{ color: '#000' }}>Competitive Pay</h4>
                  <p className="mb-0" style={{ color: '#000' }}>At VR1 IT Solutions, we offer competitive pay that values your skills. Join us and be fairly compensated for your talent.</p>
                </div>
              </div>
            </div>
            {/* -------------------------- */}
            <div className="col-md-3">
              <div className="spec_1i position-relative">
                <div className="spec_1i1 text-white text-center">
                  <span>
                    <img src={careerimg2} alt="icon" />
                  </span>
                  <h4 className="mb-0">COMPANY CULTURE</h4>
                </div>
                <div className="spec_1i2 text-white text-center w-100 position-absolute h-100">
                  <h4 style={{ color: '#000' }}>Company Culture</h4>
                  <p className="mb-0" style={{ color: '#000' }}>Experience a thriving company culture at VR1 IT Solutions. Join a team where collaboration and innovation drive success.</p>
                </div>
              </div>
            </div>
            {/* -------------------------------- */}
            <div className="col-md-3">
              <div className="spec_1i position-relative">
                <div className="spec_1i1 text-white text-center">
                  <span>
                    <img src={careerimg3} alt="icon" />
                  </span>
                  <h4 className="mb-0">DYNAMIC OPPORTUNITIES</h4>
                </div>
                <div className="spec_1i2 text-white text-center w-100 position-absolute h-100">
                  <h4 style={{ color: '#000' }}>Dynamic Opportunities</h4>
                  <p className="mb-0" style={{ color: '#000' }}>Unlock dynamic advancement opportunities at VR1 IT Solutions and propel your career forward.</p>
                </div>
              </div>
            </div>
            {/* --------------------------------------- */}
            <div className="col-md-3">
              <div className="spec_1i position-relative">
                <div className="spec_1i1 text-white text-center">
                  <span>
                    <img src={careerimg4} alt="icon" />
                  </span>
                  <h4 className="mb-0">FAMILY FRIENDLY EVENTS</h4>
                </div>
                <div className="spec_1i2 text-white text-center w-100 position-absolute h-100">
                  <h4 style={{ color: '#000' }}>Family Friendly Events</h4>
                  <p className="mb-0" style={{ color: '#000' }}>Join the VR1 IT Solutions family for fun-filled, family-friendly events. Connect with colleagues and loved ones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- */}
      <br />
      <section className="focus">
        <div className="card mb-3">
          <div className="foc">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '45px', marginTop: '90px', marginLeft: '20px', fontFamily: 'Quicksand, sans-serif', fontWeight: 'bold', color: '#fff' }}>OUR FOCUS</h5>
              <p className="card-text" style={{ fontSize: '20px', marginLeft: '20px', marginTop: '60px', color: '#fff' }}>Delivering Tailored Software Solutions
                At VR1 IT Solutions Pvt Ltd,<br /> We prioritize understanding our clients' needs,
                Crafting bespoke software solutions <br />That streamline operations,
                Empowering businesses to thrive in a dynamic digital landscape.</p>
              <h6 className="card-title" style={{ fontSize: '46px', marginLeft: '20px', marginTop: '13px', color: '#fff' }}>100%</h6>
              <p className="card-text" style={{ marginLeft: '20px', fontSize: '17px', color: '#fff' }}>client Satification</p>
              <Link to="/contact.html"><a href="contact.html" className="btn btn-primary" style={{ cursor: 'pointer', border: '1px solid #fff', backgroundColor: 'transparent', marginLeft: '20px', marginTop: '20px', height: '50px', width: '200px', color: '#fff', fontSize: '1.5em', boxShadow: '0 6px 6px rgba(0, 0, 0, 0.6)' }}><span>Reach Out <FaComments /></span></a></Link><br /><br />
            </div>
          </div>
        </div>
      </section>

      <br />
      <div className="container">
        <div className="row team_h1 text-center">
          <div className="col-md-12">
            <h6 className="color_1">Open Positions</h6>
            <h2>Elevate<span className="color_1"> Your Career With Us</span> </h2>
            <hr className="hr_line mx-auto" />
            <p>Join our dynamic team and bring your unique skills and experiences to the table.<br /> Together, let's innovate and achieve success. Apply now and be part of our journey.</p>
          </div>
        </div>
      </div>





      <section className="hm-gradient">
        <main style={{ backgroundColor: '#fff' }}>
          {/* MDB Cards */}
          <div className="container mt-4">
            {/* Grid row */}
            <div className="row">
              {/* ---------------------------------- */}
              <div className="col-lg-4 col-md-12 mb-4">
                {/* Card */}
                <div className="card">
                  {/* Card image */}
                  <div className="view overlay hm-white-slight">
                    <img src={careerimg5} className="img-fluid" alt="photo" />
                    <a href="#!">
                      <div className="mask"></div>
                    </a>
                  </div>

                  {/* Card content */}
                  <div className="card-body text-center">
                    {/* Title */}
                    <h4 className="card-title">Business Verification</h4>
                    <h7 className="card-title" style={{ color: '#083355' }}>Fresher<span style={{ paddingLeft: '30px' }}> Full Time</span></h7><br />
                    {/* Text */}
                    <p className="card-text" style={{ paddingTop: '20px' }}>A Business Verification Officer validates and authenticates business-related data and documents to ensure compliance and minimize risks.</p>
                    <Link to='/businessverification.html'><a href="bussinessverfication.html" className="btn btn-indigo btn-md" style={{ color: '#fff', backgroundColor: '#083355' }}>Apply Now</a></Link>
                  </div>
                </div>
                {/* /.Card */}
              </div>
              {/* ------------------------------------------------------- */}
              <div className="col-lg-4 col-md-12 mb-4">
                {/* Card */}
                <div className="card">
                  {/* Card image */}
                  <div className="view overlay hm-white-slight">
                    <img src={careerimg6} className="img-fluid" alt="photo" />
                    <a href="#!">
                      <div className="mask"></div>
                    </a>
                  </div>

                  {/* Card content */}
                  <div className="card-body text-center">
                    {/* Title */}
                    <h4 className="card-title">UAE Healthcare Service</h4>
                    <h7 className="card-title" style={{ color: '#083355' }}>1 Year Experience<span style={{ paddingLeft: '30px' }}> Full Time</span></h7><br />
                    {/* Text */}
                    <p className="card-text" style={{ paddingTop: '20px' }}>UAE Healthcare Service job: Providing quality medical care and support to patients across various UAE healthcare facilities.</p>
                    <Link to='/UAEHealthcare.html'><a href="bussinessverfication.html" className="btn btn-indigo btn-md" style={{ color: '#fff', backgroundColor: '#083355' }}>Apply Now</a></Link>
                  </div>
                </div>
                {/* /.Card */}
              </div>
              {/* -------------------------------------------------------- */}
              <div className="col-lg-4 col-md-12 mb-4">
                {/* Card */}
                <div className="card">
                  {/* Card image */}
                  <div className="view overlay hm-white-slight">
                    <img src={careerimg7} className="img-fluid" alt="photo" />
                    <a href="#!">
                      <div className="mask"></div>
                    </a>
                  </div>

                  {/* Card content */}
                  <div className="card-body text-center">
                    {/* Title */}
                    <h4 className="card-title">Email Processing</h4>
                    <h7 className="card-title" style={{ color: '#083355' }}>Fresher<span style={{ paddingLeft: '30px' }}> Full Time</span></h7><br />
                    {/* Text */}
                    <p className="card-text" style={{ paddingTop: '20px' }}>An email processing job involves managing and responding to emails efficiently within an organizational or task-oriented context.</p>
                    <Link to='/emailprocessing.html'><a href="bussinessverfication.html" className="btn btn-indigo btn-md" style={{ color: '#fff', backgroundColor: '#083355' }}>Apply Now</a></Link>
                  </div>
                </div>
                {/* /.Card */}
              </div>
            </div>

            {/* /----------------------------- */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-6 mb-4">
                {/* Card */}
                <div className="card">
                  {/* Card image */}
                  <div className="view overlay hm-white-slight">
                    <img src={careerimg8} height="300" className="w-100" alt="abc" />
                    <a href="#!">
                      <div className="mask"></div>
                    </a>
                  </div>
                  {/* Card content */}
                  <div className="card-body">
                    {/* Title */}
                    <h4 className="card-title">UAE Banking Service</h4>
                    <h7 className="card-title" style={{ color: '#083355' }}>Fresher<span style={{ paddingLeft: '30px' }}> Full Time</span></h7><br />
                    {/* Text */}
                    <p className="card-text">A UAE Banking Service job entails delivering diverse financial services to clients while adhering to local regulations, covering roles like customer service, relationship management, and financial advising within the UAE banking sector.</p>
                    <Link to='/uaebankingservices.html'><a href="uaebankingservices.html" className="btn btn-indigo btn-md" style={{ color: '#fff', backgroundColor: '#083355' }}>Apply Now</a></Link>
                  </div>
                </div>
                {/*/.Card*/}
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-6 mb-4">
                {/* Card */}
                <div className="card">
                  {/* Card image */}
                  <div className="view overlay hm-white-slight">
                    <img src={careerimg9} height="300" className="w-100" alt="abc" />
                    <a href="#!">
                      <div className="mask"></div>
                    </a>
                  </div>
                  {/* Card content */}
                  <div className="card-body">
                    {/* Title */}
                    <h4 className="card-title">Full Stack Developer</h4>
                    <h7 className="card-title" style={{ color: '#083355' }}>Experience<span style={{ paddingLeft: '30px' }}> Full Time</span></h7><br /><br />
                    {/* Text */}
                    <p className="card-text">A Full Stack Developer oversees front-end and back-end development, utilizing HTML, CSS, JavaScript, and server-side technologies. They create functional web applications, managing tasks from UI design to database integration.</p>
                   
                    <Link to='/fullstackdeveloper.html'><a href="fullstackdeveloper.html" className="btn btn-indigo btn-md" style={{ color: '#fff', backgroundColor: '#083355' }}>Apply Now</a></Link>
                  </div>
                </div>
                {/*/.Card*/}
              </div>
              {/* Grid column */}
            </div>
          </div>
        </main>
      </section>

      {/* ---------------------------- */}
      <br />
      <center>
        <section id="contact_h">
          <div className="container">
            <div className="row team_h1 text-center">
              <div className="col-md-12">
                <h6 className="color_1">Unlock Your Potential With Us</h6>
                <h4><span className="color_1">Explore customized opportunities.</span> If you haven't found the right match yet.</h4>
                <p>
                  If you're seeking a position with growth potential, please email us, and our team will reach out to you promptly.</p>
              </div>
            </div>
            <div className="row contact_h1 mt-3">
              <div className="col-md-6">
                <div className="contact_h1i" style={{ marginTop: '10px' }}>
                  <input className="form-control" placeholder="Name" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact_h1i" style={{ marginTop: '10px' }}>
                  <input className="form-control" placeholder="Email" type="text" />
                </div>
              </div>
            </div>
            <div className="row contact_h1 mt-3">
              <div className="col-md-6">
                <div className="contact_h1i" style={{ marginTop: '10px' }}>
                  <input className="form-control" placeholder="Phone" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact_h1i" style={{ marginTop: '10px' }}>
                  <input className="form-control" placeholder="Address" type="text" />
                </div>
              </div>
            </div>
            <div className="row contact_h1 mt-3">
              <div className="col-md-12">
                <div className="contact_h1i">
                  <textarea placeholder="Your Message" className="form_1 form-control"></textarea>
                  <p style={{ textAlign: 'left', paddingTop: '20px' }}>Attach Resume*</p>
                  <div style={{ textAlign: 'left' }}>
                    <input type="file" className="custom-file-input" id="validatedCustomFile" required />
                  </div>
                  <br />
                  <h5 className="mb-0 mt-4 text-center"><a className="button" href="#">Send Message  </a></h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </center>
    </>
  )
}

export default Careersingle

