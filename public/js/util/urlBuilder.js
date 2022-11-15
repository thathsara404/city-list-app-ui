'use strict';

export const CREATE_USER_URL = process.env.CREATE_USER_URL || 'http://localhost:8081/users';
export const LOGIN_USER_URL = process.env.LOGIN_USER_URL || 'http://localhost:8081/users/login';
export const PATCH_CITY_URL = process.env.PATCH_USER_URL || 'http://localhost:8081/cities/';