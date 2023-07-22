import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LandingComponent,
    FoodBeverageComponent,
    GroceriesComponent,
    PizzaHutComponent,
    BaskinrobinsComponent,
    LoopingdelightComponent,
    WholessaleoasisComponent,
    VirtalfestivityComponent,
    NourishmewellComponent,
    FashionComponent,
    HomekitchenComponent,
    BeautycareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
