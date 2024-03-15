import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";


export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Adjust these values to control the animation's scroll trigger range
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]); // Reduced end value
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.5], [0.15, 1]); // Reduced end value
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.5], [0.1, 1]); // Reduced end value
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.5], [0.05, 1]); // Reduced end value
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.5], [0, 1]); // Reduced end value

  return (
    <div
      className="h-[50vh] rounded-md relative pt-40 " // Reduced height to match reduced scroll interaction
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
