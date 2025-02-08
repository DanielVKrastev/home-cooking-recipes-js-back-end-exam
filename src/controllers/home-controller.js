import { Router } from "express";
import recipeService from "../services/recipe-service.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    const newRecipes = await recipeService.getNewThree();
    
    res.render('home', { recipes: newRecipes });
});

export default homeController;