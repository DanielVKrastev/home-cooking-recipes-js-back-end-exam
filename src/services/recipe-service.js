import Recipe from "../models/recipe-model.js";

export default {
    async create(recipeData) {
        console.log(recipeData);
        
        const createRecipe = await Recipe.create(recipeData);
        return createRecipe;
    },
}