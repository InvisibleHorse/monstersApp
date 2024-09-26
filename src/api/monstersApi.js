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
        return instance.get(`users?_page=${page}&_limit=${limit}`);
    },
    getMonster(id) {
        return instance.get(`users/${id}`);
    },
    filterMonsters(page, limit, search) {
        return instance.get(`users?_page=${page}&_limit=${limit}&name_like=${search}`);
    },
};
