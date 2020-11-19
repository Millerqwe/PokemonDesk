import { useState, useEffect } from 'react';
import { req } from '../utils/request';

export const useData = (endpoints: string, query: object, deps: any[] = []) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    const getData = async () => {
        try {
            const data = await req(endpoints, query);

            setData(data);
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, deps);

    return {
        data,
        isLoading,
        isError,
    };
};
