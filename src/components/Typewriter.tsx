import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  delay: number;      // Delay between letters
  pause?: number;     // Pause duration after finishing a word
  infinite?: boolean;
  classname?: string;
}

const Typewriter = ({
  texts,
  delay,
  pause = 1000,
  infinite = false,
  classname = '',
}: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: number;
    const currentString = texts[textIndex];

    if (!isDeleting && charIndex <= currentString.length) {
      // Typing letters
      timeout = setTimeout(() => {
        setCurrentText(currentString.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, delay);
    } 
    else if (!isDeleting && charIndex > currentString.length) {
      // Word finished, pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } 
    else if (isDeleting && charIndex >= 0) {
      // Deleting letters
      timeout = setTimeout(() => {
        setCurrentText(currentString.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, delay / 2); // Faster deletion
    } 
    else if (isDeleting && charIndex < 0) {
      // Move to next string
      setIsDeleting(false);
      setCharIndex(0);
      setTextIndex((prev) =>
        prev + 1 < texts.length ? prev + 1 : infinite ? 0 : prev
      );
    }

    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, isDeleting, texts, delay, pause, infinite]);

  return <span className={classname}>{currentText}</span>;
};

export default Typewriter;
