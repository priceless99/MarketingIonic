import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { SMS } from '@ionic-native/sms/ngx';
import { CognitoService } from '../cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

constructor(public api:RestapiService,public sms:SMS, public cognito:CognitoService, public router:Router){}

textinput:string = " You receive this message because you signed up to Tier 1, rely STOPTIER1 to stop receiving message";

send(){
let userInput = <HTMLInputElement> document.getElementById('userInput');
this.textinput = userInput.value +this.textinput;
console.log(this.textinput)

// this.api.getData();
}


get(){
  this.api.getData();
  console.log(this.api.phonenumbers)
}

text(){
  for (let i=0;i<this.api.phonenumbers.length; i++){
    this.sms.send(this.api.phonenumbers[i],this.textinput)
  }
}


logout(){
  this.router.navigate(['/login']);
  this.cognito.getAuthenticatedUser().signOut();
}

}
