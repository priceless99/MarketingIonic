import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { SMS } from '@ionic-native/sms/ngx';
import { CognitoService } from '../cognito.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(
    public alert: AlertController,
    public api: RestapiService, public sms: SMS, public cognito: CognitoService, public router: Router) { }


  async confirm() {
    const alert = await this.alert.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.send();
          }
        }
      ]
    });

    await alert.present();
  }
  async confirmsendnow() {
    const alert = await this.alert.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.sendnow();
          }
        }
      ]
    });

    await alert.present();
  }

  showschedule() {
    const schedule = <HTMLInputElement>document.getElementById('schedule');
    const sendnow = <HTMLInputElement>document.getElementById('sendnow');
    schedule.style.display = 'block';
    sendnow.style.display = 'none';
  }

  now() {
    const schedule = <HTMLInputElement>document.getElementById('schedule');
    const sendnow = <HTMLInputElement>document.getElementById('sendnow');
    schedule.style.display = 'none';
    sendnow.style.display = 'block';
  }

  sendnow() {
    const userInput = <HTMLInputElement>document.getElementById('userInput');
    const textbox = <HTMLInputElement>document.getElementById('textbox');
    const emailbox = <HTMLInputElement>document.getElementById('emailbox');
    const pushbox = <HTMLInputElement>document.getElementById('pushbox');
    if (userInput.value === '') {
      alert('Must fill message');
      return false;
    }
    if (textbox.checked === false && emailbox.checked === false && pushbox.checked === false) {
      alert('Must send to something');
      return false;
    }

    console.log(userInput.value, textbox.checked, emailbox.checked, pushbox.checked);

    userInput.value = '';
    textbox.checked = false;
    emailbox.checked = false;
    pushbox.checked = false;

  }

  send() {
    const userInput = <HTMLInputElement>document.getElementById('userInput');
    const textbox = <HTMLInputElement>document.getElementById('textbox');
    const emailbox = <HTMLInputElement>document.getElementById('emailbox');
    const pushbox = <HTMLInputElement>document.getElementById('pushbox');
    const timeinput = <HTMLInputElement>document.getElementById('timeinput');
    const dateinput = <HTMLInputElement>document.getElementById('dateinput');
    const freinput = <HTMLInputElement>document.getElementById('freinput');
    if (userInput.value === '') {
      alert('Must fill message');
      return false;
    }
    if (textbox.checked === false && emailbox.checked === false && pushbox.checked === false) {
      alert('Must send to something');
      return false;
    }

    console.log(userInput.value);
    if (textbox.checked === true) {
      console.log('send text');
    }
    if (emailbox.checked === true) {
      console.log('send email');
    }
    if (pushbox.checked === true) {
      console.log('send push');
    }
    console.log(timeinput.value);
    console.log(dateinput.value);
    console.log(freinput.value);

    this.api.scheduledmessage.push({
      message: userInput.value,
      text: textbox.checked,
      email: emailbox.checked,
      push: pushbox.checked,
      time: timeinput.value,
      date: dateinput.value,
      frequency: freinput.value
    });

    console.log(this.api.scheduledmessage);

    userInput.value = '';
    textbox.checked = false;
    emailbox.checked = false;
    pushbox.checked = false;
    timeinput.value = '2019-07-02';
    dateinput.value = '14:00';
    freinput.value = undefined;


    // this.api.getData();
  }


}
