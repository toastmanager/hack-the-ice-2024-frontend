"use client";

import api from "@/lib/api-client";
import {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
  useContext,
} from "react";

const AuthContext = createContext<UserEntity | null>(null);

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserEntity | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isRetry, setIsRetry] = useState<boolean>(false);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await api.post("auth/me");
        setUser(response.data);
      } catch (error) {
        setUser(null);
      }
    };

    const fetchAccessToken = async () => {
      try {
        const response = await api.post("auth/refresh");
        setAccessToken(response.data.access_token);
      } catch (error) {
        setUser(null);
      }
    };

    fetchAccessToken();
    fetchMe();
  }, []);

  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use((config) => {
      config.headers.Authorization =
        !isRetry && accessToken
          ? `Bearer ${accessToken}`
          : config.headers.Authorization;
      return config;
    });

    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [accessToken]);

  useLayoutEffect(() => {
    const refreshInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401) {
          try {
            const response = await api.get("auth/refresh");

            setAccessToken(response.data.access_token);

            originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;

            return api(originalRequest);
          } catch (error) {
            setAccessToken(null);
            setUser(null);
            setIsRetry(false);
          }
        }
      }
    );

    return () => {
      api.interceptors.response.eject(refreshInterceptor);
    };
  });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
