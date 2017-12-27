/**
 * The view app.js is tightly coupled to the data access strategy used to retrieve data.
 * Here, we create a Data Service that hides the specific data access strategy
 * behind a generic API.
 */

import request from './request';

// method
export let findAll = () => {
    return request({url: '../employee.json'})
                .then(data => data = JSON.parse(data))
}

