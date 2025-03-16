"use client";
import { useEffect, useMemo, useState } from "react";
import { TypewriterEffect } from "../../components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const texts = useMemo(
    () => ["Finance Enthusiast", "AI & Data Science", "Cloud & DevOps Engineer", "Software Developer"],
    []
  );

  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 5000);  

    return () => clearInterval(interval);
  }, [texts]);  

  return (
    <div>
      <TypewriterEffect key={currentText} text={currentText} />
    </div>
  );
}
