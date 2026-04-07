import { useQuery, useMutation } from 'react-query';
import apiClient from '../lib/apiClient';

const fetchInvestments = async () => {
    const response = await apiClient.get('/investments');
    return response.data;
};

const createInvestment = async (investmentData) => {
    const response = await apiClient.post('/investments', investmentData);
    return response.data;
};

// Custom hook that encapsulates all investment-related queries
export const useInvestments = () => {
    return {
        investments: useQuery('investments', fetchInvestments),
        createInvestment: useMutation(createInvestment),
    };
};