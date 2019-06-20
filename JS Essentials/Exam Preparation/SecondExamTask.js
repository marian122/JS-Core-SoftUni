function solve(days) {

    let coffeePer100Mg = (3 * 150) * (40 / 100);
    let cocaColaPer100Mg = (2 * 250) * (8 / 100);
    let teaPer100Mg = (3 * 350) * (20 / 100);

    let morningRoutine = coffeePer100Mg + cocaColaPer100Mg + teaPer100Mg;

    let totalCaffeine = 0;

    for (let i = 1; i <= days; i++) {
        totalCaffeine += morningRoutine;

        if (i % 5 === 0){
            let energy = (3 * 500) * (30 / 100);
            totalCaffeine += energy;
        }

        if(i % 9 === 0){
            let energy = (2 * 500) * (30 / 100);
            totalCaffeine += energy + (4 * 250) * (8 / 100);
        }
    }

    console.log(`${totalCaffeine} milligrams of caffeine were consumed`);
}
solve(8);
solve(5);