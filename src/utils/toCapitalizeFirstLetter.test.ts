import { toCapitalizeFirstLetter } from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
    test('Should return string with a capilized first letter', () => {
        const res = toCapitalizeFirstLetter('the home');

        expect(res).toEqual('The home');
    });
    test('Should return string without any changes', () => {
        const res = toCapitalizeFirstLetter('Okey');

        expect(res).toEqual('Okey');
    });
    test('Should return empty string', () => {
        const res = toCapitalizeFirstLetter('');

        expect(res).toEqual('');
    });
    test('Should return string with changed the first letter only', () => {
        const res = toCapitalizeFirstLetter('i am okeY');

        expect(res).toEqual('I am okeY');
    });
});
