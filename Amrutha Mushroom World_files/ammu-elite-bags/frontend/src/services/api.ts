import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust the base URL as needed
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getBags = async () => {
    try {
        const response = await apiClient.get('/bags');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching bags: ' + error.message);
    }
};

export const getBagById = async (id: string) => {
    try {
        const response = await apiClient.get(`/bags/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching bag: ' + error.message);
    }
};

export const createBag = async (bagData: any) => {
    try {
        const response = await apiClient.post('/bags', bagData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating bag: ' + error.message);
    }
};

export const updateBag = async (id: string, bagData: any) => {
    try {
        const response = await apiClient.put(`/bags/${id}`, bagData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating bag: ' + error.message);
    }
};

export const deleteBag = async (id: string) => {
    try {
        const response = await apiClient.delete(`/bags/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting bag: ' + error.message);
    }
};