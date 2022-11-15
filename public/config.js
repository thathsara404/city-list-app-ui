'use strict';

const {
    NODE_ENV,
    UI_VERSION
} = process.env;

const Config = {
    APP_NAME: 'User-City-App-UI',
    NODE_ENV: NODE_ENV || 'development',
    UI_VERSION: UI_VERSION || '1.0.0'
};

module.exports = Config;
