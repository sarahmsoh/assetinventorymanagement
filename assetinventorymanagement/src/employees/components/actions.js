actions.js
import axios from 'axios';

export const createRequest = (newRequest) => {
    return axios.post('/requests', newRequest);
};

export const getRequests = () => {
    return axios.get('/requests');
};

export const getRequest = (requestId) => {
    return axios.get(`/requests/${requestId}`);
};
export default { createRequest, getRequests, getRequest };