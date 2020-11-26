import { config } from '../config';

export function getUrlWithParamsConfig(endpointConfig: string, query: { [k: string]: any }) {
    const { id } = query;

    if (id !== undefined) {
        /* eslint-disable no-param-reassign */
        delete query.id;
    }

    const url = {
        ...config.client.server,
        ...config.client.endpoint[endpointConfig].getUri(id),
        query,
    };

    return url;
}
