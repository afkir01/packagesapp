import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule,  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PackageslistComponent } from './components/packageslist/packageslist.component';
import { PackagedetailComponent } from './components/packagedetail/packagedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    PackagesComponent,
    PackageslistComponent,
    PackagedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
