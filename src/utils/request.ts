import Url from 'url';
import { getUrlWithParamsConfig } from './getUrlWithParamsConfig';

export async function req(address: string, query: object) {
    const uri = Url.format(getUrlWithParamsConfig(address, query));
    const responcePromise = await fetch(uri).then((res) => res.json());

    return responcePromise;
}
