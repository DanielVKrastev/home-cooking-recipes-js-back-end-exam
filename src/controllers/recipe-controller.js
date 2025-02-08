import e, { Router } from "express";

import recipeService from "../services/recipe-service.js";
import { getErrorMessage } from "../utils/error-unitls.js";
import { isAuth } from "../middlewares/auth-middleware.js";

const recipesController = Router();

recipesController.get('/create', isAuth, (req, res) => {
    res.render('recipe/create');
});

recipesController.post('/create', isAuth, async (req, res) => {
    const recipeData = req.body;

    try{
        await recipeService.create(recipeData);

        res.redirect('/recipe/catalog');
    }catch(err){
        const error = getErrorMessage(err);
        console.log(error);
        
        res.render('recipe/create', { error });
    }
});

recipesController.get('/catalog', async (req, res) => {
    const recipes = await recipeService.getAll();
    res.render('recipe/catalog', { recipes: recipes });
});

export default recipesController;