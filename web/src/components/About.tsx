import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { WordsPullUpMultiStyle } from './WordsPullUp'

const BODY_TEXT =
  'Over the last three years I have shipped production software for hospitals, government services, retail, logistics, and finance teams — a five-service social welfare platform, a multi-currency budget and payment platform, AI-driven shipping-document reconciliation, headless-CMS storefronts. Almost all of it lives behind logins and NDAs, so instead of screenshots, the diagrams below show how the systems I build actually fit together.'

type AnimatedLetterProps = {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}

function AnimatedLetter({ char, progress, range }: AnimatedLetterProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return <motion.span style={{ opacity }}>{char}</motion.span>
}

function ScrollRevealParagraph({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const chars = text.split('')

  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => {
        const charProgress = i / chars.length
        return (
          <AnimatedLetter
            key={i}
            char={char}
            progress={scrollYProgress}
            range={[charProgress - 0.1, charProgress + 0.05]}
          />
        )
      })}
    </p>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-black px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-16 text-center sm:px-10 md:rounded-[2rem] md:py-24">
        <p className="mb-6 font-mono text-[10px] text-primary/70 sm:text-xs">
          role: full-stack · devops engineer
        </p>
        <WordsPullUpMultiStyle
          segments={[
            { text: 'I am Than Chayawik,', className: 'font-normal' },
            { text: 'a full-stack engineer.', className: 'italic font-serif' },
            {
              text: 'I build cloud platforms, delivery pipelines, and the apps that run on them.',
              className: 'font-normal',
            },
          ]}
          className="mx-auto max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
          style={{ color: '#E1E0CC' }}
        />
        <ScrollRevealParagraph
          text={BODY_TEXT}
          className="mx-auto mt-10 max-w-2xl text-xs text-[#DEDBC8] sm:text-sm md:mt-14 md:text-base"
        />
      </div>
    </section>
  )
}
