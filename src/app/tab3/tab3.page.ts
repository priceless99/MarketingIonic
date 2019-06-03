import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { SMS } from '@ionic-native/sms/ngx';
import { CognitoService } from '../cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public api: RestapiService, public sms: SMS, public cognito: CognitoService, public router: Router) { }

  senddata: string;

  send() {
    const userInput = <HTMLInputElement>document.getElementById('userInput');
    const textbox = <HTMLInputElement>document.getElementById('textbox');
    const emailbox = <HTMLInputElement>document.getElementById('emailbox');
    const pushbox = <HTMLInputElement>document.getElementById('pushbox');
    if (textbox.checked === true) {
      console.log('send text');
    }
    if (emailbox.checked === true) {
      console.log('send email');
    }
    if (pushbox.checked === true) {
      console.log('send push');
    }
    console.log(userInput.value);
    this.senddata = userInput.value;
    console.log(this.senddata);
    // this.api.getData();
  }



  get() {
    this.api.getData();
    console.log(this.api.phonenumbers);
  }

  text() {
    for (let i = 0; i < this.api.phonenumbers.length; i++) {
      this.sms.send(this.api.phonenumbers[i], this.senddata);
    }
  }




}
