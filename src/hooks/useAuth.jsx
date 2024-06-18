import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axiosInstance from '../config/axiosConfig';

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const checkTokenExpirationAndRefresh = async () => {
      setToken(localStorage.getItem('token'));
      const isTokenNearlyExpired = (token) => {
        if (!token) {
          return false;
        }
        const decodedToken = jwtDecode(token);
        if (!decodedToken.exp) {
          return false;
        }
        const expirationTime = decodedToken.exp * 1000;
        const timeUntilExpiration = expirationTime - Date.now();
        if (timeUntilExpiration < 0) {
          localStorage.clear();
          return false;
        }
        console.log(timeUntilExpiration);
        const tenMinutesInMillis = 10 * 60 * 1000; // 10 minutes in milliseconds
        return timeUntilExpiration < tenMinutesInMillis;
      };

      if (token && isTokenNearlyExpired(token)) {
        await axiosInstance.post(`/courtstar/auth/refresh`, token)
          .then(res => {
            const dataObj = res.data;
            const newToken = dataObj.data.token;
            localStorage.setItem('token', newToken);
            setToken(newToken);
          })
          .catch(error => {
            console.log(error.message);
          })
          .finally();
        }
    };

    checkTokenExpirationAndRefresh();

    // Set up interval to check token expiration periodically if needed
    const tokenCheckInterval = setInterval(checkTokenExpirationAndRefresh, 60*1000); // Check every minute

    return () => clearInterval(tokenCheckInterval);
  }, [token]);

  return token;
};

export default useAuth;
