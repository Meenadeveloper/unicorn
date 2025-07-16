import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FiChevronDown } from "react-icons/fi";
import { TiSocialGooglePlus, TiSocialFacebook } from "react-icons/ti";

import { navProperty } from '../../data/data';

import logo from '../../assets/img/logo.svg'
import user from '../../assets/img/team-1.jpg'


const UserNav = () => {

     const [activeMenu, setActiveMenu] = useState({});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [toggle, setIsToggle] = useState(false);
    const [login, setLogin] = useState(false);
    const [property, setProperty] = useState(false);
    const [activeTab, setActiveTab] = useState(1)
    const [userMenu, setUserMenu] = useState(false)

    let[scroll,setScroll] = useState(false)

    const location = useLocation(); 
    const current = location.pathname

    const handleMouseEnter = (menu, submenu) => {
        setActiveMenu((prev) => ({
          ...prev,
          [menu]: {
            ...prev[menu],
            [submenu || 'main']: true, // Open main menu or submenu
          },
        }));
      };
    
      // Handle mouse leave for any menu or submenu
      const handleMouseLeave = (menu, submenu) => {
        setActiveMenu((prev) => ({
          ...prev,
          [menu]: {
            ...prev[menu],
            [submenu || 'main']: false, // Close main menu or submenu
          },
        }));
      };

      useEffect(()=>{
        window.scrollTo(0,0)

        const handlerScroll=()=>{
            if(window.scrollY > 50){
                setScroll(true)
            }else{setScroll(false)}
        }

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };

        window.addEventListener('scroll',handlerScroll)
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll',handlerScroll)
            window.removeEventListener('resize', handleResize);
          };
    },[])
  return (
    <>
    
     <div className={`header header-light head-shadow ${scroll ? 'header-fixed' : ''}`}>
            <div className="container">
                <nav id="navigation" className={windowWidth > 991 ? "navigation navigation-landscape" : "navigation navigation-portrait"}>
                    <div className="nav-header" style={{lineHeight:'0'}}>
                        <Link className="nav-brand text-logo" to="#">
                            <img src={logo} alt="" />
                            <h5 className="fs-3 fw-bold ms-1 my-0">Unicorn</h5>
                        </Link>
                        <div className="nav-toggle" onClick={()=>setIsToggle(!toggle)}></div>

                        <div className="mobile_nav">
                            <ul>
                                <li>
                                    <Link to="/submit-property" className="text-primary">
                                        <span className="svg-icon svg-icon-2hx">
                                            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
                                                <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"/>
                                                <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"/>
                                            </svg>
                                        </span>	
                                    </Link>
                                </li>
                                <li>
                                    <div className="btn-group account-drop">
                                        <button type="button" className="btn btn-order-by-filt dropdown-toggle" id="showbuttons" onClick={()=>setUserMenu(!userMenu)}>
                                            <img src={user} className="avater-img" alt=""/>
                                        </button>
                                        <div className="dropdown-menu pull-right animated flipInX" id="showings" style={{display:userMenu ? 'block' : 'none'}}>
											<Link to="/my-profile"><i className="fa-solid fa-address-card"></i>My Profile</Link>                                  
											<Link to="/bookmark-list"><i className="fa-solid fa-bookmark"></i>Wishlist Property</Link>                                   
											<Link to="/change-password"><i className="fa-solid fa-unlock"></i>Change Password</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`nav-menus-wrapper  ${toggle ? 'nav-menus-wrapper-open' : ''}`} style={{transitionProperty:toggle ? 'none' : 'left'}}>
                        <span className="nav-menus-wrapper-close-button" onClick={()=>setIsToggle(!toggle)}>✕</span>
                        <ul className="nav-menu">
                        
                          
                            
                            <li className={` ${['/list-layout-one','/list-layout-two','/list-layout-three','/list-layout-with-map','/list-layout-full','/list-layout-one','/list-layout-two','/list-layout-three','/list-layout-with-map','/list-layout-full','/grid-layout-with-sidebar','/classical-layout-with-sidebar','/grid-layout-with-map','/grid','/classical-property','/list-layout-with-map','/grid-layout-with-map','/classical-layout-with-map','/half-map','/half-map-2'].includes(current) ? 'active' : ''} ${activeMenu['listing']?.main ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('listing')} onMouseLeave={() => handleMouseLeave('listing')}><Link to="#">Listings<FiChevronDown className="submenu-indicator"/></Link>
                               
                            </li>
                            
                            <li className={`${['/single-property-1','/single-property-2','/single-property-3','/single-property-4','/agents','/agent-page','/add-agent','/agencies','/agency-page','/dashboard','/create-account','/my-profile','/checkout','/my-property','/bookmark-list','/change-password','/compare-property','/submit-property'].includes(current)?'active':''} ${activeMenu['feature']?.main ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('feature')} onMouseLeave={() => handleMouseLeave('feature')}><Link to="#">Features<FiChevronDown className="submenu-indicator"/></Link>
                               
                            </li>
                            
                            <li className={`${['/blog','/blog-detail','/component','/pricing','/404','/contact'].includes(current)?'active':''} ${activeMenu['pages']?.main ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('pages')} onMouseLeave={() => handleMouseLeave('pages')}><Link to="#">Pages<FiChevronDown className="submenu-indicator"/></Link>
                               
                            </li>
                        </ul>
                        
                        <ul className="nav-menu nav-menu-social align-to-right d-none d-lg-inline-flex">
                            <ul className="nav-menu nav-menu-social align-to-right">
								<li>
									<div className="btn-group account-drop">
										<button type="button" className="btn btn-order-by-filt dropdown-toggle" onClick={()=>setUserMenu(!userMenu)}>
											<img src={user} className="avater-img" alt=""/>Hi, Admin
										</button>
										<div className="dropdown-menu pull-right animated flipInX" id="showing" style={{display:userMenu ? 'block' : 'none'}}>
											<Link to="/my-profile"><i className="fa-solid fa-address-card"></i>My Profile</Link>                                  
											<Link to="/bookmark-list"><i className="fa-solid fa-bookmark"></i>Bookmarked Property</Link>                                   
											<Link to="/change-password"><i className="fa-solid fa-unlock"></i>Change Password</Link>
										</div>
									</div>
								</li>
							</ul>
                        </ul>
                    </div>
                    <div className="nav-overlay-panel" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', display: toggle ?  'block' : 'none'}}></div>
                </nav>
            </div>
        </div>
        <div className="clearfix"></div>

        {login && 
            <div className="modal fade show" style={{display: 'block', backgroundColor:"#0000008a"}}>
                <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
                    <div className="modal-content" id="registermodal">
                        <span className="mod-close"  onClick={()=>setLogin(!login)}>
                            <span className="svg-icon text-primary svg-icon-2hx">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                    <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor"></rect>
                                    <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor"></rect>
                                </svg>
                            </span>
                        </span>
                        <div className="modal-body">
                            <h4 className="modal-header-title">Log In</h4>
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <span className="svg-icon text-primary svg-icon-2hx">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8797 15.375C15.9797 15.075 15.9797 14.775 15.9797 14.475C15.9797 13.775 15.7797 13.075 15.4797 12.475C14.7797 11.275 13.4797 10.475 11.9797 10.475C11.7797 10.475 11.5797 10.475 11.3797 10.575C7.37971 11.075 4.67971 14.575 2.57971 18.075L10.8797 3.675C11.3797 2.775 12.5797 2.775 13.0797 3.675C13.1797 3.875 13.2797 3.975 13.3797 4.175C15.2797 7.575 16.9797 11.675 15.8797 15.375Z" fill="currentColor"></path>
                                        <path opacity="0.3" d="M20.6797 20.6749C16.7797 20.6749 12.3797 20.275 9.57972 17.575C10.2797 18.075 11.0797 18.375 11.9797 18.375C13.4797 18.375 14.7797 17.5749 15.4797 16.2749C15.6797 15.9749 15.7797 15.675 15.7797 15.375V15.2749C16.8797 11.5749 15.2797 7.47495 13.2797 4.07495L21.6797 18.6749C22.2797 19.5749 21.6797 20.6749 20.6797 20.6749ZM8.67972 18.6749C8.17972 17.8749 7.97972 16.975 7.77972 15.975C7.37972 13.575 8.67972 10.775 11.3797 10.375C7.37972 10.875 4.67972 14.375 2.57972 17.875C2.47972 18.075 2.27972 18.375 2.17972 18.575C1.67972 19.475 2.27972 20.475 3.27972 20.475H10.3797C9.67972 20.175 9.07972 19.3749 8.67972 18.6749Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="login-form">
                                <form>
                                
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" placeholder="name@example.com"/>
                                        <label>Email address</label>
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" placeholder="Password"/>
                                        <label>Password</label>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="flex-shrink-0 flex-first">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="save-pass" value="option1"/>
                                                    <label className="form-check-label" htmlFor="save-pass">Save Password</label>
                                                </div>	
                                            </div>
                                            <div className="flex-shrink-0 flex-first">
                                                <Link to="#" className="link fw-medium">Forgot Password?</Link>	
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <button type="button" className="btn btn-lg btn-primary fw-medium full-width rounded-2">LogIn</button>
                                    </div>
                                
                                </form>
                            </div>
                            <div className="modal-divider"><span>Or login via</span></div>
                            <div className="social-login mb-3">
                                <ul>
                                    <li><Link to="#" className="btn connect-fb"><TiSocialFacebook className="ti-facebook" style={{width:'25px' , height:'25px'}}/>Facebook</Link></li>
                                    <li><Link to="#" className="btn connect-google"><TiSocialGooglePlus  className="ti-google" style={{width:'25px' , height:'25px'}}/>Google+</Link></li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <p className="mt-4">Have't Any Account? <Link to="/create-account" className="link fw-medium">Acreate An Account</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

        <div className={`offcanvas offcanvas-end  ${property ? 'show' : ''}`}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Compare & Selected Property</h5>
                <Link to="#" onClick={()=>setProperty(!property)}>
                    <span className="svg-icon text-primary svg-icon-2hx">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"/>
                            <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor"/>
                            <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor"/>
                        </svg>
                    </span>
                </Link>
            </div>
            <div className="offcanvas-body">
                <ul className="nav nav-pills sider_tab mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <button className={`nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>Compare Property</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>Saved Property</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                        <div className="sidebar_featured_property">

                            {navProperty.slice(0,4).map((item,index)=>{
                                return(
                                    <div className="sides_list_property p-2" key={index}>
                                        <div className="sides_list_property_thumb">
                                            <img src={item.image} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="sides_list_property_detail">
                                            <h4><Link to="/single-property-1">{item.title}</Link></h4>
                                            <span className="text-muted-2"><i className="fa-solid fa-location-dot"></i>{item.loction}</span>
                                            <div className="lists_property_price">
                                                <div className="lists_property_types">
                                                    {item.tag === 'For Sale' && <div className="property_types_vlix sale">For Sale</div>}
                                                    {item.tag === 'For Rent' && <div className="property_types_vlix">For Rent</div>}
                                                    {item.tag === 'For Buy' && <div className="property_types_vlix buy">For Buy</div>}
                                                    
                                                </div>
                                                <div className="lists_property_price_value">
                                                    <h4 className="text-primary">{item.value}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            
                            <div className="input-group">
                                <Link to="/compare-property" className="btn btn-light-primary fw-medium full-width">View & Compare</Link>
                            </div>
                        </div>	
                    </div>
                    <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                        <div className="sidebar_featured_property">
                            {navProperty.slice(4,8).map((item,index)=>{
                                return(
                                    <div className="sides_list_property p-2" key={index}>
                                        <div className="sides_list_property_thumb">
                                            <img src={item.image} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="sides_list_property_detail">
                                            <h4><Link to="/single-property-1">{item.title}</Link></h4>
                                            <span className="text-muted-2"><i className="fa-solid fa-location-dot"></i>{item.loction}</span>
                                            <div className="lists_property_price">
                                                <div className="lists_property_types">
                                                    {item.tag === 'For Sale' && <div className="property_types_vlix sale">For Sale</div>}
                                                    {item.tag === 'For Rent' && <div className="property_types_vlix">For Rent</div>}
                                                    {item.tag === 'For Buy' && <div className="property_types_vlix buy">For Buy</div>}
                                                    
                                                </div>
                                                <div className="lists_property_price_value">
                                                    <h4 className="text-primary">{item.value}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="input-group">
                                <Link to="#" className="btn btn-light-primary fw-medium full-width">View & Compare</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    
    
    
    
    </>
  )
}

export default UserNav