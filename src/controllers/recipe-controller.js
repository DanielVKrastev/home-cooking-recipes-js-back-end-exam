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
    const owner = req.user.id;

    const data = {...recipeData, owner};
    try{
        await recipeService.create(data);

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

recipesController.get('/:recipeId/details', async(req, res) => {
    const recipeId = req.params.recipeId;
    const user = res.locals.user;    
    const recipe = await recipeService.getOne(recipeId);
    
    let isOwner = false;
    if(user.id == recipe.owner){
        isOwner = true;
    }
    console.log(isOwner);
    
    
    res.render('recipe/details', { recipe, user, isOwner });
});

export default recipesController;