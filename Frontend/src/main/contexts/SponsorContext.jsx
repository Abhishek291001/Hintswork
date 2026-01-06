import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../config/apiConfig";

export const SponsorContext = createContext();

export const SponsorProvider = ({ children }) => {
  const [sponsors, setSponsors] = useState([]);
  const [loadingSponsors, setLoadingSponsors] = useState(false);
  const [sponsorError, setSponsorError] = useState(null);

  // Fetch all sponsors
  const fetchSponsors = async () => {
    setLoadingSponsors(true);
    setSponsorError(null);
    try {
      const res = await axios.get(`${API_BASE_URL}/sponsers/get-all-sponsors`, {
        withCredentials: true,
      });
      setSponsors(res.data.sponsors || []);
    } catch (err) {
      setSponsorError(err.response?.data?.message || "Failed to fetch sponsors");
    } finally {
      setLoadingSponsors(false);
    }
  };

  // Add new sponsor
  const addSponsor = async (sponsorData) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/sponsers/add-sponsors`, sponsorData, {
        withCredentials: true,
      });
      setSponsors((prev) => [res.data.sponsor, ...prev]);
      return { success: true, message: res.data.message };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Failed to add sponsor" };
    }
  };

  // Edit sponsor
  const editSponsor = async (id, sponsorData) => {
    try {
      const res = await axios.put(`${API_BASE_URL}/sponsers/edit-sponsors/${id}`, sponsorData, {
        withCredentials: true,
      });
      setSponsors((prev) =>
        prev.map((s) => (s._id === id ? res.data.sponsor : s))
      );
      return { success: true, message: res.data.message };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Failed to edit sponsor" };
    }
  };

  // Delete sponsor
  const deleteSponsorById = async (id) => {
    try {
      const res = await axios.delete(`${API_BASE_URL}/sponsers/delete-sponsors/${id}`, {
        withCredentials: true,
      });
      setSponsors((prev) => prev.filter((s) => s._id !== id));
      return { success: true, message: res.data.message };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Failed to delete sponsor" };
    }
  };

  // useEffect(() => {
  //   fetchSponsors();
  // }, []);

  return (
    <SponsorContext.Provider
      value={{
        sponsors,
        loadingSponsors,
        sponsorError,
        fetchSponsors,
        addSponsor,
        editSponsor,
        deleteSponsorById,
      }}
    >
      {children}
    </SponsorContext.Provider>
  );
};

export const useSponsorContext = () => useContext(SponsorContext);
