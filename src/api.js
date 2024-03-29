import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.outsidein.dev/HkgJUWyKgexOdMOTz8BVEin82A5uhXvE',
});

const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};

export default api;