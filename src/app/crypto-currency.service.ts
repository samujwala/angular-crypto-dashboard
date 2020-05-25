import {Injectable} from '@angular/core';
import {Observable,of} from 'rxjs';
import { ICryptoCurrency } from './crypto-currency';
import {cryptocurrencyList } from './mock-json';

@Injectable({ providedIn: 'root' })
export class CryptoCurrencyService{

/*function will return all the currency list*/
  getList():Observable<ICryptoCurrency[]> {
    return of(cryptocurrencyList);
  }

/*function will remove item from currency list*/
  removeItem(name:string):void {
   for(let obj=0;obj<cryptocurrencyList.length;obj++){
     if(cryptocurrencyList[obj].name == name){
       cryptocurrencyList.splice(obj,1);
     }
   }
  }
  /*function will add new item to the currency list*/
  addNewItem(item:ICryptoCurrency): void{
    cryptocurrencyList.push(item);
  }
}
