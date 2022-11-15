'use strict';

import { getAuthToken } from './browserStorageUtil';
import ResponseValidator from './responseValidator';

export class HTTPHelper {
    static async get (uri, headers) {
        const response = await fetch(uri, {
            credentials: 'same-origin',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`,
                ...headers
            }
        });      
        return ResponseValidator.validate(response); 
    }

    static async post (uri, headers, data = {}) {
        const response = await fetch(uri, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`,
                ...headers
            },
            body: JSON.stringify(data)
        });
        return ResponseValidator.validate(response); 
    }

    static async put (uri, headers, data = {}) {
        const response = await fetch(uri, {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`,
                ...headers
            },
            body: JSON.stringify(data)
        });
        return ResponseValidator.validate(response); 
    }

    static async patch (uri, headers, data = {}) {
        const response = await fetch(uri, {
            method: 'PATCH',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`,
                ...headers
            },
            body: JSON.stringify(data)
        });
        return ResponseValidator.validate(response); 
    }

    static async delete (uri, headers, data = {}) {
        const response = await fetch(uri, {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`,
                ...headers
            },
            body: JSON.stringify(data)
        });
        return ResponseValidator.validate(response); 
    }
}
