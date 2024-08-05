import React from "react";
import { useState, useEffect } from "react";
function Otp() {
  const [timer, setTimer] = useState(60);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setIsButtonVisible(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setTimer(60); // reset timer to 30 seconds
    setIsButtonVisible(false);
    // Handle the resend action here
  };

  return (
    <div className="my-4 flex flex-col sm:flex-row justify-between items-center">
      <input
        type="text"
        placeholder="One Time Password"
        className="input input-bordered input-info w-full max-w-xs text-blue-700 text-xl font-medium"
      />
      <div className="flex justify-center items-center mt-4 sm:mt-0">
      {(isButtonVisible) ? (
        <button
          className="p-2 sm:px-4 sm:py-3  bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleResend}
        >
          Resend OTP
        </button>
      ) : (
        <div className="text-md font-semibold text-blue-600">Resend OTP in <span>{timer}</span> sec</div>
      )}
    </div>
    </div>
  );
}
export default Otp;
