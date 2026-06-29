"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const FRAME_COUNT = 240;
const ZOOM_FACTOR = 1.35;

export default function ScrollytellingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [loadedFrames, setLoadedFrames] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // 1. Preload frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;
    
    const checkCompletion = () => {
      if (loaded === FRAME_COUNT) {
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => setIsLoaded(true)
          });
        } else {
          setIsLoaded(true);
        }
      }
    };

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-88f30b9f16a6c268-jpg/ezgif-frame-${paddedIndex}.jpg`;

      img.onload = () => {
        loaded++;
        setLoadedFrames(loaded);
        checkCompletion();
      };
      
      // In case of error (e.g. dummy images not found), we still want to progress
      img.onerror = () => {
        loaded++;
        setLoadedFrames(loaded);
        checkCompletion();
      };

      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // 2. Canvas Rendering Logic
  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let currentFrameIndex = 0;

    const drawFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Manual object-fit: cover with ZOOM_FACTOR
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      
      let drawWidth = canvas.width * ZOOM_FACTOR;
      let drawHeight = canvas.height * ZOOM_FACTOR;
      
      if (imgRatio > canvasRatio) {
        // Image is wider than canvas
        drawWidth = drawHeight * imgRatio;
      } else {
        // Image is taller than canvas
        drawHeight = drawWidth / imgRatio;
      }

      const offsetX = (canvas.width - drawWidth) / 2;
      const offsetY = (canvas.height - drawHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Draw initial frame
    drawFrame(0);

    // 3. Scroll-to-Frame Mapping
    const handleScroll = () => {
      // Calculate scroll fraction based on the document's total scrollable height
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      
      // Prevent division by zero or errors
      if (docHeight <= 0) return;

      let scrollFraction = scrollTop / docHeight;
      scrollFraction = Math.max(0, Math.min(1, scrollFraction));

      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(scrollFraction * FRAME_COUNT)
      );

      requestAnimationFrame(() => drawFrame(frameIndex));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    requestAnimationFrame(() => drawFrame(0));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoaded]);

  // 4. Interactive Mouse Parallax
  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth - 0.5) * 20;
      const yPos = (e.clientY / innerHeight - 0.5) * 20;

      gsap.to(containerRef.current, {
        x: -xPos,
        y: -yPos,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isLoaded]);

  const loadingPercentage = Math.round((loadedFrames / FRAME_COUNT) * 100);

  return (
    <>
      {/* Loading Overlay */}
      {!isLoaded && (
        <div ref={overlayRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white flex-col gap-4">
          <h1 className="font-display-lg text-display-lg tracking-widest text-gold-500">Divine Studio</h1>
          <p className="font-label-md text-label-md tracking-[0.2em] opacity-70">
            LOADING EXPERIENCE {loadingPercentage}%
          </p>
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mt-4">
            <div 
              className="h-full bg-gold-500 transition-all duration-300 ease-out"
              style={{ width: `${loadingPercentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Scrollytelling Canvas Container */}
      <div 
        ref={containerRef} 
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none scale-105"
      >
        <canvas ref={canvasRef} className="block w-full h-full bg-black" />
      </div>
      
      {/* Scroll to Top Button */}
      {isLoaded && (
        <button
          onClick={() => gsap.to(window, { duration: 1, scrollTo: 0, ease: "power3.inOut" })}
          className="fixed bottom-6 right-6 z-50 bg-secondary-fixed text-primary p-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-transform material-symbols-outlined"
          title="Scroll to Top"
        >
          arrow_upward
        </button>
      )}
    </>
  );
}
