'use strict';

import UIError from './UIError';
import { BROWSER_STORAGE_ERROR } from '../const/errorConst';

/**
 * Error type for browser storage related issues
 */
class BrowserStorageError extends UIError {
    /**
     * BrowserStorageError Constructor
     * @param {object} options: { cause: err }
     */
    constructor (message = BROWSER_STORAGE_ERROR, options) {
        super(options);
        this.message = message;
        this.options = options;
    }
}

export default BrowserStorageError;

