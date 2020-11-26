import Url from 'url';
import { getUrlWithParamsConfig } from './getUrlWithParamsConfig';

export async function req<T>(address: string, query: object): Promise<T> {
    const uri = Url.format(getUrlWithParamsConfig(address, query));
    const responcePromise = await fetch(uri).then((res) => res.json());

    return responcePromise;
}
