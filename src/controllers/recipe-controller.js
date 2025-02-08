import e, { Router } from "express";

import recipeService from "../services/recipe-service.js";
import { getErrorMessage } from "../utils/error-unitls.js";

const recipesController = Router();

recipesController.get('/create', (req, res) => {
    res.render('recipe/create');
});

recipesController.post('/create', async (req, res) => {
    const recipeData = req.body;

    try{
        await recipeService.create(recipeData);

        // TODO: redirect to recipes page
        res.redirect('/');
    }catch(err){
        const error = getErrorMessage(err);
        console.log(error);
        
        res.render('recipe/create', { error });
    }
});

export default recipesController;