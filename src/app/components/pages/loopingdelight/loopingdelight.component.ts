import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-loopingdelight',
  templateUrl: './loopingdelight.component.html',
  styleUrls: ['./loopingdelight.component.css']
})
export class LoopingdelightComponent implements OnInit {

  isEveryday: boolean = true;
  cart!: Cart;
  hours = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  minutes = ['15','30','45','00'];
  clockType = ['AM', 'PM'];
  lastDate = '';
  selHour = '';
  selMins = '';
  selCType = '';
  selDays = '';
  valResult = '';
  // isMonday = false;
  // isTuesday = false;
  // isWednesday = false;
  // isThursday = false;
  // isFriday = false;
  // is
  constructor(private cartService: CartService, private router: Router) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

  onChange(e: any) {
    this.isEveryday = e.target.value === "Everyday" ? true : false;
  }

  onDayChnage(day: string) {
    this.selDays = this.selDays + day + ',';
    //this.selDays = this.selDays.slice(0, -1);
    // const count = this.selDays.split(',').length;
    // if (count === 8) {
    //   this.isEveryday = true;
    // }
  }

  onValidate() {
    this.valResult = '';
    this.selDays = this.selDays.slice(0, -1);
    const days = this.selDays.split(',');
    let daysselction = '';
    for(let i = 1; i <= days.length ; i++) {
      if( i === days.length) {
        if(daysselction.length > 0) {
          daysselction = daysselction.slice(0, -1);
          daysselction = daysselction + ' and ' + days[i-1];
        } else {
        daysselction = daysselction + days[i-1];
        }
      } else {
        daysselction = daysselction + days[i-1] + ',';
      }
    }
    this.valResult = `Your order will be repeated on every ${daysselction} at ${this.selHour}:${this.selMins} ${this.selCType} till ${this.lastDate}.`;
  }

}
