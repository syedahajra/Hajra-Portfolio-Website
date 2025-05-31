"use client";

import { useState, useEffect } from "react";

export default function Controls({ onCustomize }) {
  const [options, setOptions] = useState({
    hat: false,
    glasses: true,
    color: "#3b82f6",
  });

  useEffect(() => {
    onCustomize(options);
  }, [options]);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg flex gap-4">
      <button
        onClick={() => setOptions({ ...options, hat: !options.hat })}
        className={`p-3 rounded-full transition ${
          options.hat ? "bg-blue-500" : "bg-gray-700"
        }`}
      >
        🎩
      </button>
      <button
        onClick={() => setOptions({ ...options, glasses: !options.glasses })}
        className={`p-3 rounded-full transition ${
          options.glasses ? "bg-blue-500" : "bg-gray-700"
        }`}
      >
        👓
      </button>
      <input
        type="color"
        value={options.color}
        onChange={(e) => setOptions({ ...options, color: e.target.value })}
        className="w-10 h-10 cursor-pointer rounded-full border-2 border-white"
      />
    </div>
  );
}
