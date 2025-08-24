import { motion, useScroll, useTransform } from 'framer-motion'
import MagneticButton from '../ui/MagneticButton'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 80])
  const y2 = useTransform(scrollY, [0, 600], [0, -60])

  return (
    <section className="relative overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute -top-24 -left-16 w-[32rem] h-[32rem] rounded-full bg-purple-400/30 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute -bottom-24 -right-16 w-[36rem] h-[36rem] rounded-full bg-purple-300/30 blur-3xl"
        style={{ y: y2 }}
      />

      <div className="container-responsive text-center py-32 lg:py-40 flex flex-col items-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display  sm:text-6xl  leading-tight"
          style={{ fontFamily: 'Reckless, Georgia, serif' }}
        >
          For the workflows<br />you can’t compromise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-lg max-w-xl"
          style={{ fontFamily: 'Roobert, -apple-system, BlinkMacSystemFont, Arial, Roboto, Ubuntu, "Helvetica Neue", sans-serif' }}
        >
          Build and orchestrate intelligent workflows and agents, on the platform security and IT teams love.
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <MagneticButton className="text-[#7c3aed] border border-[#7c3aed] bg-transparent px-6 py-3 rounded-[1.7rem] font-semibold ">
            Book a demo
          </MagneticButton>
          <MagneticButton className="border bg-[#7c3aed] text-[#ffffff] px-6 py-3 rounded-[1.7rem] font-semibold  transition">
            Sign up free
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
