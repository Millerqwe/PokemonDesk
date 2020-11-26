import { getUrlWithParamsConfig } from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
    describe('Check getPokemons endpoint', () => {
        const endpoint = 'getPokemons';

        test('Should pass endpoint and the empty query params, return the object with pathname, protocol, host and empty query properties', () => {
            const url = getUrlWithParamsConfig(endpoint, {});

            expect(url).toEqual({
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemons',
                query: {},
            });
        });

        test('Should pass endpoint and query params, return the object with pathname, protocol, host and query properties', () => {
            const url = getUrlWithParamsConfig(endpoint, { name: 'lol' });

            expect(url).toEqual({
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemons',
                query: { name: 'lol' },
            });
        });
    });
});
