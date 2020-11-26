import { useState, useEffect } from 'react';
import { req } from '../utils/request';

export const useData = <T>(endpoints: string, query: object, deps: any[] = []) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [isError, setError] = useState<boolean>(false);

    const getData = async (): Promise<void> => {
        try {
            const data = await req<T>(endpoints, query);

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
