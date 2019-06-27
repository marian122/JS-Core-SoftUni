function solve(order) {
    let engines = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500}
    ];

    let carriage = [
        { type: 'hatchback', color: order.color},
        { type: 'coupe', color: order.color }
    ];

    const wheelSize = order.wheelsize % 2 !== 0
        ? order.wheelsize
        : order.wheelsize--;

    const car = {
        model: order.model,
        engine: engines.filter(p => p.power >= order.power)[0],
        carriage: carriage.filter(c => c.type === order.carriage)[0],
        wheels: Array(4).fill(order.wheelsize)
    };

    return car;
}