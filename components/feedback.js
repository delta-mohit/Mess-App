// FeedbackForm.js
"use client";
import React from "react";

const FeedbackForm = ({ meal, rating, setRating }) => {
  return (
    <div className="w-3/4 p-4 bg-beige">
      <h2 className="text-xl font-bold">{meal}</h2>
      <div className="rating rating-lg w-full flex flex-row justify-evenly mt-4">
        {/* Hidden radio button for zero rating */}
        <input
          type="radio"
          name={`rating-${meal}`}
          className="hidden"
          checked={rating === 0}
          onChange={() => setRating(0)}
        />
        {[1, 2, 3, 4, 5].map((value) => (
          <input
            key={value}
            type="radio"
            name={`rating-${meal}`}
            className="mask mask-star-2"
            checked={rating === value}
            onChange={() => setRating(value)}
          />
          // Isme Mohit Saini ko ye logic smjh nahi aya tha ki agar mein star number 3 select kar raha hu to 1,2,3 kyu select ho jaa rahe hai?? Hisab se to sirf 3 ko select hona chaiye the. Daisy UI Componet + ChatGPT ki help se desired behaviour to mil gaya but bhaiya logic nahi smjh aya Mohit Saini ko
        ))}
      </div>
    </div>
  );
};

export default FeedbackForm;
