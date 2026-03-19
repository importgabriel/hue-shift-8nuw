'use client';

import { useState } from 'react';
import ColorButton from '@/components/ColorButton';

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const generateRandomColor = (): string => {
    const colors = [
      '#FF6B6B', // Red
      '#4ECDC4', // Teal
      '#45B7D1', // Blue
      '#96CEB4', // Green
      '#FECA57', // Yellow
      '#FF9FF3', // Pink
      '#54A0FF', // Light Blue
      '#5F27CD', // Purple
      '#00D2D3', // Cyan
      '#FF9F43', // Orange
      '#10AC84', // Mint
      '#EE5A6F', // Rose
      '#C44569', // Dark Pink
      '#40407A', // Dark Blue
      '#706FD3', // Lavender
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleColorChange = () => {
    const newColor = generateRandomColor();
    setBackgroundColor(newColor);

    // Apply the color to the body element
    document.body.style.backgroundColor = newColor;
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-8"
    >
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Random Color Generator
        </h1>
        <p className="text-6xl text-white mb-8">
          HEYY
        </p>
        <ColorButton onClick={handleColorChange} className="bg-green-500" />
        <p className="text-sm text-gray-500 mt-4">
          Current color: {backgroundColor}
        </p>
      </div>
    </main>
  );
}