import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

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
      <motion.div style={{ scaleX }} className="h-1 bg-ink origin-left" />
      <div className="backdrop-blur bg-white/70 border-b border-gray-100">
        <nav className="container-responsive flex items-center justify-between py-4">
          <Link to="/" className="font-extrabold text-xl tracking-tight">
            Fatina
          </Link>
          <div className="hidden lg:flex items-center gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  "px-3 py-2 rounded-lg hover:bg-gray-100 " +
                  (isActive ? "text-accent" : "")
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="#contact"
              class="relative border bg-gradient-to-r from-purple-600 to-purple-400 text-white 
         px-6 py-3 rounded-[1.7rem] font-semibold 
         transition-all duration-300 ease-out 
         bg-[length:200%_200%] hover:bg-[position:100%_0%]"
            >
              Contact
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg border border-gray-200"
          >
            ☰
          </button>
        </nav>
      </div>

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
              className="px-3 py-3 rounded-lg bg-ink text-white text-center"
            >
              Contact
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
