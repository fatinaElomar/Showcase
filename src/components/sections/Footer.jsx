import { data } from '../../data'
import MagneticButton from '../ui/MagneticButton'

export default function Footer(){
  const { contacts } = data
  return (
    <footer id="contact" className="bg-[#000] section border-t border-gray-100">
      <div className="container-responsive grid sm:grid-cols-3 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white">Let’s build something</h3>
          <p className="text-white/70 mt-1">I’m available for freelance and full‑time roles.</p>
        </div>
        <div className="space-y-1">
          <p className="text-white/70">Email</p>
          <a className="font-semibold link text-white" href={`mailto:${contacts.email}`}>{contacts.email}</a>
          <p className="text-white/70 mt-3">Location</p>
          <p className="font-semibold text-white">{contacts.location}</p>
        </div>
        <div className="flex sm:justify-end">
          <MagneticButton onClick={()=>window.location.href='mailto:'+contacts.email}>Say Hello</MagneticButton>
        </div>
      </div>
    </footer>
  )
}
