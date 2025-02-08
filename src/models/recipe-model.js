import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100,
    },
    ingredients: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 200,
    },
    instructions: {
        type: String,
        required: true,
        minLength: 10,
    },
    imageUrl: {
        type: String,
        required: true,
        match: /https?:\/\//,
    },
});

const Recipe = model('Recipe', recipeSchema);

export default Recipe;