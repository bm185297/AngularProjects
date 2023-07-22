import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  img_name = 'assets/food_bev.jpg';
  active_domain = 1;
  constructor(private router: Router) {}
  onDomainSelClick(id: any) {
    if(id === 1){
      this.active_domain = 1;
    this.router.navigateByUrl('/foodbeverage');
    } else if(id === 2) {
      this.active_domain = 2;
      this.router.navigateByUrl('/grocery');
    } else if(id === 3) {
      this.active_domain = 3;
      this.router.navigateByUrl('/fashion');
    } else if(id === 4) {
      this.active_domain = 4;
      this.router.navigateByUrl('/homekitchen');
    } else if(id === 5) {
      this.active_domain = 5;
      this.router.navigateByUrl('/beautycare');
    }
  }

  onDomainClick(domainId: number) {
    if (domainId === 1) {
      this.img_name = 'assets/food_bev.jpg';
      this.active_domain = 1;
    } else if (domainId === 2) {
      this.img_name = 'assets/grocery.jpg';
      this.active_domain = 2;
    } else if (domainId === 3) {
      this.img_name = 'assets/fashion.jpg';
      this.active_domain = 3;
    } else if (domainId === 4) {
      this.img_name = 'assets/home-kitchen.jpg';
      this.active_domain = 4;
    } else if (domainId === 5) {
      this.img_name = 'assets/beauty-care.jpg';
      this.active_domain = 5;
    } else {
      this.img_name = 'assets/food_bev.jpg';
      this.active_domain = 1;
    }
  }
}
