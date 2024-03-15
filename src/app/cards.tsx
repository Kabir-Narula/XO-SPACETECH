import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] flex flex-col antialiased items-center justify-center relative overflow-hidden mt-12">
      <div className="mt-16"> {/* Add margin to shift the cards down */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
}

const testimonials = [
{
    quote:
      "XO SpaceTech's app revolutionized my housing search near Ryerson University, providing intuitive tools that simplified the process and helped me secure a perfect place.",
    name: "David Miller",
    title: "Ryerson University Student",
  },
  {
    quote:
      "With XO SpaceTech's platform, I effortlessly found ideal accommodation near York University, allowing me to focus more on my academics and less on housing worries.",
    name: "Jessica Wong",
    title: "York University Student",
  },
  {
    quote:
      "XO SpaceTech's app was a game-changer during my time at George Brown College, streamlining the housing hunt and connecting me with great options, ultimately enhancing my college experience.",
    name: "Daniel Patel",
    title: "George Brown College Student",
  },
  {
    quote:
      "Thanks to XO SpaceTech, navigating the competitive Toronto housing market as a Humber College student was a breeze, ensuring I found the perfect place to study and relax.",
    name: "Lily Chen",
    title: "Humber College Student",
  },
];
