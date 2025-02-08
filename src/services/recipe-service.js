import Recipe from "../models/recipe-model.js";

export default {
    async create(recipeData) {
        const createRecipe = await Recipe.create(recipeData);
        return createRecipe;
    },
    async getAll(){
        const recipes = await Recipe.find({});
        return recipes;
    },
    async getNewThree(){
        const recipes = await Recipe.find({}).sort({ field: 'asc', _id: -1 }).limit(3)
        return recipes;
    },
    async getOne(recipeId){
        const recipe = await Recipe.findById(recipeId);
        return recipe;
    }
}