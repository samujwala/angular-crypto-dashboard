import { Component, OnInit } from '@angular/core';
import { CryptoCurrencyService } from '../crypto-currency.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-crypto',
  templateUrl: './add-new-crypto.component.html',
  styleUrls: ['./add-new-crypto.component.css']
})
export class AddNewCryptoComponent implements OnInit {

  showContent:boolean = false
  submitted = false;
  cryptoCurrencyAddForm: FormGroup;

  constructor(private cryptocurrencyService: CryptoCurrencyService,private fb:FormBuilder) { }

  ngOnInit() {
    this.cryptoCurrencyAddForm = this.fb.group({
      currencyName: ['', Validators.required],
      currencyValue: ['', Validators.required],
    });
  }
/*function call to add new item from the currency list*/
  addItem():void{
    this.cryptocurrencyService.addNewItem({
             name:this.cryptoCurrencyAddForm.value.currencyName,
             priceUsd:this.cryptoCurrencyAddForm.value.currencyValue
     });
  }
   // convenience getter for easy access to form fields
  get fc() { return this.cryptoCurrencyAddForm.controls; }

/*function call to check the validations on save and submit*/
  onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.cryptoCurrencyAddForm.invalid) {
            return;
        }else{
         this.addItem();
        }
  }
  /*function call to clear to defaults*/
   onReset() {
        this.submitted = false;
        this.cryptoCurrencyAddForm.reset();
    }

}