import React, { createContext, useContext, useState } from "react";
import API_BASE_URL from "../../config/apiConfig"; 

const BookDemoContext = createContext();

export const BookDemoProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const bookDemo = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/book-demo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send request");
      }

      setResponse(data);
      return data;
    } catch (err) {
      setError({ message: err.message });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookDemoContext.Provider value={{ bookDemo, loading, response, error }}>
      {children}
    </BookDemoContext.Provider>
  );
};

export const useBookDemo = () => useContext(BookDemoContext);
