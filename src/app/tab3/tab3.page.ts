import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { SMS } from '@ionic-native/sms/ngx';
import { CognitoService } from '../cognito.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  messageBuilder = {
    input: '',
    text: false,
    email: false,
    push: false,
    sendNow: false,
    sendLater: false,
    date: '',
    time: '',
    frequency: '',
    subject: ''
  }
  messageArray =[ 
    {
    input: '',
    Text: false,
    Email: false,
    Push: false,
    sendNow: true,
    sendLater: false,
    date: '',
    time: '',
    frequency: '',
    subject: ''
  }
]

  constructor(
    public alert: AlertController, public emailComposer: EmailComposer,

    public api: RestapiService, public sms: SMS, public cognito: CognitoService, public router: Router) { }
  ionChange(searchText) {
    console.log(searchText);
  }

  sendemail() {
    let email = {
      to: 'pnguyen1912@gmail.com',
      cc: '',
      bcc: [''],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };
    this.emailComposer.open(email);

  }



  async confirm() {
    const alert = await this.alert.create({
      header: 'Confirm!',
      message: 'Are you ready to schedule this?',
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
            this.now(event);
            const now = <HTMLInputElement>document.getElementById('selectnow');
            now.checked = true;
          }
        }
      ]
    });

    await alert.present();
  }
  async confirmsendnow() {
    const alert = await this.alert.create({
      header: 'Confirm!',
      message: `Are you ready to send it now!`,
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
            this.sendemail();
          }
        }
      ]
    });

    await alert.present();
  }

  showschedule(e) {
    const schedule = <HTMLInputElement>document.getElementById('schedule');
    const sendnow = <HTMLInputElement>document.getElementById('sendnow');
    schedule.style.display = 'block';
    sendnow.style.display = 'none';
    this.messageBuilder.sendLater = true;
    this.messageBuilder.sendNow = false;
      console.log(this.messageBuilder.text)
  }

  now(e): void {
    const schedule = <HTMLInputElement>document.getElementById('schedule');
    const sendnow = <HTMLInputElement>document.getElementById('sendnow');
    schedule.style.display = 'none';
    sendnow.style.display = 'block';
    if (e.currentTarget.checked === true) {
      this.messageBuilder.sendNow = true
      console.log(this.messageBuilder.sendNow)
    }
    else {
      console.log('false')
    }
  }

  text(e): void {
    if (e.currentTarget.checked === true) {
      this.messageBuilder.text = true
      console.log(this.messageBuilder.text)
    }
    else {
      console.log('false')
    }
}
  email(e): void {
  if (e.currentTarget.checked === true) {
    this.messageBuilder.email = true
    console.log(this.messageBuilder.email)
  }
  else {
    console.log('false')
  }
}
  push(e): void {
  if (e.currentTarget.checked === true) {
    this.messageBuilder.push = true
    console.log(this.messageBuilder.push)
  }
  else {
    console.log('false')
  }
}
  dateChange() {
    console.log(this.messageBuilder.date)
  }
  timeChange() {
    console.log(this.messageBuilder.time)
  }
  frequency() {
    console.log(this.messageBuilder)
  }
  messageChange() {
    console.log(this.messageBuilder.input)
  }
  subject() {
    console.log(this.messageBuilder.subject)
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
    this.sms.send('414-306-2025', 'hello');
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
