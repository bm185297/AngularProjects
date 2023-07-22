import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';


@Component({
  selector: 'app-pizza-hut',
  templateUrl: './pizza-hut.component.html',
  styleUrls: ['./pizza-hut.component.css']
})
export class PizzaHutComponent implements OnInit {

  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
        this.foods = foodService.getAllSubwayItems();
    })

  }

  ngOnInit(): void {
  }
  

}
