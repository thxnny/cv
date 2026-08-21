import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { WordsPullUp } from './WordsPullUp'

const LINKS = [
  { label: 'thanc.work@gmail.com', href: 'mailto:thanc.work@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/thxnny', icon: Github },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/than-chayawik-8a1b92321/',
    icon: Linkedin,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-4 pb-16 pt-8 text-center sm:px-6 md:pb-24">
      <WordsPullUp
        text="Let's build something."
        className="font-display text-2xl font-medium sm:text-3xl md:text-4xl"
        style={{ color: '#E1E0CC' }}
      />
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="group flex items-center gap-1.5 font-mono text-xs text-primary/80 transition-colors hover:text-primary sm:text-sm"
          >
            <link.icon className="h-3.5 w-3.5 opacity-75 sm:h-4 sm:w-4" />
            {link.label}
            <ArrowRight className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:rotate-0" />
          </a>
        ))}
      </div>
    </section>
  )
}
