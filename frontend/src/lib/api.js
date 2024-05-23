import axiosInstance from "@/lib/axiosInstance";

//This file contains API functions to interact with the backend
/**
 * Retrieves a list of proposals from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of proposals.
 */
export const getProposals = async () => {
  try {
    const response = await axiosInstance.get("/proposal/list");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
