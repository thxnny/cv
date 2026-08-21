import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { WordsPullUpMultiStyle } from './WordsPullUp'

const EASE = [0.22, 1, 0.36, 1] as const

function Reveal({
  index,
  children,
  className = '',
}: {
  index: number
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

const FILES = [
  {
    file: 'resume.pdf',
    downloadName: 'Than_Chayawik_Resume.pdf',
    label: 'Resume',
    note: 'one page · the quick scan',
  },
  {
    file: 'cv.pdf',
    downloadName: 'Than_Chayawik_CV.pdf',
    label: 'Full CV',
    note: 'two pages · every project in detail',
  },
]

export default function Resume() {
  return (
    <section id="resume" className="relative bg-black px-4 py-8 sm:px-6 md:py-12">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 text-center md:mb-10">
          <WordsPullUpMultiStyle
            segments={[{ text: 'Prefer it on paper?', className: '' }]}
            className="font-display text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ color: '#E1E0CC' }}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {FILES.map((doc, i) => (
            <Reveal key={doc.file} index={i} className="rounded-2xl bg-[#212121] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-mono text-sm text-primary sm:text-base">{doc.file}</h3>
                    <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                      {doc.label} — {doc.note}
                    </p>
                  </div>
                </div>
                <a
                  href={`/${doc.file}`}
                  download={doc.downloadName}
                  className="group flex shrink-0 items-center gap-2 rounded-full bg-primary py-1.5 pl-4 pr-1.5 text-xs font-medium text-black transition-all hover:gap-3 sm:text-sm"
                >
                  Download
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-8 sm:w-8">
                    <Download className="h-3.5 w-3.5" style={{ color: '#E1E0CC' }} />
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
