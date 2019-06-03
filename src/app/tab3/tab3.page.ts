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

  textinput: string = " You receive this message because you signed up to Tier 1, rely STOPTIER1 to stop receiving message";

  send() {
    let userInput = <HTMLInputElement>document.getElementById('userInput');
    let newinput = userInput.value + this.textinput;
    console.log(newinput);
    userInput.value = '';
    newinput = this.textinput
    // this.api.getData();
  }


  get() {
    this.api.getData();
    console.log(this.api.phonenumbers);
  }

  text() {
    for (let i = 0; i < this.api.phonenumbers.length; i++) {
      this.sms.send(this.api.phonenumbers[i], this.textinput);
    }
  }




}
