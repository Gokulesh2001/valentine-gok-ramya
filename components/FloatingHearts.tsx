import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
}

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(current => {
        const newHeart: Heart = {
          id: Date.now(),
          left: Math.random() * 100,
          animationDuration: 3 + Math.random() * 4,
          size: 10 + Math.random() * 20,
        };
        // Keep max 20 hearts to avoid performance issues
        const cleanList = current.filter(h => Date.now() - h.id < h.animationDuration * 1000);
        return [...cleanList, newHeart];
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute bottom-[-50px] text-rose-300 opacity-60 animate-float"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.animationDuration}s`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};