import { baseURL } from "app/api/client";
import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import useAuth from "./useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import asyncStorage, { Keys } from "@utils/asyncStorage";
import { runAxiosAsync } from "app/api/runAxiosAsync";
import { useDispatch } from "react-redux";
import { updateAuthState } from "app/store/auth";

const authClient = axios.create({ baseURL });

type Response = {
  tokens: {
    refresh: string;
    access: string;
  };
};

const useClient = () => {
  const { authState } = useAuth();
  const dispatch = useDispatch();

  const token = authState.profile?.accessToken;

  authClient.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = "Bearer " + token;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const refreshAuthLogic = async (failedRequest: any) => {
    // read refresh token from async storage
    const refreshToken = await asyncStorage.get(Keys.REFRESH_TOKEN);

    // then send request with that token to get new access and refresh token

    const options = {
      method: "POST",
      data: { refreshToken },
      url: `${baseURL}/auth/refresh-token`,
    };
    const res = await runAxiosAsync<Response>(axios(options));
    if (res?.tokens) {
      failedRequest.response.config.headers.Authorization =
        "Bearer " + res.tokens.access;
      await asyncStorage.save(Keys.AUTH_TOKEN, res.tokens.access);
      await asyncStorage.save(Keys.REFRESH_TOKEN, res.tokens.refresh);
      dispatch(
        updateAuthState({
          profile: { ...authState.profile!, accessToken: res.tokens.access },
          pending: false,
        })
      );
      return Promise.resolve();
    }
  };

  createAuthRefreshInterceptor(authClient, refreshAuthLogic);

  return { authClient };
};

export default useClient;
