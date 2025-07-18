import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FooterTop from '../components/footer/FooterTop'
import Footer from '../components/footer/Footer'
import UserSidebar from '../components/usernav/UserSidebar'
import UserNav from '../components/usernav/UserNav'
import Navbar from '../components/navbar/Navbar'
const ChangePassword = () => {
       let [show, setShow] = useState(false)
  return (
    <>
<Navbar/>

    <div className="page-title">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h2 className="ipt-title">Welcome!</h2>
                    <span className="ipn-subtitle">Welcome To Your Account</span>
                </div>
            </div>
        </div>
    </div>

    <section className="bg-light">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="filter_search_opt">
                        <Link to="#" onClick={()=>setShow(!show)} className="btn btn-dark full-width mb-4">Dashboard Navigation<i className="fa-solid fa-bars ms-2"></i></Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <UserSidebar show={show} setShow={setShow}/>
                </div>
                
                <div className="col-lg-9 col-md-12">
                    <div className="dashboard-wraper">
                    
                        <div className="form-submit">	
                            <h4>Change Your Password</h4>
                            <div className="submit-section">
                                <div className="row">
                                    <div className="form-group col-lg-12 col-md-6">
                                        <label>Old Password</label>
                                        <input type="password" className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>New Password</label>
                                        <input type="password" className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Confirm password</label>
                                        <input type="password" className="form-control"/>
                                    </div>
                                    <div className="form-group col-lg-12 col-md-12">
                                        <button className="btn btn-primary px-5 rounded" type="submit">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FooterTop bg="theme-bg"/>
    <Footer/>
    
    </>
  )
}

export default ChangePassword