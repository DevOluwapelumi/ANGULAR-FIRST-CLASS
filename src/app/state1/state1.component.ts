import { Component } from '@angular/core';
import { StateService } from '../services/state.service';
interface FoodInterface{
  name: string,
  price: number,
  quantity: number,
  category: string,
  availability:string
}

@Component({
  selector: 'app-state1',
  templateUrl: './state1.component.html',
  styleUrls: ['./state1.component.css']
})
export class State1Component {
  constructor(public itemService:StateService){}
  public foodItems:FoodInterface[] = [
    {
      name: 'Rice',
      price: 10000,
      quantity: 3,
      category: 'Foodstuff',
      availability:'Available'
    },
    {
      name: 'Yam',
      price: 1500,
      quantity: 13,
      category: 'Foodstuff',
      availability:'Available'
    },
    {
      name: 'Beans',
      price: 2500,
      quantity: 10,
      category: 'Foodstuff',
      availability:'Not Available'
    },
    {
      name: 'Apple',
      price: 5000,
      quantity: 30,
      category: 'Fruit',
      availability:'Available'
    },
  ]
  ngOnInit() {
    // console.log( this.itemService);
  }
  sendItem(item:FoodInterface) {
    this.itemService.subBehaviour.next(item)
    
  }
}
