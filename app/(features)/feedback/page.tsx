"use client";
import React, { useRef, useState } from "react";
import FeedbackForm from "@/components/feedback";
import { RxDropdownMenu } from "react-icons/rx";
import Navbar from "@/components/Navbar";
import submitRatingFunc from "@/custom-functions/rating/submitRating"
import submitFeedbackFunc from '@/custom-functions/rating/submitFeedback'
const Feedback = () => {
  const details = {
    name: "",
    message: "Feedback Form",
  };
  const [selectedDay, setSelectedDay] = useState(
    "Click Here to Choose the Day"
  );
  const detailsRef = useRef<any>(null);
  const handleDaySelection = (day: any) => {
    setSelectedDay(day);
    if (detailsRef.current) {
      detailsRef.current.open = false; // Close the dropdown
    }
  };

  const [ratings, setRatings] = useState({
    BREAKFAST: 0,
    LUNCH: 0,
    SNACKS: 0,
    DINNER: 0,
  });

  const handleRatingChange = (meal: any, value: any) => {
    setRatings((prevRatings) => ({ ...prevRatings, [meal] : value }));
  };

  const handleSubmitRating = () => {
    //console.log("Feedback:", ratings); // To print ratings on Browser Console. 
    submitRatingFunc(selectedDay, ratings);
    //Reset all ratings to zero
    setRatings({
      BREAKFAST: 0,
      LUNCH: 0,
      SNACKS: 0,
      DINNER: 0,
    });
  };
 const feedbackRef = useRef<any>("");
 const handleSubmitFeedback = ()=>{
  submitFeedbackFunc(feedbackRef.current.value);
  feedbackRef.current.value="";
 };

  return (
    <>
      <Navbar details={details} />
      {/* Select the Day */}
      <div className="flex flex-col justify-center items-center mt-12 space-y-8">
       <details className="dropdown w-3/4" ref={detailsRef}>
         <summary className="btn m-1 w-full bg-purple-500 text-white font-bold flex justify-center items-center space-x-2 cursor-pointer">
            <RxDropdownMenu className="h-5 w-5" />
            <span>{selectedDay}</span>
          </summary>
          <ul className="menu dropdown-content rounded-box z-[1] w-full p-2 shadow-2xl bg-indigo-400 text-white">
            {["Today", "Yesterday"].map((day) => (
              <li className="group" key={day}>
                <a
                  className="block py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform group-hover:bg-purple-700 group-hover:scale-105 cursor-pointer"
                  onClick={() => handleDaySelection(day)}
                >
                  {day}
                </a>
              </li>
            ))}
          </ul>
        </details>
        {/* Select the rating */}
        <div className="flex flex-col items-center justify-center w-full">
          <FeedbackForm
            meal="BREAKFAST"
            rating={ratings.BREAKFAST}
            setRating={(value: any) => handleRatingChange("BREAKFAST", value)}
          />
          <FeedbackForm
            meal="LUNCH"
            rating={ratings.LUNCH}
            setRating={(value: any) => handleRatingChange("LUNCH", value)}
          />
          <FeedbackForm
            meal="SNACKS"
            rating={ratings.SNACKS}
            setRating={(value: any) => handleRatingChange("SNACKS", value)}
          />
          <FeedbackForm
            meal="DINNER"
            rating={ratings.DINNER}
            setRating={(value: any) => handleRatingChange("DINNER", value)}
          />
        </div>
        <div className="w-3/4 flex flex-row justify-center">
          <button
            className="btn btn-primary bg-purple-500 hover:bg-purple-800 text-white border-none"
            onClick={handleSubmitRating}
          >
            Submit Rating
          </button>
          {/* Here I override the CSS of the daisy ui button with classes btn and btn-primary with my tailwind css*/}
        </div>
      </div>

      <div className="w-80 mx-auto mt-10">
        <textarea
          placeholder="Write your Suggestions here if any..."
          className="textarea textarea-bordered w-80 h-40 p-4 mx-auto text-lg border-purple-500 rounded-lg focus:outline-none focus:border-purple-700"
          style={{ resize: "none" }}
          ref={feedbackRef}
        ></textarea>
        <button className="btn btn-primary bg-purple-500 text-white hover:bg-purple-800 border-none my-4"
        onClick={handleSubmitFeedback}>
          Submit Feedback
        </button>
      </div>
    </>
  );
};

export default Feedback;
