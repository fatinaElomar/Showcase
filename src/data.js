

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
    title: 'Full‑Stack & Shopify Developer',
    roles: ['Frontend Engineer','Shopify Expert','UI/UX Designer','Freelancer'],
    subtitle: 'I build elegant, fast, and maintainable web experiences for brands and startups.',
    cta: { label: 'Start a project', href: '#contact' },
  },
  services: [
    { title: 'UI/UX Design', description: 'Modern, intuitive interfaces in Figma with design systems and accessibility baked in.' },
    { title: 'Shopify & WordPress', description: 'Theme customization, storefronts, performance, and custom plugins.' },
    { title: 'Frontend Engineering', description: 'React apps with clean architecture, testing, and animations.' },
    { title: 'Performance & SEO', description: 'Core Web Vitals, image optimization, and technical SEO.' },
  ],
 
  experience: [
    { role: 'Front‑End & Shopify Developer', company: 'Terquoise KSA — Lebanon', period: '2024 — 2025' },
    { role: 'Freelance Developer', company: 'Devancy', period: '2024 — Present' },
    { role: 'Frontend Developer', company: 'Brandify (Kuwait)', period: '2023 — 2024' },
    { role: 'Graphic Designer', company: 'ELUX MEDIA (Lebanon)', period: 'Jun — Nov 2023' },
    { role: 'Full Stack Web Developer', company: 'CODI (Tripoli, Mina)', period: '2022 — 2023' },
    { role: 'Graphic Design', company: 'Mercy Corps', period: '2020 — 2022' },
    { role: 'Administrative', company: 'International Center For Education And Training', period: '2020 — 2022' },
  ],
  education: [
    { degree: 'Full‑Stack Web Developer', institution: 'CODI — Coding for the Whole Hero', period: '2022 — 2023' },
    { degree: 'Web Certificate', institution: 'freeCodeCamp', period: '2022 — 2023' },
    { degree: 'Business English Course', institution: 'International Rescue Committee', period: '2019' },
    { degree: 'Automation & AI Course', institution: 'Halba Technical Institute', period: '2019' },
    { degree: 'Bachelor in Computer Science', institution: 'Halba Technical Institute', period: '2019' },
  ],
  skills: ['JavaScript','TypeScript','React','Tailwind','Node.js','PHP','Laravel','Shopify','WordPress','WooCommerce','API','Git','Accessibility','Framer Motion'],
  references: [
    { name: 'Nermine Monla', company: 'CODI-TECH' },
    { name: 'Fadi Haddad', company: 'CODI-TECH' },
    { name: 'Cendrella Moubayed', company: 'Mercy Corps' },
    { name: 'Omar Charqiyi', company: 'ELUX MEDIA' },
    { name: 'Hasan Awad', company: 'Devancy' },
  ],
  contacts: { email: 'hello@fatina.dev', phone: '+961 70 000 000', location: 'Lebanon' 

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
    
  ]

}
