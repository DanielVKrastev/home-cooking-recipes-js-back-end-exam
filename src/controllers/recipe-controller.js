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
    
    // Check the user is Owner
    const userId = user.id;
    let isOwner = false;
    if(userId == recipe.owner){
        isOwner = true;
    }
    
    // Check the user if is recommened
    const recommendedUser = await recipeService.checkRecommend(recipeId, userId);

    // Count recommends
    const recommendCount = recipe.recommend.length;
    
    res.render('recipe/details', { recipe, user, isOwner, recommendedUser, recommendCount });
});

recipesController.get('/:recipeId/recommend', async (req, res) => {
    const recipeId = req.params.recipeId;
    const userId = req.user.id;

    await recipeService.recommendToRecipe(recipeId, userId);

    res.redirect(`/recipe/${recipeId}/details`);
    
});

export default recipesController;