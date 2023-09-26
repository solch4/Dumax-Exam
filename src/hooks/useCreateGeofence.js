import { useState } from "react";
import axios from "axios";

const baseURL = "https://us-central1-dumax-eld.cloudfunctions.net/userApp";

export const useCreateGeofence = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const postData = async (payload) => {
    setLoading(true);
    try {
      const body = {
        geocerca: payload.geofences,
        unidades: payload.units,
        nombreUnidad: payload.unitName,
        licenciaChofer: payload.license,
        emailChofer: payload.email,
      };
      const { data } = await axios.post(`${baseURL}/api/test/geocercas`, body);
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, error, data, postData };
};
