import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packageForm: FormGroup; 
  currencies: Array<String> = ['EUR', 'USD', 'GBP'];
  totalWeight: number;
  totalValue: number;
  totalPackages: number = 1;

constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.packageForm = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(32)]],
      weight: ['', [Validators.max(10), Validators.min(0)]],
      value: ['',[Validators.required]],
      currency: ['', [Validators.required]],
      packages: this.fb.array([
        this.addPackageGroup()
      ])
    })

    // initialize stream on packages
    const packageFormValueChanges$ = this.packageForm.controls['packages'].valueChanges;
    // subscribe to the stream so listen to changes on packages
    packageFormValueChanges$.subscribe(packages => this.updateTotalPackageWeight(packages));
  
  }

  updateTotalPackageWeight(packages){

     // get our packages controll
     const control = <FormArray>this.packageForm.controls['packages'];
     // before recount total price need to be reset. 
     this.totalWeight = 0;
     this.totalValue = 0;
     for (let i in packages) {
       const packageWeight = (packages[i].weight);
       const packageValue = (packages[i].value);
      //  this.totalWeight = (packages[i].qty*packages[i].weight);
       // update total Weight and total Vlaue of all packages
       this.totalWeight += packageWeight;
       this.totalValue += packageValue;
       console.log(this.totalWeight);
       console.log(this.totalValue);

     }

  }

  get packagesArray(): FormArray {
    return this.packageForm.get('packages') as FormArray
  }
  
  addPackageGroup() {
    return this.fb.group({ 
      name: ['', [Validators.required, Validators.maxLength(32)]],
      weight: ['', [Validators.required, Validators.max(10), Validators.min(0)]],
      value: ['', [Validators.required]],
      currency: ['', [Validators.required]]
    })
  }
  
  addPackage(){
    console.log({...this.packageForm.value});
    if (this.packagesArray.length === 5){
      console.log(" you have reached the maximum");
      return false;
    }else{
        this.packagesArray.push(this.addPackageGroup());
        this.totalPackages = this.packagesArray.length;
      }
  }
  
  deletePackage(i) {
    this.packagesArray.removeAt(i)
  }

  submitHandler() {
    if (this.packageForm.valid) {
      console.log({...this.packageForm.value});
    }
    console.log({...this.packageForm.value});
  }
}