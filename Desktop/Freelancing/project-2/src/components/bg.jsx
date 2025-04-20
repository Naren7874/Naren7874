"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function BackgroundPaths({
  title = "Background Paths",
  title2 = "",
  content = "",
  showButton = true,
}) {
  const words = title.split(" ")

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 
                                        dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {title2 && (
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: words.join(" ").length * 0.03 + 0.5,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="text-xl sm:text-2xl md:text-3xl mb-6 font-semibold text-transparent bg-clip-text 
                        bg-gradient-to-r from-emerald-500 to-blue-600 
                        dark:from-amber-200 dark:to-emerald-400"
            >
              {title2}
            </motion.h2>
          )}

          {content && (
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: words.join(" ").length * 0.03 + (title2 ? 1.2 : 0.7),
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="text-base sm:text-lg mb-8 max-w-3xl mx-auto leading-relaxed 
                        text-neutral-700 dark:text-neutral-300"
            >
              {content}
            </motion.p>
          )}

          {showButton && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: words.join(" ").length * 0.03 + (content ? 1.8 : title2 ? 1.5 : 0.9),
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                          dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                          overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Button
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                              bg-gradient-to-r from-purple-500/90 to-blue-500/90 hover:from-purple-500 hover:to-blue-500
                              dark:from-blue-600/90 dark:to-purple-600/90 dark:hover:from-blue-600 dark:hover:to-purple-600
                              text-white transition-all duration-300 
                              group-hover:-translate-y-0.5 border border-white/10
                              hover:shadow-md dark:hover:shadow-neutral-800/50"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">Join Us</span>
                {/* <span
                  className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                  transition-all duration-300"
                >
                  →
                </span> */}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
