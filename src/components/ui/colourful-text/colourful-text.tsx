"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
 const colors = [
  "rgb(173, 216, 230)", // lightblue
  "rgb(135, 206, 235)", // skyblue
  "rgb(100, 149, 237)", // cornflowerblue
  "rgb(70, 130, 180)",  // steelblue
  "rgb(65, 105, 225)",  // royalblue
  "rgb(30, 144, 255)",  // dodgerblue
  "rgb(0, 120, 212)",   // windows blue
  "rgb(0, 102, 204)",   // dark blue
  "rgb(25, 25, 112)",   // midnightblue
  "rgb(10, 30, 80)",    // deep navy
];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
