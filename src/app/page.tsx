"use client";


import React from "react";
import { FloatingNavDemo } from "./navbar"; // Ensure this is the path to your navigation component
import { GoogleGeminiEffectDemo } from "./test-new"; // Ensure this is the path to your Gemini effect component
import { InfiniteMovingCardsDemo } from "./cards"; // Adjust the path as necessary


export default function Home() {
  return (

    <div className="relative bg-black"> {/* Assuming you want a black background that matches the Gemini Effect */}
      {/* Navigation section */}
      <FloatingNavDemo />

      {/* This div will cover the Gemini effect over the whole page */}
      <GoogleGeminiEffectDemo />

      {/* Infinite Moving Cards positioned directly under the Gemini Effect and centered */}
      <div className="flex flex-col items-center justify-center mt-10">
        <InfiniteMovingCardsDemo />
      </div>

      {/* Additional content sections if needed */}
    </div>
  );
}
