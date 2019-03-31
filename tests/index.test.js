const Machine = require('../index');
const drinks = require('../drinks');

describe('Turn order into string instructions', () => {
    let machine;

    beforeAll(() => {
        machine = new Machine();
    })

    test('Should return C:1:0 when order is coffee with one sugar', () => {
        const instructions = machine.translateOrder(drinks.COFFEE, 1);
        expect(instructions).toBe('C:1:0');
    });

    test('Should return T:1:0 when order is tea with one sugar', () => {
        const instructions = machine.translateOrder(drinks.TEA, 1);
        expect(instructions).toBe('T:1:0');
    })

    test('Should return H:2:0 when order is chocolate with two sugars', () => {
        const instructions = machine.translateOrder(drinks.CHOCOLATE, 2);
        expect(instructions).toBe('H:2:0');
    })

    test('Should return H:: when order is chocolate with no sugar (no stick)', () => {
        const instructions = machine.translateOrder(drinks.CHOCOLATE, 0);
        expect(instructions).toBe('H::');
    })
});