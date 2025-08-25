import Flur from "./assets/images/flur.png";
import Kitty from "./assets/images/kitty.png";
import Habitual from "./assets/images/habitual.png";
import Sadeeqy from "./assets/images/sadeeqy1.png";
import Sarnay from "./assets/images/sarnay.png";
import Unbound from "./assets/images/unbound.png";
import Eparts from "./assets/images/eparts.png"

export const data = {
  
  hero: {
    name: 'Fatina Elomar',
    title: 'Full-Stack & Shopify Developer',
    roles: ['Frontend Engineer','Shopify Expert','UI/UX Designer','Freelancer'],
    subtitle: 'My name is Fatina, and I am a full-stack web developer and graphic designer. I combine creative vision with technical expertise to craft modern, user-centered digital experiences. With a strong focus on UI/UX and an eye for detail, I deliver designs that are not only visually appealing but also highly functional.',
    cta: { label: 'Start a project', href: '#contact' },
  },
  services: [
    { title: 'UI/UX Design', description: 'Modern, intuitive interfaces in Figma with design systems and accessibility baked in.' },
    { title: 'Shopify & WordPress', description: 'Theme customization, storefronts, performance, and custom plugins.' },
    { title: 'Frontend Engineering', description: 'React apps with clean architecture, testing, and animations.' },
    { title: 'Performance & SEO', description: 'Core Web Vitals, image optimization, and technical SEO.' },
  ],
 
   experience: [
    { 
      role: 'Web Developer', 
      company: 'DEVANCY (Remote)', 
      period: '2024 | 2025',
      details: [
        'Developed customized Shopify themes and WordPress plugins',
        'Integrated APIs and payment gateways',
        'Optimized website loading performance'
      ]
    },
    { 
      role: 'Front-End & Shopify Developer', 
      company: 'TERQUOISE KSA | LEBANON', 
      period: '2024',
      details: [
        'Specialized in front-end development and Shopify theme customization',
        'Collaborated with teams to enhance UI/UX',
        'Integrated APIs and optimized performance across multiple platforms'
      ]
    },
    { 
      role: 'Frontend Developer', 
      company: 'BRANDIFY (Remote)', 
      period: '2022 | 2024',
      details: [
        'Pixel-perfect delivery with strong design principles',
        'Used Adobe Suite, Figma, and React for UI assets'
      ]
    },
    { 
      role: 'Graphic Designer', 
      company: 'ELUX MEDIA (LEBANON)', 
      period: 'Jun | Nov 2023',
      details: [
        'Created digital and print designs using Adobe Creative Suite',
        'Focused on design principles, typography, and color',
        'Collaborated in team environments and delivered high-quality work under tight deadlines'
      ]
    },
    { 
      role: 'Full Stack Web Developer', 
      company: 'CODI (TRIPOLI, MINA)', 
      period: '2022 | 2023',
      details: [
        'Back end (NodeJs Express, PHP, Laravel, SQL)',
        'Front end (JavaScript, React, Bootstrap)',
        'Server Management (LAMP Stack, Linux)',
        'Project Management (AGILE Methodology)',
        'Content Management System (WordPress)'
      ]
    },
    { 
      role: 'Administrative', 
      company: 'INTERNATIONAL CENTER FOR EDUCATION AND TRAINING', 
      period: '2020 | 2022',
      details: [
        'Organized files',
        'Send Documents Via Email',
        'Work with Scanner & Printer'
      ]
    },
  ],
 
  education: [
    {
      "degree": "Backend Developer ",
      "institution": "Bootcamp Hero to Zero",
      "period": "2024 | 2025",
      "details": [
        "Learned backend concepts: data structures, web fundamentals, and .NET Core 101",
        "Built REST APIs using Entity Framework Core, JWT authentication, and Postman testing",
        "Applied advanced practices: Dependency Injection, Middleware, Hosted Services, Logging (NLog), and Design Patterns"
      ]
    },
    {
      "degree": "Full Stack Web Developer",
      "institution": "Coding for the Whole Hero",
      "period": "2022 | 2023",
      "details": [
        "Built dynamic websites with Webflow and Firebase integration",
        "Developed booking and user account systems using Firebase Auth & Firestore",
        "Managed real-time data, file storage, and automated messaging",
        "Designed responsive, user-friendly interfaces"
      ]
    },
    {
      "degree": "Web Certificate",
      "institution": "freeCodeCamp",
      "period": "2022 | 2023",
      "details": [
        "Topics: HTML, CSS, Flexbox, Grid, Web Accessibility, and more",
        "Built hands-on projects to apply responsive design skills",
        "Gained practical ability to create adaptive web designs"
      ]
    },
     {
      "degree": "Graphic designer",
      "institution": "Mercy Corps",
      "period": "2021 | 2022",
      "details": [
        "Topics: HTML, CSS, Flexbox, Grid, Web Accessibility, and more",
        "Built hands-on projects to apply responsive design skills",
        "Gained practical ability to create adaptive web designs"
      ]
    },
    {
      "degree": "Business English Course",
      "institution": "International Rescue Committee",
      "period": "2021 | 2022",
      "details": [
        "Focused on job interviews, job performance, and workplace communication",
        "Practiced business meetings, marketing presentations, customer surveys, and phone calls"
      ]
    },
    {
      "degree": "Automation & Artificial Intelligence Course",
      "institution": "Halba Technical Institute",
      "period": "2020",
      "details": [
        "Studied fundamentals of AI and automation practices"
      ]
    },
    {
      "degree": "Bachelor’s Degree in Computer Science (LT)",
      "institution": "Halba Technical Institute",
      "period": "2019",
      "details": [
        "Completed undergraduate studies in computer science"
      ]
    }
  ]
,

  skills: ['JavaScript','TypeScript','React','Tailwind','Node.js','PHP','Laravel','Shopify','WordPress','WooCommerce','API','Git','Accessibility','Framer Motion'],
  references: [
    { 
      name: 'Nermine Monla', 
      company: 'CODI-TECH',
      phone: '03 /962 412',
      email: 'NERMINE@CODI.TECH'
    },
    { 
      name: 'Fadi Haddad', 
      company: 'CODI-TECH',
      phone: '71 /096 239',
      email: 'FADI@CODI.TECH'
    },
    { 
      name: 'Cendrella Moubayed', 
      company: 'MERCY CORP',
      phone: '70 /792 808'
    },
    { 
      name: 'Omar Charqiyi', 
      company: 'ELUX MEDIA',
      phone: '81 /634 263'
    },
    { 
      name: 'Hasan Awad', 
      company: 'DEVANCY',
      phone: '76/941 170'
    },
  ],
  contacts: { email: 'fatinaelomar3@gmail.com', phone: '+961 70 779 091', location: 'Lebanon | North' 

  },
 projects: [
  // Shopify
  {
    title: "Petopia",
    category: "Shopify",
    summary: "Pet store in KSA selling food, accessories, and supplies with a smooth Shopify experience.",
    github: "https://github.com/yourusername/kitty",
    link: "https://kitty-shopify-live-link.com",
    image: Kitty,
    tags: ["Shopify", "Liquid", "JavaScript", "E-commerce", "Pet Store", "KSA"],
    
  },
  {
    title: "Sadeeqy",
    category: "Shopify",
    summary: "Online pet shop in KSA offering food, toys, and essentials with custom Shopify features.",
    github: "https://github.com/yourusername/sadeeqy",
    link: "https://sadeeqy.com",
    image: Sadeeqy,
    tags: ["Shopify", "Liquid", "JavaScript", "E-commerce", "Pet Store", "KSA"],
  
  },
  {
    title: "Aleef",
    category: "Shopify",
    summary: "KSA-based pet store with food and accessories, optimized layout and mobile-friendly Shopify design.",
    github: "https://github.com/yourusername/aleef",
    link: "https://aleef.com",
    image: "/images/projects/shopify/aleef.jpg",
    tags: ["Shopify", "Liquid", "E-commerce", "Pet Store", "KSA"],
    theme: "Saja Shopify Theme"
  },
  {
    title: "Kitty",
    category: "Shopify",
    summary: "Jewellery store in the UK with elegant product showcase and secure checkout on Shopify.",
    github: "https://github.com/yourusername/kitty",
    link: "https://kitty-shopify-live-link.com",
    image: Kitty,
    tags: ["Shopify", "Liquid", "JavaScript", "E-commerce", "Jewellery", "UK"],
   
  },
  {
    title: "TryHabitual",
    category: "Shopify",
    summary: "UK store selling healthy food and supplements with a clean, modern Shopify design.",
    github: "https://github.com/yourusername/habitual",
    link: "https://tryhabitual.com",
    image: Habitual,
    tags: ["Shopify", "Liquid","E-commerce", "Health", "Supplements", "UK"],
   
  },
  {
    title: "BoushraHijabs",
    category: "Shopify",
    summary: "UAE fashion store for abayas and hijabs with elegant Shopify product presentation.",
    github: "https://github.com/yourusername/boushra-hijabs",
    link: "https://boushrahijabs.com",
    image: "/images/projects/shopify/boushra.jpg",
    tags: ["Shopify", "Liquid", "E-commerce", "Fashion", "UAE"],
   
  },
  {
    title: "Eparts",
    category: "Shopify",
    summary: "KSA Shopify store for car accessories with structured categories and fast checkout.",
    github: "https://github.com/yourusername/eparts",
    link: "https://eparts-shop.com",
    image: Eparts,
    tags: ["Shopify", "Liquid", "JavaScript", "E-commerce", "Automotive", "KSA"],
   
  },
  {
    title: "Unbound",
    category: "Shopify",
    summary: "UK women’s fitness brand selling dumbbell-themed merchandise on Shopify.",
    github: "https://github.com/yourusername/unbound",
    link: "https://unbound-shop.com",
    image: Unbound,
    tags: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS", "E-commerce", "Fitness", "UK"],
    theme: "Saja Shopify Theme"
  },

  // React
  {
    title: "Mehaan",
    category: "React",
    summary: "Corporate React site for an accounting company in Lebanon showcasing services and profile.",
    github: "https://github.com/yourusername/mehan",
    link: "https://mehan.com",
    image: "/images/projects/react/mehan.jpg",
    tags: ["React", "JavaScript", "HTML", "CSS", "Accounting", "Lebanon"]
  },
  {
    title: "Wizard",
    category: "React",
    summary: "Restaurant site with online ordering, reservations, and registration built in React.",
    github: "https://github.com/yourusername/wizard-restaurant",
    link: "https://wizard-restaurant.com",
    image: "/images/projects/react/wizard.jpg",
    tags: ["React", "JavaScript",  "Tailwind", "Restaurant", "Ordering System"]
  },
  {
    title: "Interior Portfolio",
    category: "React",
    summary: "React portfolio site for an interior designer with galleries and modern UI.",
    github: "https://github.com/yourusername/interior-design",
    link: "https://interiorportfolio.com",
    image: "/images/projects/react/interior.jpg",
    tags: ["React", "JavaScript", "Tailwind", "Portfolio", "Interior Design"]
  },
  {
    title: "CleanTime",
    category: "React",
    summary: "Lebanese cleaning company site built with React for booking and services.",
    github: "https://github.com/yourusername/cleantime",
    link: "https://cleantime.com",
    image: "/images/projects/react/cleantime.jpg",
    tags: ["React", "JavaScript", "Cleaning Services", "Lebanon"]
  },
  {
    title: "Fekra",
    category: "React",
    summary: "React site for an education center displaying courses and registration info.",
    github: "https://github.com/yourusername/fekra",
    link: "https://fekra.com",
    image: "/images/projects/react/fekra.jpg",
    tags: ["React", "JavaScript","Tailwind", "Education"]
  },
  {
    title: "Strawberry",
    category: "React",
    summary: "Creative coffee shop website with a cute UI/UX built using React.",
    github: "https://github.com/yourusername/starwbery",
    link: "https://starwbery.com",
    image: "/images/projects/react/starwbery.jpg",
    tags: ["React", "JavaScript", "Tailwind", "Coffee Shop",]
  },

  // C#
  {
    title: "Neurologist Click System",
    category: "C#",
    summary: "C# clinic management system for neurologists handling patients and appointments.",
    github: "https://github.com/yourusername/inventory-manager",
    image: "/images/projects/csharp/inventory.jpg",
    tags: ["C#", ".NET", "SQL Server", "Healthcare"]
  },
  {
    title: "Lawyers System",
    category: "C#",
    summary: "C# case and client management software for law firms with secure records.",
    github: "https://github.com/yourusername/library-system",
    image: "/images/projects/csharp/library.jpg",
    tags: ["C#", ".NET", "SQL Server", "Desktop App", "Legal"]
  },

  // WordPress
  {
    title: "Flur",
    category: "WordPress",
    summary: "WordPress WooCommerce flower store in Lebanon with product display and ordering.",
    github: "https://github.com/yourusername/flur",
    link: Flur,
    image: "/images/projects/wordpress/flur.jpg",
    tags: ["WordPress", "PHP", "WooCommerce","Flowers",],
    
  },
  {
    title: "Sarnay",
    category: "WordPress",
    summary: "Lebanese restaurant site built on WordPress with menu and booking details.",
    github: "https://github.com/yourusername/sarnay",
    link: "https://sarnay.com",
    image: Sarnay,
    tags: ["WordPress", "PHP", "JavaScript", "HTML", "CSS", "Restaurant", "Lebanon"],
   
  },
  {
    title: "Lirarestobar",
    category: "WordPress",
    summary: "WordPress site for a Lebanese restaurant with Instagram integration.",
    github: "https://github.com/yourusername/lira",
    link: "https://lira.com",
    image: "/images/projects/wordpress/lira.jpg",
    tags: ["WordPress", "PHP", "JavaScript", "HTML", "CSS", "Restaurant", "Lebanon", "Social Media"],
  
  },
  {
    title: "Education and Co",
    category: "WordPress",
    summary: "E-commerce site for educational games and toys built with WordPress.",
    github: "https://github.com/yourusername/education-co",
    link: "https://educationco.com",
    image: "/images/projects/wordpress/education.jpg",
    tags: ["WordPress", "PHP", "WooCommerce", "JavaScript", "HTML", "CSS", "Education", "Toys"],
  
  },
  {
    title: "Embroidery and Stitches",
    category: "WordPress",
    summary: "WordPress store for handmade embroidery and craft products.",
    github: "https://github.com/yourusername/stitches-beads",
    link: "https://stitchesbeads.com",
    image: "/images/projects/wordpress/stitches.jpg",
    tags: ["WordPress", "PHP", "WooCommerce", "JavaScript", "HTML", "CSS", "Handmade", "Crafts"],
  
  },
  {
    title: "Street Banner Plugin",
    category: "WordPress",
    summary: "Custom WordPress plugin to manage and display street banners.",
    github: "https://github.com/yourusername/banner-plugin",
    link: "https://wordpress.org/plugins/custom-banner-plugin",
    image: "/images/projects/plugin/banner.jpg",
    tags: ["WordPress", "PHP", "Plugin Development", "JavaScript"]
  },

  // UI/UX
  {
    title: "Mobility Site Design",
    category: "UI/UX",
    summary: "UI/UX design for a mobility-focused website with accessible layouts.",
    link: "https://figma.com/travelly-app",
    image: "/images/projects/uiux/travelly.jpg",
    tags: ["UI/UX", "Figma", "Web Design"]
  },
  {
    title: "Furniture Website Design",
    category: "UI/UX",
    summary: "UI/UX for a furniture e-commerce store with clean product presentation.",
    link: "https://figma.com/healthify-dashboard",
    image: "/images/projects/uiux/healthify.jpg",
    tags: ["UI/UX", "Figma", "E-commerce", "Furniture"]
  },
  {
    title: "Shipping App Design",
    category: "UI/UX",
    summary: "UI/UX for a logistics app focused on usability and tracking flow.",
    link: "https://figma.com/edulearn",
    image: "/images/projects/uiux/edulearn.jpg",
    tags: ["UI/UX", "Figma", "App Design", "Shipping"]
  },
  {
    title: "Login Design",
    category: "UI/UX",
    summary: "UI/UX design for a secure and simple login/authentication flow.",
    link: "https://figma.com/foodiez-app",
    image: "/images/projects/uiux/foodiez.jpg",
    tags: ["UI/UX", "Figma", "Login Flow", "Authentication"]
  },
  {
    title: "Pet App Design",
    category: "UI/UX",
    summary: "UI/UX for a mobile app providing pet care, shopping, and booking.",
    link: "https://figma.com/finance-pro",
    image: "/images/projects/uiux/finance.jpg",
    tags: ["UI/UX", "Figma", "Mobile App", "Pet Store"]
  },
  {
    title: "Restaurant Site Design",
    category: "UI/UX",
    summary: "UI/UX design for restaurant websites with menus and booking features.",
    link: "https://figma.com/portfolio-redesign",
    image: "/images/projects/uiux/portfolio.jpg",
    tags: ["UI/UX", "Figma", "Restaurant Website"]
  }
]


}
