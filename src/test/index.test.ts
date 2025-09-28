import {comparerNombres} from '../index';

describe('Comparaison de deux nombres\n', () => {
    test('si le premier nombre est supérieur au second', () => {
        expect(comparerNombres(10,5)).toEqual('Le premier est plus grand');
    });

    test('si le second est supérieur au premier', () => {
        expect(comparerNombres(5,10)).toEqual('Le deuxième est plus grand');
    });

    test('si les deux nombres sont identiques', () => {
        expect(comparerNombres(10,10)).toEqual('Les deux sont égaux');
    });
});
