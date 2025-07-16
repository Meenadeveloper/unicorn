import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserSidebar from '../../components/usernav/UserSidebar'
import FooterTop from '../../components/footer/FooterTop'
import Footer from '../../components/footer/Footer'
import UserNav from '../../components/usernav/UserNav'
import { bookMarkProperty } from '../../data/Propery'
const Wishlist = () => {
       let [show, setShow] = useState(false)
  return (
    <>
      <UserNav/>

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
                    
                    <div className="simple-sidebar sm-sidebar" id="filter_search">
                        
                        <div className="search-sidebar_header">
                            <h4 className="ssh_heading">Close Filter</h4>
                            <button  className="w3-bar-item w3-button w3-large"><i className="fa-regular fa-circle-xmark fs-5 text-muted-2"></i></button>
                        </div>
                        
                        <div className="sidebar-widgets">
                            <UserSidebar show={show} setShow={setShow}/>
                        </div>
                        
                    </div>
                </div>
                
                <div className="col-lg-9 col-md-12">
                    <div className="dashboard-wraper">
                    
                        <div className="form-submit">	
                            <h4>Wishlist Property</h4>
                        </div>
                        
                        <table className="property-table-wrap responsive-table bkmark">

                            <tbody>
                                <tr>
                                    <th><i className="fa fa-file-text"></i> Property</th>
                                    <th></th>
                                </tr>
                                {bookMarkProperty.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td className="property-container">
                                                <img src={item.image} alt=""/>
                                                <div className="title">
                                                    <h4><Link to="#">{item.name}</Link></h4>
                                                    <span>{item.loction} </span>
                                                    <span className="table-property-price">{item.value}</span>
                                                </div>
                                            </td>
                                            <td className="action">
                                                <Link to="#" className="delete"><i className="fa-solid fa-trash-can"></i> Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
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

export default Wishlist