"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", // Trigger when the top of the element hits 85% of viewport
          toggleActions: "play none none reverse" // Reverse animation if scrolled back up
        }
      }
    );
  }, [delay]);

  return (
    <div ref={sectionRef} className="opacity-0">
      {children}
    </div>
  );
}
