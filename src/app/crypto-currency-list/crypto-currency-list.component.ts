import { Component, OnInit,HostListener  } from '@angular/core';
import { ICryptoCurrency } from '../crypto-currency';
import { CryptoCurrencyService } from '../crypto-currency.service';

@Component({
  selector: 'app-crypto-currency-list',
  templateUrl: './crypto-currency-list.component.html',
  styleUrls: ['./crypto-currency-list.component.css']
})
export class CryptoCurrencyListComponent implements OnInit {
  
  cryptoCurrencyList: ICryptoCurrency[] = [];
  containerHeight:string;

  constructor(private cryptocurrencyService: CryptoCurrencyService) { }

  ngOnInit() {
    this.getcryptoList();
    this.setContainerHeight();
  }
  /*function call to return all the currency list*/
  getcryptoList(): void {
    this.cryptocurrencyService.getList()
      .subscribe(cur => this.cryptoCurrencyList = cur);
  }
/*function call to remove item from the currency list*/
  removeItem(name):void{
   this.cryptocurrencyService.removeItem(name);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setContainerHeight();
  }
  /*function will calculate the height for container by subt accordian height */
   setContainerHeight():void{
    this.containerHeight = window.innerHeight-150+'px'
   }
}