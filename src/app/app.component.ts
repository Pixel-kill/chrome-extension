import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
type Estado = "success" | "error" | 'Restart';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
    let plaintextData = CryptoJS.AES.decrypt(this.form.get('value')?.value,this.secretKey);
    let plaintext = plaintextData.toString(CryptoJS.enc.Utf8);
    try {
      let result = JSON.parse(plaintext)
      this.form.reset();
      this.someObject = result      
      this.status = 'success'      
    } catch (error) {
      this.form.reset();
      this.someObject = plaintext
      this.status = 'error'
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(JSON.stringify(this.someObject))
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
