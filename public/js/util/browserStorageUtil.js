'use strict';

import { AUTH_TOKEN_KEY } from '../const/sessionStorageConst';

export const getAuthToken = () => {
    return sessionStorage.getItem(AUTH_TOKEN_KEY);
};

export const setAuthToken = (token) => {
    return sessionStorage.setItem(AUTH_TOKEN_KEY, token);
};

