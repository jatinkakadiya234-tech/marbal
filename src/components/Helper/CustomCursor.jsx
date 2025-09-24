import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        body, * {
          cursor: none !important; /* hide default cursor */
        }

        .custom-cursor {
          pointer-events: none;
          position: fixed;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          background: white; /* base color */
          transform: translate(-50%, -50%);
          transition: transform 0.1s, opacity 0.2s;
          z-index: 9999;
          mix-blend-mode: difference; /* auto-invert against background */
          opacity: 1;
        }

        .hidden {
          opacity: 0; /* fade out smoothly */
        }
      `}</style>

      {isVisible && (
        <div
          className={`custom-cursor ${!isVisible ? "hidden" : ""}`}
          style={{ left: position.x, top: position.y }}
        />
      )}
    </>
  );
}
