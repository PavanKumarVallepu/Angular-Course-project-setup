import { Component } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
      new Recipe('a Test Recipe','a test recipe','https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-02-Air-Fryer-Roasted-Potatoes%2FIMG_6850')
    ]
}
