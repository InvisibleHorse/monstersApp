import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export const monsters = {
    getMonsters(page, limit) {
        return instance.get(`users?_start=${page}&_limit=${limit}`);
    },
};
