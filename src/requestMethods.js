import axios from 'axios';

const BASE_URL = 'https://ih-shop-api.herokuapp.com/api/';
const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2UzZGM2ZDM4NTYyMDE4MDhkZTUwMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDQxNjEwMCwiZXhwIjoxNjQwNjc1MzAwfQ.oYNypePOkFwh_NYe9vsCmqCC5Vt3i3cOW44cT8wfFgI';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});
