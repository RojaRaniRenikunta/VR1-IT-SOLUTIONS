import React from 'react'
import galleryimg1 from '../Images/Gallery/photo1.jpg'
import galleryimg2 from '../Images/Gallery/photo2.png'
import galleryimg3 from '../Images/Gallery/photo3.png'
import galleryimg4 from '../Images/Gallery/photo4.png'
import galleryimg5 from '../Images/Gallery/photo5.png'
import galleryimg6 from '../Images/Gallery/photo6.png'
import galleryimg7 from '../Images/Gallery/birth1.png'
import galleryimg8 from '../Images/Gallery/birth2.png'
import galleryimg9 from '../Images/Gallery/birth3.png'



function Gallery() {
    return (
        <>
            <section id="center" className="center_gal">
                <div className="center_om clearfix">
                    <div className="container">
                        <div className="row center_o1 text-center">
                            <div className="col-md-12">
                                <h1 className="text-white">Gallery</h1>
                                <h5 className="mb-0 mt-3 text-light"><a href="#">Home</a> <a href="#"><span className="span_1">/</span><span className="color_1" style={{ color: '#fff' }}>Gallery</span> </a> </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --------------------------------------------- */}
            <section id="gal_pg">
                <div className="container">
                    <div className="row team_h1 text-center" style={{ marginTop: "55px" }}>
                        <div className="col-md-12">
                            <h6 className="color_1">EMPLOYEE WELCOME</h6>
                        </div>
                    </div>
                    {/* ----------------------------------------------- */}
                    <div className="row gallery_1">
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src={galleryimg1}
                                    data-bs-target="#exampleModal" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: "none" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/1.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src={galleryimg2}
                                    data-bs-target="#exampleModal1" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel1">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/2.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src={galleryimg3}
                                    data-bs-target="#exampleModal2" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true" style={{ display: "none" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel2">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/3.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -------------------------------------------- */}
                    <div className="row team_h1 text-center" style={{marginTop:'55px'}}>
                        <div className="col-md-12">
                            <h6 className="color_1">HOLY CELEBRATIONS</h6>

                        </div>
                    </div>
                    <div className="row gallery_1">
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src={galleryimg4}
                                    data-bs-target="#exampleModal" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: "none" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/1.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src={galleryimg5}
                                    data-bs-target="#exampleModal1" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel1">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/2.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src={galleryimg6}
                                    data-bs-target="#exampleModal2" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true" style={{ display: "none" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel2">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/3.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -------------------------- */}
                    <div className="row team_h1 text-center" style={{marginTop:'55px'}}>
                        <div className="col-md-12">
                            <h6 className="color_1">SHREE RAMA NAVAMI</h6>

                        </div>
                    </div>
                    {/* --------------------------------------------- */}
                    <div className="row gallery_1">
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/shree1.gif?alt=media&token=eb05418a-c706-4714-b9b7-37f0f22ce1b2"
                                    data-bs-target="#exampleModal" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: "none" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/1.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/shree2.gif?alt=media&token=09ea060a-21ef-4b77-a950-29be85013681"
                                    data-bs-target="#exampleModal1" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel1">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/2.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src="https://firebasestorage.googleapis.com/v0/b/vr1site.appspot.com/o/shree3.gif?alt=media&token=1f036a3b-2e36-47b2-b67b-7c077def5b1d"
                                    data-bs-target="#exampleModal2" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true" style={{ display: "none" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel2">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/3.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -------------------------- */}
                    <div className="row team_h1 text-center" style={{marginTop:'55px'}}>
                        <div className="col-md-12">
                            <h6 className="color_1">BIRTHDAY CELEBRATIONS</h6>

                        </div>
                    </div>
                    {/* --------------------------------------------- */}
                    <div className="row gallery_1">
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src={galleryimg7}
                                    data-bs-target="#exampleModal" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: "none" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/1.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src={galleryimg8}
                                    data-bs-target="#exampleModal1" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel1">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/2.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gallery_1i">
                                <img src={galleryimg9}
                                    data-bs-target="#exampleModal2" data-bs-toggle="modal" className="w-100" height="280" alt="abc" style={{ cursor: "default" }} />
                                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true" style={{ display: "none" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel2">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="img/3.jpg" className="w-100" alt="abc" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -------------------------- */}








                </div>
            </section>
        </>
    )
}

export default Gallery
