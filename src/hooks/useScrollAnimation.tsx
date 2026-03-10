import { useEffect, useRef, useState, RefObject } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref as RefObject<T>, isVisible];
}

// Wrapper component for easy use
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
  delay?: number;
}

export function ScrollReveal({ children, className = "", variant = "fade-up", delay = 0 }: ScrollRevealProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const baseStyles = "transition-all duration-700 ease-out";

  const variants = {
    "fade-up": {
      hidden: "opacity-0 translate-y-8",
      visible: "opacity-100 translate-y-0",
    },
    "fade-left": {
      hidden: "opacity-0 -translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
      hidden: "opacity-0 translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    scale: {
      hidden: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
    fade: {
      hidden: "opacity-0",
      visible: "opacity-100",
    },
  };

  const v = variants[variant];

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${isVisible ? v.visible : v.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
