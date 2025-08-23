const freightMultiplier = 1.2;

const sumOrderTotal = order => {
    const productsValue = order.itens
        .filter(item => !item.entrega)
        .reduce((orderTotal, actualOrder) => orderTotal + actualOrder.value, 0);

    let freight = order.itens.filter(item => item.entrega);

    if (order.state === 'RS' || order.state === 'SC') {
        freight[0].value = freight[0].value * freightMultiplier
    }

    return (productsValue > 500) ? productsValue : productsValue + freight[0].value;
}

module.exports = sumOrderTotal;