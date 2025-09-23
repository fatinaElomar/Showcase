// src/components/Projects.jsx
import { data } from '../data'
import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'

// Inline GitHub Icon
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
       className="w-4 h-4 sm:w-5 sm:h-5">
    <path d="M12 .5A12 12 0 0 0 8.21 23.9c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.09-.74.09-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.82 1.32 3.51 1 .11-.78.42-1.32.76-1.62-2.67-.31-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.47 11.47 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.69.24 2.94.12 3.25.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.64-5.49 5.94.43.37.81 1.09.81 2.21v3.28c0 .32.22.7.82.58A12 12 0 0 0 12 .5z" />
  </svg>
)

// Inline External Link Icon
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={2} stroke="currentColor"
       className="w-4 h-4 sm:w-5 sm:h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M18 13.5V18A2.25 2.25 0 0 1 15.75 20.25H6.75A2.25 2.25 0 0 1 4.5 18V8.25A2.25 2.25 0 0 1 6.75 6h4.5M15 3h6v6m-11.25 9L21 3" />
  </svg>
)

export default function Projects() {
  const categories = ['All', ...Array.from(new Set(data.projects.map(p => p.category)))]
  const [filter, setFilter] = useState('All')
  const items = useMemo(
    () => data.projects.filter(p => filter === 'All' || p.category === filter),
    [filter]
  )

  const colorOverlays = [
    "bg-[#FFD8A9]/60","bg-[#FFC1C1]/60","bg-[#A9E6FF]/60","bg-[#a678f6]/50",
    "bg-[#c5d7c5]/60","bg-[#e7d6c9]/60","bg-[#FBCFFB]/60","bg-[#FFE4B5]/60",
    "bg-[#E0CFFF]/60","bg-[#D9F9D9]/60"
  ]

  return (
    <section className="section pt-16 sm:pt-24">
      <div className="container-responsive">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Projects</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm md:text-base font-medium transition
                ${filter === c
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}
              `}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {items.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative group rounded-xl sm:rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Image or fallback */}
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-lg sm:text-xl font-semibold">
                    {p.title}
                  </div>
                )}

                {/* Color Overlay */}
                <div className={`absolute inset-0 ${colorOverlays[i % colorOverlays.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white 
                                opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                                transition-all duration-500 ease-out">
                  <h3 className="text-lg sm:text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-200 mt-1 sm:mt-2 text-xs sm:text-sm line-clamp-2">{p.summary}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] sm:text-xs bg-white/20 rounded-full backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-6">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer"
                         className="inline-flex items-center gap-1 text-[11px] sm:text-sm font-medium text-white hover:text-indigo-300 transition">
                        <GithubIcon /> Code
                      </a>
                    )}
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer"
                         className="inline-flex items-center gap-1 text-[11px] sm:text-sm font-medium text-white hover:text-indigo-300 transition">
                        <ExternalLinkIcon /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}
