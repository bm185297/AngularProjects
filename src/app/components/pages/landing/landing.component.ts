import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  img_name = 'assets/food_bev.jpg';
  active_domain = 1;
  constructor(private router: Router) {}

  ngOnInit(): void {}

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

  onDomainSelClick() {
    if(this.active_domain === 1){
    this.router.navigateByUrl('/foodbeverage');
    }
    else if(this.active_domain === 2) {
      this.router.navigateByUrl('/grocery');
    }
  }
}
