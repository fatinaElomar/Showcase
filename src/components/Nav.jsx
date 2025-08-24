import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // for arrow icon

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Scroll progress bar */}
      <motion.div style={{ scaleX }} className="h-1 bg-black origin-left" />

      <div className="backdrop-blur">
        <nav className="container-responsive flex items-center justify-between py-4">
          
          {/* Logo */}
          <Link to="/" className="font-extrabold text-2xl tracking-tight">
            Fatina
          </Link>

          {/* Center pill navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex  rounded-full px-2 py-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    "px-5 py-2 rounded-full font-medium transition " +
                    (isActive
                      ? "bg-white text-black shadow-sm"
                      : "text-gray-700 hover:text-black")
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CTA button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3  bg-[#a678f6] text-[#ffffff] font-semibold px-6 py-3 rounded-full" 
          >
           Contact me
            <span className=" text-white p-1.5 rounded-full">
              <ArrowUpRight size={16} />
            </span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg border border-gray-200"
          >
            ☰
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
            className="fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl p-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg hover:bg-gray-100"
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg bg-black text-white text-center"
            >
              Book a call
            </a>
            <button
              onClick={() => setOpen(false)}
              className="mt-auto text-sm text-gray-500"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
