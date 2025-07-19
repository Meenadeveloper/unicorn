import logo from "../assets/img/logo.jpg";
import users from "../assets/img/svg/users.svg";
import addImg from "../assets/img/svg/add.svg";
import bar from "../assets/img/svg/bar.svg";
import loginImg from "../assets/img/svg/login.svg";

import p1 from "../assets/img/p-1.jpg";
import p2 from "../assets/img/p-2.jpg";
import p3 from "../assets/img/p-3.jpg";
import p4 from "../assets/img/p-4.jpg";
import p5 from "../assets/img/p-5.jpg";
import p6 from "../assets/img/p-6.jpg";
import p7 from "../assets/img/p-7.jpg";
import p8 from "../assets/img/p-8.jpg";
import p9 from "../assets/img/p-9.jpg";

// navbarData.js - Dynamic menu configuration
export const navbarData = {
  siteConfig: {
    logo: logo,
    siteName: "Unicorn",
    logoAlt: "Unicorn Logo",
  },

  mainMenu: [
    {
      id: 1,
      title: "Home",
      slug: "home",
      path: "/",
      hasDropdown: false,
      icon: "home",
      // activePaths: ["/", "/about", "/contact"],
      // submenu: [
      //   { id: 11, title: "Home ", path: "/" },
      //   { id: 12, title: "About Us", path: "/about" },
      //   { id: 13, title: "Contact Us", path: "/contact" },
      // ],
    },
    {
      id: 2,
      title: "Buy",
      slug: "buy",
      path: "/property-list",
      hasDropdown: false,
      icon: "list",
      // activePaths: ["/propert-list"],
      // submenu: [
      //   {
      //     id: 24,
      //     title: "Property",
      //     slug: "property",
      //     path: "/propert-list",
      //   },
      // ],
    },
    {
      id: 3,
      title: "Rent",
      slug: "rent",
      path: "/property-list",
      hasDropdown: false,
      icon: "star",
      // activePaths: ["/propert-list"],
      // submenu: [
      //   {
      //     id: 31,
      //     title: " Property",
      //     slug: "property",
      //     path: "/propert-list",
      //   },
      // ],
    },
    {
      id: 4,
      title: "Feature Property",
      slug: "pages",
      path: "/property-list",
    },
    {
      id: 5,
      title: "Blog",
      slug: "blog",
      // path: "/blogs",
      path: "#",
    },
  ],

  // mainMenu: [
  //   {
  //     id: 1,
  //     title: "Home",
  //     slug: "home",
  //     path: "#",
  //     hasDropdown: true,
  //     icon: "home",
  //     activePaths: [
  //       "/", "/home-2", "/home-3", "/home-4", "/home-5",
  //       "/home-6", "/home-7", "/home-8", "/home-9",
  //       "/home-10", "/home-11", "/video", "/map"
  //     ],
  //     submenu: [
  //       { id: 11, title: "Home Layout 1", path: "/" },
  //       { id: 12, title: "Home Layout 2", path: "/home-2" },
  //       { id: 13, title: "Home Layout 3", path: "/home-3" },
  //       { id: 14, title: "Home Layout 4", path: "/home-4" },
  //       { id: 15, title: "Home Layout 5", path: "/home-5" },
  //       { id: 16, title: "Home Layout 6", path: "/home-6" },
  //       { id: 17, title: "Home Layout 7", path: "/home-7" },
  //       { id: 18, title: "Home Layout 8", path: "/home-8" },
  //       { id: 19, title: "Home Layout 9", path: "/home-9" },
  //       { id: 20, title: "Home Layout 10", path: "/home-10" },
  //       { id: 21, title: "Home Layout 11", path: "/home-11" },
  //       { id: 22, title: "Video Home", path: "/video" },
  //       { id: 23, title: "Map Home Layout", path: "/map" }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: "Listings",
  //     slug: "listing",
  //     path: "#",
  //     hasDropdown: true,
  //     icon: "list",
  //     activePaths: [
  //       "/list-layout-one", "/list-layout-two", "/list-layout-three",
  //       "/list-layout-with-map", "/list-layout-full", "/grid-layout-with-sidebar",
  //       "/classical-layout-with-sidebar", "/grid-layout-with-map", "/grid",
  //       "/classical-property", "/classical-layout-with-map", "/half-map",
  //       "/half-map-2", "/place-search"
  //     ],
  //     submenu: [
  //       {
  //         id: 24,
  //         title: "List Layout",
  //         slug: "list-layout",
  //         path: "#",
  //         hasSubmenu: true,
  //         activePaths: [
  //           "/list-layout-one", "/list-layout-two", "/list-layout-three",
  //           "/list-layout-with-map", "/list-layout-full"
  //         ],
  //         submenu: [
  //           { id: 241, title: "List Layout Simple", path: "/list-layout-one" },
  //           { id: 242, title: "List Layout Modern", path: "/list-layout-two" },
  //           { id: 243, title: "List Layout Advance", path: "/list-layout-three" },
  //           { id: 244, title: "With Map", path: "/list-layout-with-map" },
  //           { id: 245, title: "Full Width", path: "/list-layout-full" }
  //         ]
  //       },
  //       {
  //         id: 25,
  //         title: "Grid Layout",
  //         slug: "grid-layout",
  //         path: "#",
  //         hasSubmenu: true,
  //         activePaths: [
  //           "/grid-layout-with-sidebar", "/classical-layout-with-sidebar",
  //           "/grid-layout-with-map", "/grid", "/classical-property"
  //         ],
  //         submenu: [
  //           { id: 251, title: "With Sidebar", path: "/grid-layout-with-sidebar" },
  //           { id: 252, title: "Classical With Sidebar", path: "/classical-layout-with-sidebar" },
  //           { id: 253, title: "With Map", path: "/grid-layout-with-map" },
  //           { id: 254, title: "Full Width", path: "/grid" },
  //           { id: 255, title: "Classical Full Width", path: "/classical-property" }
  //         ]
  //       },
  //       {
  //         id: 26,
  //         title: "With Map Property",
  //         slug: "map-layout",
  //         path: "#",
  //         hasSubmenu: true,
  //         activePaths: [
  //           "/list-layout-with-map", "/grid-layout-with-map",
  //           "/classical-layout-with-map", "/place-search", "/half-map", "/half-map-2"
  //         ],
  //         submenu: [
  //           { id: 261, title: "List With Map", path: "/list-layout-with-map" },
  //           { id: 262, title: "Grid With Map", path: "/grid-layout-with-map" },
  //           { id: 263, title: "Classical With Map", path: "/classical-layout-with-map" },
  //           { id: 264, title: "Place Search", path: "/place-search" },
  //           { id: 265, title: "Half Map Search", path: "/half-map" },
  //           { id: 266, title: "Half Map Search 02", path: "/half-map-2" }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     title: "Features",
  //     slug: "feature",
  //     path: "#",
  //     hasDropdown: true,
  //     icon: "star",
  //     activePaths: [
  //       "/single-property-1", "/single-property-2", "/single-property-3", "/single-property-4",
  //       "/agents", "/agent-page", "/add-agent", "/edit-agent", "/agencies", "/agency-page",
  //       "/dashboard", "/create-account", "/my-profile", "/payment", "/checkout",
  //       "/my-property", "/bookmark-list", "/change-password", "/compare-property", "/submit-property"
  //     ],
  //     submenu: [
  //       {
  //         id: 31,
  //         title: "Single Property",
  //         slug: "single-property",
  //         path: "#",
  //         hasSubmenu: true,
  //         activePaths: ["/single-property-1", "/single-property-2", "/single-property-3", "/single-property-4"],
  //         submenu: [
  //           { id: 311, title: "Single Property 1", path: "/single-property-1" },
  //           { id: 312, title: "Single Property 2", path: "/single-property-2" },
  //           { id: 313, title: "Single Property 3", path: "/single-property-3" },
  //           { id: 314, title: "Single Property 4", path: "/single-property-4" }
  //         ]
  //       },
  //       {
  //         id: 32,
  //         title: "Agents",
  //         slug: "agent-list",
  //         path: "#",
  //         hasSubmenu: true,
  //         activePaths: ["/agents", "/agent-page", "/add-agent", "/edit-agent"],
  //         submenu: [
  //           { id: 321, title: "Agents List", path: "/agents" },
  //           { id: 322, title: "Agent Page", path: "/agent-page" },
  //           { id: 323, title: "Add Agent", path: "/add-agent" },
  //           { id: 324, title: "Edit Agent", path: "/edit-agent" }
  //         ]
  //       },
  //       {
  //         id: 33,
  //         title: "Agencies",
  //         slug: "agency-list",
  //         path: "#",
  //         hasSubmenu: true,
  //         activePaths: ["/agencies", "/agency-page"],
  //         submenu: [
  //           { id: 331, title: "Agencies List", path: "/agencies" },
  //           { id: 332, title: "Agency Page", path: "/agency-page" }
  //         ]
  //       },
  //       {
  //         id: 34,
  //         title: "My Account",
  //         slug: "account",
  //         path: "#",
  //         hasSubmenu: true,
  //         activePaths: [
  //           "/dashboard", "/create-account", "/payment", "/checkout",
  //           "/my-profile", "/my-property", "/bookmark-list", "/change-password"
  //         ],
  //         submenu: [
  //           { id: 341, title: "User Dashboard", path: "/dashboard" },
  //           { id: 342, title: "Create Account", path: "/create-account" },
  //           { id: 343, title: "Payment Confirmation", path: "/payment" },
  //           { id: 344, title: "Checkout", path: "/checkout" },
  //           { id: 345, title: "My Profile", path: "/my-profile" },
  //           { id: 346, title: "Property List", path: "/my-property" },
  //           { id: 347, title: "Bookmarked Listings", path: "/bookmark-list" },
  //           { id: 348, title: "Change Password", path: "/change-password" }
  //         ]
  //       },
  //       { id: 35, title: "Compare Property", path: "/compare-property" },
  //       { id: 36, title: "Submit Property", path: "/submit-property" }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     title: "Pages",
  //     slug: "pages",
  //     path: "#",
  //     hasDropdown: true,
  //     icon: "file-text",
  //     activePaths: ["/about-us", "/blog", "/blog-detail", "/component", "/pricing", "/faq", "/404", "/contact"],
  //     submenu: [
  //       { id: 41, title: "About Us", path: "/about-us" },
  //       { id: 42, title: "Blogs Page", path: "/blog" },
  //       { id: 43, title: "Blog Detail", path: "/blog-detail" },
  //       { id: 44, title: "Shortcodes", path: "/component" },
  //       { id: 45, title: "Pricing", path: "/pricing" },
  //       { id: 46, title: "FAQ", path: "/faq" },
  //       { id: 47, title: "Error Page", path: "/404" },
  //       { id: 48, title: "Contacts", path: "/contact" }
  //     ]
  //   }
  // ],

  socialMenu: [
    {
      id: 1,
      title: "Login",
      action: "login",
      className: "bg-primary-light",
      wrapperClass: "add-listing",
      icon: {
        type: "svg",
        content: `<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor"/>
          <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor"/>
          <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor"/>
        </svg>`,
      },
    },
    // {
    //   id: 2,
    //   title: "Post Property",
    //   path: "/submit-property",
    //   action: "submit",
    //   className: "bg-primary",
    //   wrapperClass: "add-listing",
    //   icon: {
    //     type: "image",
    //     src: loginImg,
    //     className: "me-1",
    //   },
    // },
    {
      id: 3,
      title: "",
      action: "property",
      className: "text-primary",
      icon: {
        type: "svg",
        content: `<svg width="24" height="24" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="6" width="16" height="3" rx="1.5" fill="currentColor"/>
          <rect opacity="0.3" y="12" width="8" height="3" rx="1.5" fill="currentColor"/>
          <rect opacity="0.3" width="12" height="3" rx="1.5" fill="currentColor"/>
        </svg>`,
      },
    },
  ],

  mobileMenu: [
    {
      id: 1,
      action: "login",
      icon: {
        type: "image",
        src: users,
        alt: "users",
      },
    },
    // {
    //   id: 2,
    //   path: "/submit-property",
    //   className: "text-primary",
    //   icon: {
    //     type: "image",
    //     src: bar,
    //     alt: "add",
    //   },
    // },
    {
      id: 3,
      action: "property",
      className: "text-primary",
      icon: {
        type: "image",
        src: addImg,
        alt: "menu",
      },
    },
  ],

  properties: [
    {
      image: p1,
      title: "Loss vengel New Apartment",
      location: "Sans Fransico",
      tag: "For Sale",
      price: "$4,240",
    },
    {
      image: p2,
      title: "Montreal Quriqe Apartment",
      location: "Liverpool, London",
      tag: "For Rent",
      price: "$7,380",
    },
    {
      image: p3,
      title: "Curmic Studio For Office",
      location: "Montreal, Canada",
      tag: "For Buy",
      price: "$8,730",
    },
    {
      image: p4,
      title: "Montreal Quebec City",
      location: "Sreek View, New York",
      tag: "For Rent",
      price: "$6,240",
    },
    {
      image: p5,
      title: "Loss vengel New Apartment",
      location: "Sans Fransico",
      tag: "For Sale",
      price: "$4,240",
    },
    {
      image: p6,
      title: "Montreal Quriqe Apartment",
      location: "Liverpool, London",
      tag: "For Rent",
      price: "$7,380",
    },
    {
      image: p7,
      title: "Curmic Studio For Office",
      location: "Montreal, Canada",
      tag: "For Buy",
      price: "$8,730",
    },
    {
      image: p8,
      title: "Montreal Quebec City",
      location: "Sreek View, New York",
      tag: "For Rent",
      price: "$6,240",
    },
  ],
};

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
    siteName: "Unicorn",
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
