"use client";
import React, { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js"; // Ensure correct import

const TypesComponent: React.FC = () => {
  const typesElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: TypedOptions = {
      strings: ["Front-End Developer.", "Graphic Designer.", "Web Designer."],
      typeSpeed: 100,
      loop: true,
      backDelay: 1000,
      startDelay: 200,
      backSpeed: 100,
    };

    if (typesElement.current) {
      const typed = new Typed(typesElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <div ref={typesElement} className="element"></div>;
};

export default TypesComponent;
