import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface TypewriterProps {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  className?: string;
}

export function Typewriter({
  strings,
  typeSpeed = 50,
  deleteSpeed = 30,
  delayBetween = 2000,
  className
}: TypewriterProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const currentString = strings[currentStringIndex];

    if (!isDeleting && currentText === currentString) {
      // Pause at the end of typing
      timeout = setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && currentText === '') {
      // Move to next string
      setIsDeleting(false);
      setCurrentStringIndex((prev) => (prev + 1) % strings.length);
    } else {
      // Typing or deleting
      const nextText = isDeleting
        ? currentString.substring(0, currentText.length - 1)
        : currentString.substring(0, currentText.length + 1);

      timeout = setTimeout(() => {
        setCurrentText(nextText);
      }, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, deleteSpeed, delayBetween]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[3px] h-[1em] bg-[var(--color-accent)] ml-1"
      />
    </span>
  );
}
