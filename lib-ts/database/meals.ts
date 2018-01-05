interface Meals {
    [meal: string]: Recipe;
}

interface Recipe {
    ingredients: Array<string>;
    cooking_steps: Array<string>;
}

const meals: Meals = {
    food: {
        ingredients: ["", ""],
        cooking_steps: ["", ""]
    }
};

export default meals;
