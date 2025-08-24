import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-6xl font-black tracking-[0.35em] text-ink"
      >
        WEB
      </motion.div>
    </div>
  )
}
