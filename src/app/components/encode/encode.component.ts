import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
type Estado = "success" | "error" | 'Restart';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.scss']
})
export class EncodeComponent {
  secretKey = "F5NMIGrCoz28";
  form : FormGroup;
  status: Estado = 'Restart';
  someObject: any;
  isCopied: boolean = false;

  constructor(    
    private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group({
      value: ['',[Validators.required]]
    })
  }

  submitForm() {
    const value = this.form.get('value')?.value;
    let plaintextData = CryptoJS.AES.encrypt(JSON.stringify(value), this.secretKey).toString();
    console.log(plaintextData);
    try {
      this.form.reset();
      this.someObject = plaintextData      
      this.status = 'success'      
    } catch (error) {
      this.form.reset();
      this.someObject = plaintextData
      this.status = 'error'
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.someObject)
      .then(() => {
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false
        }, 800);
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles: ' + err);
      });
  }
}