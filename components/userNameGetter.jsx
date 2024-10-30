import React, { useEffect } from "react";
import { useAppDispatch } from "../lib/hooks";
import { userNameActions } from "../lib/features/userName/userNameSlice";
import getProfileData from "@/custom-functions/getProfileData";

const UserNameGetter = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace with your actual API call
        const data = await getProfileData();
        // Update state with fetched data
        const name = data.name;
        dispatch(userNameActions.setUserName(name));
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    fetchUserData();
  }, []); // Empty dependency array ensures this runs only once after initial render

  return <></>;
};

export default UserNameGetter;
