import axiosInstance from "@/lib/axiosInstance";
import { getProposals } from "@/lib/api";

jest.mock("@/lib/axiosInstance");

describe("getProposals", () => {
  test("should return an array of proposals", async () => {
    const mockResponse = {
      data: [
        { id: 1, title: "Proposal 1", type: "InfoAction" },
        { id: 2, title: "Proposal 2", type: "TreasuryAction" },
      ],
    };
    axiosInstance.get.mockResolvedValue(mockResponse);

    const result = await getProposals();

    expect(result).toEqual(mockResponse.data);
    expect(axiosInstance.get).toHaveBeenCalledWith("/proposal/list");
  });

  test("should log an error if request fails", async () => {
    const mockError = new Error("Request failed");
    axiosInstance.get.mockRejectedValue(mockError);

    console.error = jest.fn();

    await getProposals();

    expect(console.error).toHaveBeenCalledWith(mockError);
    expect(axiosInstance.get).toHaveBeenCalledWith("/proposal/list");
  });
});
