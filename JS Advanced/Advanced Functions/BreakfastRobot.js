function solve() {
    return (function () {
        let materials = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        };

        let recipeObject = {
            'apple' : {carbohydrate: 1, flavour: 2},
            'lemonade' : {carbohydrate: 10, flavour: 20},
            'burger' : {carbohydrate: 5, fat: 7, flavour: 3},
            'eggs' : {protein: 5, fat: 1, flavour: 1},
            'turkey' : {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
        };

        function restock(ingredients, qty) {
            materials[ingredients] += +qty;
            return 'Success';
        }

        function prepare(recipe, qty) {
            const needIngredients = Object.entries(recipeObject[recipe]);

            for (let [ingredient, quantity] of needIngredients) {
                const storedIngredients = materials[ingredient] * qty;

                if (quantity > storedIngredients){
                    return `Error: not enough ${ingredient} in stock`
                }
            }
            
            for (let [ingredients, quantity] of needIngredients) {
                materials[ingredients] -= quantity * qty;
            }
            return 'Success';
        }

        function report() {
            return Object.entries(materials)
                .map(x => `${x[0]}=${x[1]}`)
                .join(' ');
        }

        return function (input) {
            let tokens = input.split(' ');
            let command = tokens[0];

            switch (command) {
                case 'prepare':
                    return prepare(tokens[1], +tokens[2]);
                case 'restock':
                    return restock(tokens[1], +tokens[2]);
                case 'report':
                    return report();
            }
        }

    })();
}

