"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  as?: "div" | "section" | "li" | "p" | "span" | "h2" | "h3" | "article";
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Fades + lifts its content into view once it enters the viewport. */
export function Reveal({ children, as = "div", delay = 0, y = 24, className, once = true }: RevealProps) {
  const Comp = motion[as] as ElementType;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

const lineParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const lineChild: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease: EASE } },
};

/** Masked line-by-line text reveal for large typography. */
export function RevealLines({
  lines,
  className,
  lineClassName,
  immediate = false,
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  immediate?: boolean;
  delay?: number;
}) {
  const trigger = immediate
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, margin: "0px 0px -10% 0px" } };
  return (
    <motion.span
      className={className}
      variants={lineParent}
      initial="hidden"
      transition={{ delayChildren: delay }}
      {...trigger}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span className={`block ${lineClassName ?? ""}`} variants={lineChild}>
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
