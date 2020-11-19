import { config } from '../config';

export function getUrlWithParamsConfig(endpointConfig: string, query: object) {
    const url = {
        ...config.client.server,
        ...config.client.endpoint[endpointConfig].uri,
        query,
    };

    return url;
}
