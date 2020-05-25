import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { AddNewCryptoComponent } from './add-new-crypto/add-new-crypto.component';
import { CryptoCurrencyListComponent } from './crypto-currency-list/crypto-currency-list.component';
import { ContainerHeightDirective } from './crypto-currency-list/container-height.directive';

const appRoutes:Routes=[
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard',component:DashboardComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent,DashboardComponent, AddNewCryptoComponent, CryptoCurrencyListComponent, ContainerHeightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
