
// Dynamic Navbar Component
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { TiSocialGooglePlus, TiSocialFacebook } from "react-icons/ti";
import { navbarData } from "../../data/menuData";
import user from "../../assets/img/team-1.jpg";
import { useNavigate } from "react-router-dom";
const Navbar = ({ transparent = false }) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggle, setIsToggle] = useState(false);
  const [login, setLogin] = useState(false);
  const [property, setProperty] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [scroll, setScroll] = useState(false);
    const [userMenu, setUserMenu] = useState(false)

  const location = useLocation();
  const current = location.pathname;
const isUserRoute = location.pathname.startsWith("/user/");
  // Check if current path is active for a menu item
  const isPathActive = (item) => {
    if (item.activePaths) {
      return item.activePaths.includes(current);
    }
    return item.path === current;
  };

  // Handle mouse enter for dropdowns
  const handleMouseEnter = (menu, submenu) => {
    setActiveMenu((prev) => ({
      ...prev,
      [menu]: {
        ...prev[menu],
        [submenu || "main"]: true,
      },
    }));
  };

  // Handle mouse leave for dropdowns
  const handleMouseLeave = (menu, submenu) => {
    setActiveMenu((prev) => ({
      ...prev,
      [menu]: {
        ...prev[menu],
        [submenu || "main"]: false,
      },
    }));
  };

  // Render icon based on type
  const renderIcon = (icon) => {
    if (!icon) return null;
    
    if (icon.type === "svg") {
      return (
        <span className="svg-icon svg-icon-2hx me-1" dangerouslySetInnerHTML={{ __html: icon.content }} />
      );
    }
    
    if (icon.type === "image") {
      return <img src={icon.src} alt={icon.alt || ""} className={icon.className || ""} />;
    }
    
    return null;
  };

  // Render submenu recursively
  const renderSubmenu = (submenuItems, parentSlug, submenuSlug) => {
    if (!submenuItems || submenuItems.length === 0) return null;

    return (
      <ul
        className="nav-dropdown nav-submenu"
        style={{
          display: activeMenu[parentSlug]?.[submenuSlug] ? "block" : "none",
          pointerEvents: activeMenu[parentSlug]?.[submenuSlug] ? "auto" : "none",
        }}
      >
        {submenuItems.map((subItem) => (
          <li key={subItem.id}>
            <Link
              to={subItem.path}
              className={subItem.path === current ? "active" : ""}
            >
              {subItem.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  // Render main menu items
  const renderMainMenu = () => {
    return navbarData.mainMenu.map((menuItem) => (
      <li
        key={menuItem.id}
        className={`${isPathActive(menuItem) ? "active" : ""} ${
          menuItem.hasDropdown && activeMenu[menuItem.slug]?.main ? "show" : ""
        }`}
        onMouseEnter={menuItem.hasDropdown ? () => handleMouseEnter(menuItem.slug) : undefined}
        onMouseLeave={menuItem.hasDropdown ? () => handleMouseLeave(menuItem.slug) : undefined}
      >
        <Link to={menuItem.path}>
          {menuItem.title}
          {menuItem.hasDropdown && <FiChevronDown className="submenu-indicator" />}
        </Link>
        {menuItem.hasDropdown && (
          <ul
            className="nav-dropdown nav-submenu"
            style={{
              display: activeMenu[menuItem.slug]?.main ? "block" : "none",
              pointerEvents: activeMenu[menuItem.slug]?.main ? "auto" : "none",
            }}
          >
            {menuItem.submenu.map((subItem) => (
              <li
                key={subItem.id}
                className={isPathActive(subItem) ? "active" : ""}
                onMouseEnter={subItem.hasSubmenu ? () => handleMouseEnter(menuItem.slug, subItem.slug) : undefined}
                onMouseLeave={subItem.hasSubmenu ? () => handleMouseLeave(menuItem.slug, subItem.slug) : undefined}
              >
                <Link to={subItem.path} className={subItem.path === current ? "active" : ""}>
                  {subItem.title}
                  {subItem.hasSubmenu && <FiChevronDown className="submenu-indicator" />}
                </Link>
                {subItem.hasSubmenu && renderSubmenu(subItem.submenu, menuItem.slug, subItem.slug)}
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };

  // Render social menu
  const renderSocialMenu = () => {
    return navbarData.socialMenu.map((item) => (
      <li key={item.id} className={item.wrapperClass || ""}>
        <Link
          to={item.path || ""}
          className={item.className}
          onClick={() => {
            if (item.action === "login") setLogin(!login);
            if (item.action === "property") setProperty(!property);
          }}
        >
          {renderIcon(item.icon)}
          {item.title}
        </Link>
      </li>
    ));
  };

  // Render mobile menu
  const renderMobileMenu = () => {
    return navbarData.mobileMenu.map((item) => (
      <li key={item.id}>
        <Link
          to={item.path || "#"}
          className={item.className || ""}
          onClick={() => {
            if (item.action === "login") setLogin(!login);
            if (item.action === "property") setProperty(!property);
          }}
        >
          {renderIcon(item.icon)}
        </Link>
      </li>
    ));
  };

  // Render property cards
  const renderPropertyCards = (properties) => {
    return properties.map((property) => (
      <div className="sides_list_property p-2" key={property.id}>
        <div className="sides_list_property_thumb">
          <img
            src={property.image}
            className="img-fluid"
            alt={property.title}
          />
        </div>
        <div className="sides_list_property_detail">
          <h4>
            <Link
              to={`/property-detail/${property.id}`}
              className="text-decoration-none"
            >
              {property.title}
            </Link>
          </h4>
          <span className="text-muted-2">
            <i className="fa-solid fa-location-dot"></i>
            {property.location}
          </span>
          <div className="lists_property_price">
            <div className="lists_property_types">
              {property.tag === "For Sale" && (
                <div className="property_types_vlix sale">For Sale</div>
              )}
              {property.tag === "For Rent" && (
                <div className="property_types_vlix">For Rent</div>
              )}
              {property.tag === "For Buy" && (
                <div className="property_types_vlix buy">For Buy</div>
              )}
            </div>
            <div className="lists_property_price_value">
              <h4 className="text-primary">{property.price}</h4>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handlerScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handlerScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

   const handleLoginClick = () => {
     navigate("/user/my-profile");
   };


  return (
    <>
      <div
        className={`header ${scroll ? "header-fixed" : ""} ${
          transparent ? "header-transparent dark" : "header-light head-shadow"
        }`}
      >
        <div className="container">
          <nav
            id="navigation"
            className={
              windowWidth > 991
                ? "navigation navigation-landscape"
                : "navigation navigation-portrait"
            }
          >
            <div className="nav-header" style={{ lineHeight: "0" }}>
              <Link
                className="nav-brand text-logo"
                to="/"
                style={{
                  width: "auto", // allow image to size naturally
                  height: "auto", // let image control height
                  // marginRight: "50px",
                  display: "flex", // helps with layout
                  alignItems: "center",
                }}
              >
                <img
                  src={navbarData.siteConfig.logo}
                  alt={navbarData.siteConfig.logoAlt}
                  style={{
                    maxHeight: "70px", // controls height of logo
                    maxWidth: "100%", // prevents horizontal overflow
                    objectFit: "contain", // maintains aspect ratio
                  }}
                />
                {/* <h5 className="fs-3 fw-bold ms-1 my-0">
                  {navbarData.siteConfig.siteName}
                </h5> */}
              </Link>
              <div
                className="nav-toggle"
                onClick={() => setIsToggle(!toggle)}
              ></div>
              <div className="mobile_nav">
                <ul>{renderMobileMenu()}</ul>
              </div>
            </div>

            <div
              className={`nav-menus-wrapper ${
                toggle ? "nav-menus-wrapper-open" : ""
              }`}
              style={{ transitionProperty: toggle ? "none" : "left" }}
            >
              <span
                className="nav-menus-wrapper-close-button"
                onClick={() => setIsToggle(!toggle)}
              >
                ✕
              </span>
              <ul className="nav-menu">{renderMainMenu()}</ul>
              {!isUserRoute && (
                <ul className="nav-menu nav-menu-social align-to-right d-none d-lg-inline-flex">
                  {renderSocialMenu()}
                </ul>
              )}
              {isUserRoute && (
                <ul className="nav-menu nav-menu-social align-to-right d-none d-lg-inline-flex">
                  <ul className="nav-menu nav-menu-social align-to-right">
                    <li>
                      <div className="btn-group account-drop">
                        <button
                          type="button"
                          className="btn btn-order-by-filt dropdown-toggle"
                          onClick={() => setUserMenu(!userMenu)}
                        >
                          <img src={user} className="avater-img" alt="" />
                          Hi, Admin
                        </button>
                        <div
                          className="dropdown-menu pull-right animated flipInX"
                          style={{ display: userMenu ? "block" : "none" }}
                        >
                          <Link to="/user/my-profile">
                            <i className="fa-solid fa-address-card"></i>My
                            Profile
                          </Link>
                          <Link to="/user/wishlist">
                            <i className="fa-solid fa-bookmark"></i>Wishlist
                            Property
                          </Link>
                          <Link to="/user/change-password">
                            <i className="fa-solid fa-unlock"></i>Change
                            Password
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </ul>
              )}
            </div>

            <div
              className="nav-overlay-panel"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: toggle ? "block" : "none",
              }}
            ></div>
          </nav>
        </div>
      </div>
      <div className="clearfix"></div>

      {/* Login Modal */}
      {login && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "#0000008a" }}
        >
          <div
            className="modal-dialog modal-dialog-centered login-pop-form"
            role="document"
          >
            <div className="modal-content" id="registermodal">
              <span className="mod-close" onClick={() => setLogin(!login)}>
                <span className="svg-icon text-primary svg-icon-2hx">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.3"
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="10"
                      fill="currentColor"
                    ></rect>
                    <rect
                      x="7"
                      y="15.3137"
                      width="12"
                      height="2"
                      rx="1"
                      transform="rotate(-45 7 15.3137)"
                      fill="currentColor"
                    ></rect>
                    <rect
                      x="8.41422"
                      y="7"
                      width="12"
                      height="2"
                      rx="1"
                      transform="rotate(45 8.41422 7)"
                      fill="currentColor"
                    ></rect>
                  </svg>
                </span>
              </span>
              <div className="modal-body">
                <h4 className="modal-header-title">Log In</h4>
                <div className="d-flex align-items-center justify-content-center mb-3">
                  {/* <span className="svg-icon text-primary svg-icon-2hx">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8797 15.375C15.9797 15.075 15.9797 14.775 15.9797 14.475C15.9797 13.775 15.7797 13.075 15.4797 12.475C14.7797 11.275 13.4797 10.475 11.9797 10.475C11.7797 10.475 11.5797 10.475 11.3797 10.575C7.37971 11.075 4.67971 14.575 2.57971 18.075L10.8797 3.675C11.3797 2.775 12.5797 2.775 13.0797 3.675C13.1797 3.875 13.2797 3.975 13.3797 4.175C15.2797 7.575 16.9797 11.675 15.8797 15.375Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M20.6797 20.6749C16.7797 20.6749 12.3797 20.275 9.57972 17.575C10.2797 18.075 11.0797 18.375 11.9797 18.375C13.4797 18.375 14.7797 17.5749 15.4797 16.2749C15.6797 15.9749 15.7797 15.675 15.7797 15.375V15.2749C16.8797 11.5749 15.2797 7.47495 13.2797 4.07495L21.6797 18.6749C22.2797 19.5749 21.6797 20.6749 20.6797 20.6749ZM8.67972 18.6749C8.17972 17.8749 7.97972 16.975 7.77972 15.975C7.37972 13.575 8.67972 10.775 11.3797 10.375C7.37972 10.875 4.67972 14.375 2.57972 17.875C2.47972 18.075 2.27972 18.375 2.17972 18.575C1.67972 19.475 2.27972 20.475 3.27972 20.475H10.3797C9.67972 20.175 9.07972 19.3749 8.67972 18.6749Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span> */}
                </div>
                <div className="login-form">
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                      />
                      <label>Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                      <label>Password</label>
                    </div>

                    <div className="form-group mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="flex-shrink-0 flex-first">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="save-pass"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="save-pass"
                            >
                              Save Password
                            </label>
                          </div>
                        </div>
                        <div className="flex-shrink-0 flex-first">
                          <Link to="#" className="link fw-medium">
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-lg btn-primary fw-medium full-width rounded-2"
                        onClick={handleLoginClick}
                      >
                        LogIn
                      </button>
                    </div>
                  </form>
                </div>
                {/* <div className="modal-divider">
                  <span>Or login via</span>
                </div> */}
                {/* <div className="social-login mb-3">
                  <ul>
                    <li>
                      <Link to="#" className="btn connect-fb">
                        <TiSocialFacebook
                          className="ti-facebook"
                          style={{ width: "25px", height: "25px" }}
                        />
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="btn connect-google">
                        <TiSocialGooglePlus
                          className="ti-google"
                          style={{ width: "25px", height: "25px" }}
                        />
                        Google+
                      </Link>
                    </li>
                  </ul>
                </div> */}
                <div className="text-center">
                  <p className="mt-4">
                    Haven't Any Account?{" "}
                    <Link to="/create-account" className="link fw-medium">
                      Create An Account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Property Sidebar */}
      <div className={`offcanvas offcanvas-end ${property ? "show" : ""}`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Wishlist Property
          </h5>
          <Link to="#" onClick={() => setProperty(!property)}>
            <span className="svg-icon text-primary svg-icon-2hx">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.3"
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="10"
                  fill="currentColor"
                />
                <rect
                  x="7"
                  y="15.3137"
                  width="12"
                  height="2"
                  rx="1"
                  transform="rotate(-45 7 15.3137)"
                  fill="currentColor"
                />
                <rect
                  x="8.41422"
                  y="7"
                  width="12"
                  height="2"
                  rx="1"
                  transform="rotate(45 8.41422 7)"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="offcanvas-body">
          {/* <ul
            className="nav nav-pills sider_tab mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                onClick={() => setActiveTab(1)}
              >
                Compare Property
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                onClick={() => setActiveTab(2)}
              >
                Saved Property
              </button>
            </li>
          </ul> */}
          <div className="tab-content" id="pills-tabContent">
            <div
              className={`tab-pane fade ${
                activeTab === 1 ? "show active" : ""
              }`}
            >
              <div className="sidebar_featured_property">
                {renderPropertyCards(navbarData.properties.slice(0, 4))}
                <div className="input-group">
                  <Link
                    to="/"
                    className="btn btn-light-primary fw-medium full-width"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === 2 ? "show active" : ""
              }`}
            >
              <div className="sidebar_featured_property">
                {renderPropertyCards(navbarData.properties.slice(4, 8))}
                <div className="input-group">
                  <Link
                    to="#"
                    className="btn btn-light-primary fw-medium full-width"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// Helper functions for managing menu data
export const menuHelpers = {
  // Add new menu item
  addMenuItem: (menuData, newItem, parentId = null) => {
    if (parentId) {
      // Add to submenu
      const addToSubmenu = (items) => {
        return items.map(item => {
          if (item.id === parentId) {
            return {
              ...item,
              submenu: [...(item.submenu || []), newItem],
              hasDropdown: true
            };
          }
          if (item.submenu) {
            return {
              ...item,
              submenu: addToSubmenu(item.submenu)
            };
          }
          return item;
        });
      };
      
      return {
        ...menuData,
        mainMenu: addToSubmenu(menuData.mainMenu)
      };
    } else {
      // Add to main menu
      return {
        ...menuData,
        mainMenu: [...menuData.mainMenu, newItem]
      };
    }
  },

  // Remove menu item
  removeMenuItem: (menuData, itemId) => {
    const removeFromMenu = (items) => {
      return items.filter(item => {
        if (item.id === itemId) return false;
        if (item.submenu) {
          item.submenu = removeFromMenu(item.submenu);
        }
        return true;
      });
    };

    return {
      ...menuData,
      mainMenu: removeFromMenu(menuData.mainMenu)
    };
  },

  // Update menu item
  updateMenuItem: (menuData, itemId, updates) => {
    const updateInMenu = (items) => {
      return items.map(item => {
        if (item.id === itemId) {
          return { ...item, ...updates };
        }
        if (item.submenu) {
          return {
            ...item,
            submenu: updateInMenu(item.submenu)
          };
        }
        return item;
      });
    };

    return {
      ...menuData,
      mainMenu: updateInMenu(menuData.mainMenu)
    };
  },

  // Get active breadcrumbs
  getBreadcrumbs: (menuData, currentPath) => {
    const breadcrumbs = [];
    
    const findPath = (items, path = []) => {
      for (const item of items) {
        const currentBreadcrumb = [...path, { title: item.title, path: item.path }];
        
        if (item.path === currentPath || (item.activePaths && item.activePaths.includes(currentPath))) {
          breadcrumbs.push(...currentBreadcrumb);
          return true;
        }
        
        if (item.submenu && findPath(item.submenu, currentBreadcrumb)) {
          return true;
        }
      }
      return false;
    };
    
    findPath(menuData.mainMenu);
    return breadcrumbs;
  },

  // Search menu items
  searchMenuItems: (menuData, searchTerm) => {
    const results = [];
    
    const searchInMenu = (items, parentPath = []) => {
      items.forEach(item => {
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push({
            ...item,
            breadcrumb: [...parentPath, item.title].join(' > ')
          });
        }
        
        if (item.submenu) {
          searchInMenu(item.submenu, [...parentPath, item.title]);
        }
      });
    };
    
    searchInMenu(menuData.mainMenu);
    return results;
  }
};

// Usage example
export const NavbarUsageExample = () => {
  const [currentMenuData, setCurrentMenuData] = useState(navbarData);

  // Example: Add new menu item
  const addNewMenuItem = () => {
    const newItem = {
      id: Date.now(),
      title: "Services",
      slug: "services",
      path: "/services",
      hasDropdown: true,
      activePaths: ["/services", "/consulting", "/support"],
      submenu: [
        { id: Date.now() + 1, title: "Consulting", path: "/consulting" },
        { id: Date.now() + 2, title: "Support", path: "/support" }
      ]
    };
    
    const updatedMenu = menuHelpers.addMenuItem(currentMenuData, newItem);
    setCurrentMenuData(updatedMenu);
  };

  return (
    <div>
      <DynamicNavbar transparent={false} />
      
      {/* Example controls */}
      <div style={{ padding: "20px" }}>
        <button onClick={addNewMenuItem} className="btn btn-primary">
          Add Services Menu
        </button>
      </div>
    </div>
  );
};