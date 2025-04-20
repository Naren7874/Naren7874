import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const words = text.split(" ");

  return (
    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 tracking-tighter">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-4 last:mr-0">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: wordIndex * 0.3 + letterIndex * 0.03,
                type: "spring",
                stiffness: 150,
                damping: 25,
              }}
              className="inline-block text-transparent bg-clip-text
                         bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800
                         dark:from-white dark:via-gray-300 dark:to-white"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;
