const sumOrderTotal = require("./calcular-valor-pedido");

it('should not charge freight when order value greater than 500', () => {
    const myOrder = {
        itens: [
            { name: 'Espada de prata', value: 500.00001 },
            { name: 'Entrega', value: 100, entrega: true }
        ]
    }

    const result = sumOrderTotal(myOrder);

    expect(result).toBe(500.00001);
});

it('should charge freight when order value less than 500', () => {
    const myOrder = {
        itens: [
            { name: 'Sanduiche', value: 50 },
            { name: 'Entrega', value: 15, entrega: true }
        ]
    }

    const result = sumOrderTotal(myOrder);

    expect(result).toBe(65);
});

it('should charge freight when order value equal 500', () => {
    const myOrder = {
        itens: [
            { name: 'Sopa de cogumelos', value: 500 },
            { name: 'Entrega', value: 40, entrega: true }
        ]
    }

    const result = sumOrderTotal(myOrder);

    expect(result).toBe(540);
});

it('should add 20% on freight value if state is RS', () => {
    const myOrder = {
        state: 'RS',
        itens: [
            { name: 'Sopa de cogumelos', value: 500 },
            { name: 'Entrega', value: 100, entrega: true }
        ]
    }

    const result = sumOrderTotal(myOrder);

    expect(result).toBe(620);
});

it('should add 20% on freight value if state is SC', () => {
    const myOrder = {
        state: 'SC',
        itens: [
            { name: 'Sopa de cogumelos', value: 500 },
            { name: 'Entrega', value: 100, entrega: true }
        ]
    }

    const result = sumOrderTotal(myOrder);

    expect(result).toBe(620);
});

it('should not add 20% on freight value if state is SP', () => {
    const myOrder = {
        state: 'SP',
        itens: [
            { name: 'Sopa de cogumelos', value: 500 },
            { name: 'Entrega', value: 100, entrega: true }
        ]
    }

    const result = sumOrderTotal(myOrder);

    expect(result).toBe(600);
});