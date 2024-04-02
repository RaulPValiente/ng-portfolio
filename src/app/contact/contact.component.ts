import { Component } from '@angular/core';
import { Notyf } from 'notyf';

let notyf = new Notyf();

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  mail: string = "raulperezvaliente95@gmail.com";

  constructor() { }

  copyMail() {
    navigator.clipboard.writeText(this.mail)
     .then(() => {
        notyf.success('Copied to clipboard!');
      })
     .catch(err => {
        console.error('An error occurred. Please try copying the email manually: ', err);
        notyf.error('An error occurred. Please try copying the email manually');
      });
  }

}
