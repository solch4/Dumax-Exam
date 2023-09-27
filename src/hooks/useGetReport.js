import { useState } from "react";
import axios from "axios";

import results from "../data/reports/results.json";

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
      const sortedData = data.sort((a, b) => {
        let dateA = new Date(a.timeStamps.entrada);
        let dateB = new Date(b.timeStamps.entrada);
        return dateB - dateA;
      });
      setData(sortedData);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, error, data, fetchData };
};
