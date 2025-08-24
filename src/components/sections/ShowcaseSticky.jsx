import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { data } from "../../data";
import { Link } from "react-router-dom";

const row1 = data.projects.slice(0, Math.ceil(data.projects.length / 2));
const row2 = data.projects.slice(Math.ceil(data.projects.length / 2));

export default function ShowcaseSticky() {
  const [widthRow1, setWidthRow1] = useState(0);
  const [widthRow2, setWidthRow2] = useState(0);

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    if (row1Ref.current) setWidthRow1(row1Ref.current.scrollWidth / 2);
    if (row2Ref.current) setWidthRow2(row2Ref.current.scrollWidth / 2);
  }, []);

  const speed = 40; // higher = slower

  return (
    <section className="w-screen h-screen bg-mist py-16 overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-12 w-full">
          <h2 className="text-4xl  font-bold">Selected Work</h2>
          <p className="mt-3 text-ink/70 max-w-md mx-auto">
            A few projects that balance aesthetics and performance.
          </p>
        </div>

        {/* Row 1 → scroll RIGHT */}
        <div className="relative w-full overflow-hidden" style={{ height: "300px" }}>
          <motion.div
            ref={row1Ref}
            className="flex gap-8 absolute"
            animate={{ x: [-widthRow1, 0] }} // move from left to right
            transition={{ repeat: Infinity, ease: "linear", duration: speed }}
          >
            {[...row1, ...row1].map((p, i) => (
              <div
                key={i}
                className="card min-w-[400px] h-full rounded-3xl p-8 shadow-2xl flex-shrink-0"
                style={{ backgroundColor: p.color || "#fde68a" }}
              >
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="text-ink/70 mt-4">{p.summary}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 → scroll LEFT */}
        <div className="relative w-full overflow-hidden mt-12" style={{ height: "300px" }}>
          <motion.div
            ref={row2Ref}
            className="flex gap-8 absolute"
            animate={{ x: [0, -widthRow2] }} // move left
            transition={{ repeat: Infinity, ease: "linear", duration: speed }}
          >
            {[...row2, ...row2].map((p, i) => (
              <div
                key={i}
                className="card min-w-[400px] h-full rounded-3xl p-8 shadow-2xl flex-shrink-0"
                style={{ backgroundColor: p.color || "#fecaca" }}
              >
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="text-ink/70 mt-4">{p.summary}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 w-full">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            See all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
