// menuData.js - Dynamic Menu Configuration
export const menuData = {
  mainMenu: [
    {
      id: 1,
      title: "Home",
      slug: "home",
      path: "/",
      hasDropdown: true,
      icon: "home",
      isActive: true,
      submenu: [
        { id: 11, title: "Home Layout 1", path: "/", isActive: true },
        { id: 12, title: "Home Layout 2", path: "/home-2", isActive: false },
        { id: 13, title: "Home Layout 3", path: "/home-3", isActive: false },
        { id: 14, title: "Home Layout 4", path: "/home-4", isActive: false },
        { id: 15, title: "Home Layout 5", path: "/home-5", isActive: false },
        { id: 16, title: "Home Layout 6", path: "/home-6", isActive: false },
        { id: 17, title: "Home Layout 7", path: "/home-7", isActive: false },
        { id: 18, title: "Home Layout 8", path: "/home-8", isActive: false },
        { id: 19, title: "Home Layout 9", path: "/home-9", isActive: false },
        { id: 20, title: "Home Layout 10", path: "/home-10", isActive: false },
        { id: 21, title: "Home Layout 11", path: "/home-11", isActive: false },
        { id: 22, title: "Video Home", path: "/video", isActive: false },
        { id: 23, title: "Map Home Layout", path: "/map", isActive: false },
      ],
    },
    {
      id: 2,
      title: "Listings",
      slug: "listings",
      path: "/listings",
      hasDropdown: true,
      icon: "list",
      isActive: false,
      submenu: [
        {
          id: 24,
          title: "List Layout",
          path: "/list-layout",
          hasSubmenu: true,
          submenu: [
            {
              id: 241,
              title: "List Layout Simple",
              path: "/list-layout-one",
              isActive: false,
            },
            {
              id: 242,
              title: "List Layout Modern",
              path: "/list-layout-two",
              isActive: false,
            },
            {
              id: 243,
              title: "List Layout Advance",
              path: "/list-layout-three",
              isActive: false,
            },
            {
              id: 244,
              title: "With Map",
              path: "/list-layout-with-map",
              isActive: false,
            },
            {
              id: 245,
              title: "Full Width",
              path: "/list-layout-full",
              isActive: false,
            },
          ],
        },
        {
          id: 25,
          title: "Grid Layout",
          path: "/grid-layout",
          hasSubmenu: true,
          submenu: [
            {
              id: 251,
              title: "With Sidebar",
              path: "/grid-layout-with-sidebar",
              isActive: false,
            },
            {
              id: 252,
              title: "Classical With Sidebar",
              path: "/classical-layout-with-sidebar",
              isActive: false,
            },
            {
              id: 253,
              title: "With Map",
              path: "/grid-layout-with-map",
              isActive: false,
            },
            { id: 254, title: "Full Width", path: "/grid", isActive: false },
            {
              id: 255,
              title: "Classical Full Width",
              path: "/classical-property",
              isActive: false,
            },
          ],
        },
        {
          id: 26,
          title: "With Map Property",
          path: "/map-property",
          hasSubmenu: true,
          submenu: [
            {
              id: 261,
              title: "List With Map",
              path: "/list-layout-with-map",
              isActive: false,
            },
            {
              id: 262,
              title: "Grid With Map",
              path: "/grid-layout-with-map",
              isActive: false,
            },
            {
              id: 263,
              title: "Classical With Map",
              path: "/classical-layout-with-map",
              isActive: false,
            },
            {
              id: 264,
              title: "Place Search",
              path: "/place-search",
              isActive: false,
            },
            {
              id: 265,
              title: "Half Map Search",
              path: "/half-map",
              isActive: false,
            },
            {
              id: 266,
              title: "Half Map Search 02",
              path: "/half-map-2",
              isActive: false,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Features",
      slug: "features",
      path: "/features",
      hasDropdown: true,
      icon: "star",
      isActive: false,
      submenu: [
        {
          id: 31,
          title: "Single Property",
          path: "/single-property",
          hasSubmenu: true,
          submenu: [
            {
              id: 311,
              title: "Single Property 1",
              path: "/single-property-1",
              isActive: false,
            },
            {
              id: 312,
              title: "Single Property 2",
              path: "/single-property-2",
              isActive: false,
            },
            {
              id: 313,
              title: "Single Property 3",
              path: "/single-property-3",
              isActive: false,
            },
            {
              id: 314,
              title: "Single Property 4",
              path: "/single-property-4",
              isActive: false,
            },
          ],
        },
        {
          id: 32,
          title: "Agents",
          path: "/agents",
          hasSubmenu: true,
          submenu: [
            { id: 321, title: "Agents List", path: "/agents", isActive: false },
            {
              id: 322,
              title: "Agent Page",
              path: "/agent-page",
              isActive: false,
            },
            {
              id: 323,
              title: "Add Agent",
              path: "/add-agent",
              isActive: false,
            },
            {
              id: 324,
              title: "Edit Agent",
              path: "/edit-agent",
              isActive: false,
            },
          ],
        },
        {
          id: 33,
          title: "Agencies",
          path: "/agencies",
          hasSubmenu: true,
          submenu: [
            {
              id: 331,
              title: "Agencies List",
              path: "/agencies",
              isActive: false,
            },
            {
              id: 332,
              title: "Agency Page",
              path: "/agency-page",
              isActive: false,
            },
          ],
        },
        {
          id: 34,
          title: "My Account",
          path: "/account",
          hasSubmenu: true,
          submenu: [
            {
              id: 341,
              title: "User Dashboard",
              path: "/dashboard",
              isActive: false,
            },
            {
              id: 342,
              title: "Create Account",
              path: "/create-account",
              isActive: false,
            },
            {
              id: 343,
              title: "Payment Confirmation",
              path: "/payment",
              isActive: false,
            },
            { id: 344, title: "Checkout", path: "/checkout", isActive: false },
            {
              id: 345,
              title: "My Profile",
              path: "/my-profile",
              isActive: false,
            },
            {
              id: 346,
              title: "Property List",
              path: "/my-property",
              isActive: false,
            },
            {
              id: 347,
              title: "Bookmarked Listings",
              path: "/bookmark-list",
              isActive: false,
            },
            {
              id: 348,
              title: "Change Password",
              path: "/change-password",
              isActive: false,
            },
          ],
        },
        {
          id: 35,
          title: "Compare Property",
          path: "/compare-property",
          isActive: false,
        },
        {
          id: 36,
          title: "Submit Property",
          path: "/submit-property",
          isActive: false,
        },
      ],
    },
    {
      id: 4,
      title: "Pages",
      slug: "pages",
      path: "/pages",
      hasDropdown: true,
      icon: "file-text",
      isActive: false,
      submenu: [
        { id: 41, title: "About Us", path: "/about-us", isActive: false },
        { id: 42, title: "Blogs Page", path: "/blog", isActive: false },
        { id: 43, title: "Blog Detail", path: "/blog-detail", isActive: false },
        { id: 44, title: "Shortcodes", path: "/component", isActive: false },
        { id: 45, title: "Pricing", path: "/pricing", isActive: false },
        { id: 46, title: "FAQ", path: "/faq", isActive: false },
        { id: 47, title: "Error Page", path: "/404", isActive: false },
        { id: 48, title: "Contacts", path: "/contact", isActive: false },
      ],
    },
    {
      id: 5,
      title: "Services",
      slug: "services",
      path: "/services",
      hasDropdown: true,
      icon: "settings",
      isActive: false,
      submenu: [
        {
          id: 51,
          title: "Property Management",
          path: "/property-management",
          isActive: false,
        },
        {
          id: 52,
          title: "Real Estate Consulting",
          path: "/consulting",
          isActive: false,
        },
        {
          id: 53,
          title: "Investment Advisory",
          path: "/investment",
          isActive: false,
        },
        { id: 54, title: "Legal Services", path: "/legal", isActive: false },
        {
          id: 55,
          title: "Market Analysis",
          path: "/market-analysis",
          isActive: false,
        },
      ],
    },
    {
      id: 6,
      title: "Contact",
      slug: "contact",
      path: "/contact",
      hasDropdown: false,
      icon: "mail",
      isActive: false,
    },
  ],

  // Property data for sidebar
  properties: [
    {
      id: 1,
      title: "Modern Family Villa",
      location: "Beverly Hills, CA",
      image: "/assets/img/property-1.jpg",
      price: "$850,000",
      tag: "For Sale",
      type: "sale",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,500 sq ft",
    },
    {
      id: 2,
      title: "Downtown Apartment",
      location: "Manhattan, NY",
      image: "/assets/img/property-2.jpg",
      price: "$3,200/month",
      tag: "For Rent",
      type: "rent",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
    },
    {
      id: 3,
      title: "Luxury Penthouse",
      location: "Miami Beach, FL",
      image: "/assets/img/property-3.jpg",
      price: "$1,250,000",
      tag: "For Buy",
      type: "buy",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,800 sq ft",
    },
    {
      id: 4,
      title: "Suburban House",
      location: "Austin, TX",
      image: "/assets/img/property-4.jpg",
      price: "$450,000",
      tag: "For Sale",
      type: "sale",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sq ft",
    },
    {
      id: 5,
      title: "Studio Apartment",
      location: "San Francisco, CA",
      image: "/assets/img/property-5.jpg",
      price: "$2,800/month",
      tag: "For Rent",
      type: "rent",
      bedrooms: 1,
      bathrooms: 1,
      area: "650 sq ft",
    },
    {
      id: 6,
      title: "Beach House",
      location: "Malibu, CA",
      image: "/assets/img/property-6.jpg",
      price: "$2,100,000",
      tag: "For Buy",
      type: "buy",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,500 sq ft",
    },
    {
      id: 7,
      title: "City Loft",
      location: "Chicago, IL",
      image: "/assets/img/property-7.jpg",
      price: "$680,000",
      tag: "For Sale",
      type: "sale",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,400 sq ft",
    },
    {
      id: 8,
      title: "Garden Apartment",
      location: "Portland, OR",
      image: "/assets/img/property-8.jpg",
      price: "$1,900/month",
      tag: "For Rent",
      type: "rent",
      bedrooms: 2,
      bathrooms: 1,
      area: "1,100 sq ft",
    },
  ],

  // Social menu data
  socialMenu: [
    {
      id: 1,
      title: "SignUp or SignIn",
      path: "#",
      icon: "user",
      action: "login",
      className: "fw-medium text-muted-2",
    },
    {
      id: 2,
      title: "Post Property",
      path: "/submit-property",
      icon: "plus",
      action: "submit",
      className: "bg-primary add-listing",
    },
    {
      id: 3,
      title: "Menu",
      path: "#",
      icon: "menu",
      action: "property",
      className: "text-primary",
    },
  ],

  // Mobile menu data
  mobileMenu: [
    {
      id: 1,
      icon: "users",
      path: "#",
      action: "login",
      image: "/assets/img/svg/users.svg",
    },
    {
      id: 2,
      icon: "plus",
      path: "/submit-property",
      action: "submit",
      image: "/assets/img/svg/add.svg",
      className: "text-primary",
    },
    {
      id: 3,
      icon: "menu",
      path: "#",
      action: "property",
      image: "/assets/img/svg/bar.svg",
      className: "text-primary",
    },
  ],

  // Site configuration
  siteConfig: {
    logo: "/assets/img/logo.svg",
    siteName: "Resido",
    tagline: "Your Dream Property Awaits",
  },
};

// Example usage function to get active menu items
export const getActiveMenuPaths = (menuData) => {
  const activePaths = [];

  const extractPaths = (items) => {
    items.forEach((item) => {
      if (item.submenu) {
        extractPaths(item.submenu);
      } else if (item.isActive) {
        activePaths.push(item.path);
      }
    });
  };

  extractPaths(menuData.mainMenu);
  return activePaths;
};

// Function to find menu item by path
export const findMenuByPath = (menuData, path) => {
  const findInMenu = (items) => {
    for (const item of items) {
      if (item.path === path) {
        return item;
      }
      if (item.submenu) {
        const found = findInMenu(item.submenu);
        if (found) return found;
      }
    }
    return null;
  };

  return findInMenu(menuData.mainMenu);
};

// Function to update menu active state
export const updateActiveMenu = (menuData, activePath) => {
  const updateMenu = (items) => {
    return items.map((item) => {
      if (item.submenu) {
        return {
          ...item,
          submenu: updateMenu(item.submenu),
        };
      }
      return {
        ...item,
        isActive: item.path === activePath,
      };
    });
  };

  return {
    ...menuData,
    mainMenu: updateMenu(menuData.mainMenu),
  };
};

// Example of how to use with React component
export const MenuExample = () => {
  const [currentPath, setCurrentPath] = useState("/");
  const [dynamicMenuData, setDynamicMenuData] = useState(menuData);

  useEffect(() => {
    // Update active menu when path changes
    const updatedMenu = updateActiveMenu(menuData, currentPath);
    setDynamicMenuData(updatedMenu);
  }, [currentPath]);

  return dynamicMenuData;
};
