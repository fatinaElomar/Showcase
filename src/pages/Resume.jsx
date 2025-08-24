import { motion } from 'framer-motion'

export default function Resume(){
  const profile = "I'm a full-stack web developer and graphic designer, thriving on the fusion of design and tech. I specialize in UI/UX, blending creativity and code to deliver visually stunning, highly functional digital experiences."

  const experience = [
    {
      role: "Graphic Designer",
      company: "ELUX MEDIA, Akkar, Hekker",
      period: "6-2023 | 11-2023",
      details: [
        "Created digital and print designs using Adobe Creative Suite",
        "Focused on typography, layout, and color",
        "Collaborated in team environments and met tight deadlines"
      ]
    },
    {
      role: "Frontend Developer",
      company: "BRANDIFY, Tripoli",
      period: "2023 | 2024",
      details: [
        "Designed digital and print assets using Adobe Suite, Figma, and React",
        "Delivered pixel-perfect UI with strong design principles"
      ]
    },
    {
      role: "Web Developer",
      company: "DEVANCY, France",
      period: "2024 | Present",
      details: [
        "Customized Shopify themes and WordPress plugins",
        "Integrated APIs and payment gateways",
        "Optimized site performance, SEO, and UX"
      ]
    },
    {
      role: "Developer",
      company: "TNL MEDIA, Miniara, North Lebanon",
      period: "2024 | 2025",
      details: [
        "Specialized in responsive websites",
        "Integrated APIs and improved site functionality"
      ]
    }
  ]

  const education = [
    {
      degree: "Full Stack Web Development Program",
      institution: "CODI, Tripoli, Mina",
      period: "2022-2023",
      details: ["NodeJs, Express, PHP, Laravel, SQL", "JavaScript, React, Bootstrap", "Agile, WordPress"]
    },
    {
      degree: "Business English Course",
      institution: "International Rescue Committee",
      period: "2021-2022"
    },
    {
      degree: "Free Code Camp Web Certificate",
      institution: "FreeCodeCamp",
      period: "2022-2023"
    },
    {
      degree: "Technical License in Computer Science (LT)",
      institution: "Halba Technical Institute",
      period: "2019"
    },
    {
      degree: "Superior Technician in Information Systems (TS2)",
      institution: "Halba Technical Institute",
      period: "2016-2018"
    },
    {
      degree: "Automation & Artificial Intelligence Course",
      institution: "CODI-TECH",
      period: "2018"
    }
  ]

  const skills = {
    development: ["HTML", "CSS", "PHP", "JavaScript", "React", "Shopify", "WordPress", "Responsive Web Design", "API Integration", "Git/GitHub/GitLab", "Database Management", "Agile"],
    design: ["Logo Design", "Brand Identity Design", "Typography", "Print Design", "UI/UX Design", "Adobe Creative Suite", "Color Theory", "Image Optimization"],
    communication: ["Team Coordination", "Deadline Management", "Active Listening", "Goal Orientation"]
  }

  const references = [
    { name: "Nermine Monla", contact: "03/962 412", email: "NERMINE@CODI.TECH", company: "CODI-TECH" },
    { name: "Fadi Haddad", contact: "71/096 239", email: "FADI@CODI.TECH", company: "CODI-TECH" },
    { name: "Cendrella Moubayed", contact: "70/792 808", company: "Mercy Corp" },
    { name: "Omar Charqiyi", contact: "81/634 263", company: "ELUX MEDIA" }
  ]

  const languages = ["English", "French", "Arabic"]

  const contact = {
    phone: "+96171779091",
    email: "fatinaelomar3@gmail.com",
    location: "Akkar, Lebanon",
    links: [
      "https://www.linkedin.com/in/fatina-elomar/",
      "https://www.behance.net/fatinaelomar",
      "https://github.com/fatinaElomar",
      "Portfolio"
    ]
  }

  return (
    <section className="section pt-28">
      <div className="container-responsive grid lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Profile + Experience + Languages + Contact */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile */}
          <motion.div 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}} 
            transition={{duration:.5}} 
            className="card p-6 bg-blue-50 border border-blue-200">
            <h1 className="text-3xl sm:text-4xl mb-2">Fatina Elomar</h1>
            <h2 className="text-xl text-ink/70 mb-4">Full Stack Web Developer & Graphic Designer</h2>
            <p className="text-ink/80">{profile}</p>
          </motion.div>

          {/* Experience */}
          <div>
            <h1 className="text-3xl sm:text-4xl mb-6">Experience</h1>
            <div className="space-y-6">
              {experience.map((e,i)=>(
                <motion.div key={e.role} initial={{opacity:0, x: i%2?30:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:.5}} 
                  className="card p-6 bg-purple-50 border border-purple-200">
                  <p className="font-semibold">{e.role}</p>
                  <p className="text-ink/70">{e.company}</p>
                  <p className="text-sm text-ink/60 mt-1">{e.period}</p>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-ink/70">
                    {e.details?.map((d,idx)=><li key={idx}>{d}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="card p-4 bg-yellow-50 border border-yellow-200">
            <h2 className="text-2xl font-semibold mb-4">Languages</h2>
            <div className="flex flex-wrap gap-2">
              {languages.map(l=><span key={l} className="px-3 py-1 border border-gray-300 rounded-md text-xs">{l}</span>)}
            </div>
          </div>

          {/* Contact */}
          <div className="card p-4 bg-green-50 ">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Location:</strong> {contact.location}</p>
            <div className="mt-2 space-y-1 text-sm">
              {contact.links.map(l=><p key={l}><a href={l} target="_blank" className="text-blue-600 hover:underline">{l}</a></p>)}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Education, Skills, References */}
        <div className="space-y-8">
          <div className="card p-4 bg-yellow-100 border ">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((ed,i)=>(
                <motion.div key={ed.degree} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.4, delay:i*0.04}}>
                  <p className="font-semibold">{ed.degree}</p>
                  <p className="text-ink/70">{ed.institution}</p>
                  <p className="text-sm text-ink/60">{ed.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="card p-4 bg-indigo-100 border ">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <p className="font-semibold mb-2">Development</p>
            <div className="flex flex-wrap gap-2 mb-4">{skills.development.map(s=><span key={s} className="px-3 py-1 border border-gray-300 rounded-md text-xs">{s}</span>)}</div>
            <p className="font-semibold mb-2">Design</p>
            <div className="flex flex-wrap gap-2 mb-4">{skills.design.map(s=><span key={s} className="px-3 py-1 border border-gray-300 rounded-md text-xs">{s}</span>)}</div>
            <p className="font-semibold mb-2">Communication</p>
            <div className="flex flex-wrap gap-2">{skills.communication.map(s=><span key={s} className="px-3 py-1 border border-gray-300 rounded-md text-xs">{s}</span>)}</div>
          </div>

          <div className="card p-4 bg-orange-50 border ">
            <h2 className="text-2xl font-semibold mb-4">References</h2>
            <div className="space-y-2 text-sm">
              {references.map(r=><p key={r.name}><span className="font-semibold">{r.name}</span> — {r.company} ({r.contact}) {r.email && `• ${r.email}`}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
