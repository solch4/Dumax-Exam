import { useState } from "react";
import axios from "axios";

const baseURL = "https://us-central1-dumax-eld.cloudfunctions.net/userApp";

export const useGetReport = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async (payload) => {
    setLoading(true);
    try {
      const { geofences, units, dates } = payload;
      const { data } = await axios.get(
        `${baseURL}/api/test/geocercas?geocerca=${geofences}&unidades=${units}&fechas=${dates}`
      );
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, error, data, fetchData };
};
