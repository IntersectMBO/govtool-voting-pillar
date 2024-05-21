import axiosInstance from "@/lib/axiosInstance";

//This file contains API functions to interact with the backend
export const getProposals = async () => {
  try {
    const response = await axiosInstance.get("/proposal/list");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
