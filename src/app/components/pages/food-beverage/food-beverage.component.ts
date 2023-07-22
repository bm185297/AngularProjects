import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-beverage',
  templateUrl: './food-beverage.component.html',
  styleUrls: ['./food-beverage.component.css']
})
export class FoodBeverageComponent implements OnInit {
  active_domain = 1;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFoodItemsSel(id: any) {
    if (id === 1) {
      this.router.navigateByUrl('/baskin');
    } else if (id === 2) {
      this.router.navigateByUrl('/subway');
    }
   
  }

  onOptionClick(id: any){
    this.active_domain = id;
    if (id === 1) {
      this.router.navigateByUrl('/loopingdelight');
    } else if(id=== 2){
      this.router.navigateByUrl('/home');
    } else if(id=== 3){
      this.router.navigateByUrl('/wholessaleoasis');
    } else if(id=== 4){
      this.router.navigateByUrl('/virtulfestivity');
    } else if(id=== 5){
      this.router.navigateByUrl('/nourishmewell');
    }
    
  }

}
