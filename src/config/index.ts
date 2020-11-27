export const config = {
    client: {
        server: {
            protocol: 'http',
            host: 'zar.hosthot.ru',
        },
        endpoint: {
            getPokemons: {
                method: 'GET',
                getUri: () => {
                    return { pathname: '/api/v1/pokemons' };
                },
            },
            getPokemon: {
                method: 'GET',
                getUri: (id: string | number) => ({
                    pathname: `/api/v1/pokemon/${id}`,
                }),
            },
        },
    },
};
