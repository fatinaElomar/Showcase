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
      title: "Kitty",
      category: "Shopify",
      summary: "Modern Shopify pet store theme.",
      github: "https://github.com/yourusername/kitty",
      link: "https://kitty-shopify-live-link.com",
      image: Kitty,
      tags: ["E-commerce", "Pets", "Shopify Theme"],
      theme: "Saja Shopify Theme"
    },
    {
      title: "Try Habitual",
      category: "Shopify",
      summary: "Wellness and lifestyle store on Shopify.",
      github: "https://github.com/yourusername/habitual",
      link: "https://tryhabitual.com",
      image: Habitual,
      tags: ["Lifestyle", "Wellness", "E-commerce"],
      theme: "Saja Shopify Theme"
    },
   
    {
      title: "Dame",
      category: "Shopify",
      summary: "Fashion and accessories Shopify brand.",
      github: "https://github.com/yourusername/dame",
      link: "https://dame-shop.com",
      image: "/images/projects/shopify/dame.jpg",
      tags: ["Fashion", "Accessories"],
      theme: "Saja Shopify Theme"
    },
     {
      title: "Eparts (Car Parts Store)",
      category: "Shopify",
      summary: "Auto parts Shopify store with custom design.",
      github: "https://github.com/yourusername/eparts",
      link: "https://eparts-shop.com",
      image: Eparts,
      tags: ["E-commerce", "Cars", "Parts"],
      theme: "Saja Shopify Theme"
    },
    {
      title: "Boushra Hijabs",
      category: "Shopify",
      summary: "Elegant hijabs and modest wear shop.",
      github: "https://github.com/yourusername/boushra-hijabs",
      link: "https://boushrahijabs.com",
      image: "/images/projects/shopify/boushra.jpg",
      tags: ["UAE", "Fashion", "E-commerce"],
      theme: "Saja Shopify Theme"
    },
    {
      title: "Unbound",
      category: "Shopify",
      summary: "Minimalist Shopify brand for essentials.",
      github: "https://github.com/yourusername/unbound",
      link: "https://unbound-shop.com",
      image: Unbound,
      tags: ["UK", "Essentials", "Shopify"],
      theme: "Saja Shopify Theme"
    },
    {
      title: "Sadeeqy",
      category: "Shopify",
      summary: "Social community-based Shopify experience.",
      github: "https://github.com/yourusername/sadeeqy",
      link: "https://sadeeqy.com",
      image: Sadeeqy,
      tags: ["Community", "Social", "Shopify"],
      theme: "Saja Shopify Theme"
    },
    {
      title: "Aleef",
      category: "Shopify",
      summary: "Pet food & care Shopify platform.",
      github: "https://github.com/yourusername/aleef",
      link: "https://aleef.com",
      image: "/images/projects/shopify/aleef.jpg",
      tags: ["Pets", "Food", "E-commerce"],
      theme: "Saja Shopify Theme"
    },
    {
      title: "Catu",
      category: "Shopify",
      summary: "Trendy Shopify fashion marketplace.",
      github: "https://github.com/yourusername/catu",
      link: "https://catu.com",
      image: "/images/projects/shopify/catu.jpg",
      tags: ["Fashion", "Marketplace"],
      theme: "Saja Shopify Theme"
    },

    // WordPress
    {
      title: "Sarnay",
      category: "WordPress",
      summary: "WordPress blog and portfolio.",
      github: "https://github.com/yourusername/sarnay",
      link: "https://sarnay.com",
      image: Sarnay,
      tags: ["Blog", "Portfolio", "WordPress Theme"],
      plugin: "Street Banner Plugin"
    },
    {
      title: "Flur",
      category: "WordPress",
      summary: "Creative WordPress agency website.",
      github: "https://github.com/yourusername/flur",
      link: Flur,
      image: "/images/projects/wordpress/flur.jpg",
      tags: ["Agency", "Creative"],
      plugin: "Street Banner Plugin"
    },
    {
      title: "Education & Co",
      category: "WordPress",
      summary: "Educational WordPress platform.",
      github: "https://github.com/yourusername/education-co",
      link: "https://educationco.com",
      image: "/images/projects/wordpress/education.jpg",
      tags: ["Education", "Learning"],
      plugin: "Street Banner Plugin"
    },
    {
      title: "Lira Resto Bar",
      category: "WordPress",
      summary: "Restaurant and bar WordPress site.",
      github: "https://github.com/yourusername/lira",
      link: "https://lira.com",
      image: "/images/projects/wordpress/lira.jpg",
      tags: ["Food", "Restaurant", "Bar"],
      plugin: "Street Banner Plugin"
    },
    {
      title: "Stitches Beads",
      category: "WordPress",
      summary: "Handmade crafts and jewelry site.",
      github: "https://github.com/yourusername/stitches-beads",
      link: "https://stitchesbeads.com",
      image: "/images/projects/wordpress/stitches.jpg",
      tags: ["Handmade", "Jewelry", "Crafts"],
      plugin: "Street Banner Plugin"
    },

    // React
    {
      title: "Fekra (Education Center)",
      category: "React",
      summary: "React web app for education center.",
      github: "https://github.com/yourusername/fekra",
      link: "https://fekra.com",
      image: "/images/projects/react/fekra.jpg",
      tags: ["Education", "Web App", "React"]
    },
    {
      title: "Wizard Restaurant",
      category: "React",
      summary: "Modern restaurant web app.",
      github: "https://github.com/yourusername/wizard-restaurant",
      link: "https://wizard-restaurant.com",
      image: "/images/projects/react/wizard.jpg",
      tags: ["Restaurant", "Food", "React"]
    },
    {
      title: "Starwbery",
      category: "React",
      summary: "React e-commerce project for desserts.",
      github: "https://github.com/yourusername/starwbery",
      link: "https://starwbery.com",
      image: "/images/projects/react/starwbery.jpg",
      tags: ["E-commerce", "Desserts", "React"]
    },
    {
      title: "Pet Store",
      category: "React",
      summary: "Cute React pet store website.",
      github: "https://github.com/yourusername/petstore",
      link: "https://petstore.com",
      image: "/images/projects/react/petstore.jpg",
      tags: ["Pets", "E-commerce", "React"]
    },
    {
      title: "Mehan",
      category: "React",
      summary: "React project for services platform.",
      github: "https://github.com/yourusername/mehan",
      link: "https://mehan.com",
      image: "/images/projects/react/mehan.jpg",
      tags: ["Services", "Business", "React"]
    },
    {
      title: "Interior Design Portfolio",
      category: "React",
      summary: "React portfolio for interior design.",
      github: "https://github.com/yourusername/interior-design",
      link: "https://interiorportfolio.com",
      image: "/images/projects/react/interior.jpg",
      tags: ["Portfolio", "Interior Design", "React"]
    },
    {
      title: "CleanTime",
      category: "React",
      summary: "React app for cleaning services.",
      github: "https://github.com/yourusername/cleantime",
      link: "https://cleantime.com",
      image: "/images/projects/react/cleantime.jpg",
      tags: ["Cleaning", "Services", "React"]
    },

    // UI/UX
    {
      title: "Travelly App UI",
      category: "UI/UX",
      summary: "Mobile travel booking app prototype designed in Figma.",
      link: "https://figma.com/travelly-app",
      image: "/images/projects/uiux/travelly.jpg",
      tags: ["UI", "UX", "Figma", "Mobile"]
    },
    {
      title: "Healthify Dashboard",
      category: "UI/UX",
      summary: "Healthcare admin dashboard with accessibility-first design.",
      link: "https://figma.com/healthify-dashboard",
      image: "/images/projects/uiux/healthify.jpg",
      tags: ["UI", "Dashboard", "Healthcare"]
    },
    {
      title: "EduLearn Platform",
      category: "UI/UX",
      summary: "Learning management system UI kit in Figma.",
      link: "https://figma.com/edulearn",
      image: "/images/projects/uiux/edulearn.jpg",
      tags: ["Education", "UI Kit", "Figma"]
    },
    {
      title: "Foodiez App",
      category: "UI/UX",
      summary: "Food delivery app with clean UX flows.",
      link: "https://figma.com/foodiez-app",
      image: "/images/projects/uiux/foodiez.jpg",
      tags: ["Food", "Delivery", "Mobile UI"]
    },
    {
      title: "Finance Pro",
      category: "UI/UX",
      summary: "Banking and finance dashboard UI system.",
      link: "https://figma.com/finance-pro",
      image: "/images/projects/uiux/finance.jpg",
      tags: ["Finance", "UI", "Dashboard"]
    },
    {
      title: "Portfolio Redesign",
      category: "UI/UX",
      summary: "Personal portfolio website concept focusing on storytelling.",
      link: "https://figma.com/portfolio-redesign",
      image: "/images/projects/uiux/portfolio.jpg",
      tags: ["Portfolio", "Website", "UX"]
    },
    {
      title: "Wellness App",
      category: "UI/UX",
      summary: "Meditation and fitness app prototype.",
      link: "https://figma.com/wellness-app",
      image: "/images/projects/uiux/wellness.jpg",
      tags: ["Wellness", "Mobile", "Figma"]
    },

    // C#
    {
      title: "Inventory Manager",
      category: "C#",
      summary: "Desktop application for inventory management using C# and .NET.",
      github: "https://github.com/yourusername/inventory-manager",
      image: "/images/projects/csharp/inventory.jpg",
      tags: [".NET", "C#", "Desktop App"]
    },
    {
      title: "Library System",
      category: "C#",
      summary: "C# Windows Forms project for book rentals and student records.",
      github: "https://github.com/yourusername/library-system",
      image: "/images/projects/csharp/library.jpg",
      tags: [".NET", "C#", "Windows Forms"]
    },

    // Plugin
    {
      title: "Custom Banner Plugin",
      category: "Plugin",
      summary: "WordPress plugin for customizable banners with scheduling options.",
      github: "https://github.com/yourusername/banner-plugin",
      link: "https://wordpress.org/plugins/custom-banner-plugin",
      image: "/images/projects/plugin/banner.jpg",
      tags: ["WordPress", "Plugin", "Banner"]
    },
  ]

}
