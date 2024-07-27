"use client"
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <button className="btn" onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="h-1/2 w-full bg-white p-6 mx-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button above to close</p>
            <button className="btn" onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
