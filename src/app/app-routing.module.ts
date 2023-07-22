import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { FoodBeverageComponent } from './components/pages/food-beverage/food-beverage.component';
import { GroceriesComponent } from './components/pages/groceries/groceries.component';
import { PizzaHutComponent } from './components/pages/pizza-hut/pizza-hut.component';
import { BaskinrobinsComponent } from './components/pages/baskinrobins/baskinrobins.component';
import { LoopingdelightComponent } from './components/pages/loopingdelight/loopingdelight.component';
import { WholessaleoasisComponent } from './components/pages/wholessaleoasis/wholessaleoasis.component';
import { VirtalfestivityComponent } from './components/pages/virtalfestivity/virtalfestivity.component';
import { NourishmewellComponent } from './components/pages/nourishmewell/nourishmewell.component';
import { FashionComponent } from './components/pages/fashion/fashion.component';
import { HomekitchenComponent } from './components/pages/homekitchen/homekitchen.component';
import { BeautycareComponent } from './components/pages/beautycare/beautycare.component';

const routes: Routes = [
  { path: '', component: FoodBeverageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path:'food/:id', component:FoodPageComponent},
  { path: 'cart-page', component: CartPageComponent},
  { path: 'landing', component: LandingComponent},
  { path: 'foodbeverage', component: FoodBeverageComponent},
  { path: 'grocery', component: GroceriesComponent},
  { path: 'subway', component: PizzaHutComponent},
  { path: 'baskin', component: BaskinrobinsComponent},
  { path: 'loopingdelight', component: LoopingdelightComponent },
  { path: 'wholessaleoasis', component: WholessaleoasisComponent },
  { path: 'virtulfestivity', component: VirtalfestivityComponent},
  { path: 'nourishmewell', component: NourishmewellComponent},
  { path: 'fashion', component: FashionComponent},
  { path: 'homekitchen', component: HomekitchenComponent },
  { path: 'beautycare', component: BeautycareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
