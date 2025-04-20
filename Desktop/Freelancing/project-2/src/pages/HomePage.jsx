import AnimatedText from "@/components/AnimatedText";
import Threads from "@/components/Threads";
import React from "react";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      <Threads
        amplitude={1}
        distance={0.3}
        enableMouseInteraction={false}
        className="fixed inset-0 z-0"
      />
      <div className="relative z-10 text-center px-4">
        <AnimatedText
          text="Where Ideas"
        />
        <AnimatedText
          text="Become Code!"
        />
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          Welcome to my interactive space
        </p>
      </div>
    </div>
  );
};

export default HomePage;
