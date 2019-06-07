import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { SMS } from '@ionic-native/sms/ngx';
import { CognitoService } from '../cognito.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  public router: Router;
  constructor(public api: RestapiService, public alert: AlertController) {
    console.log(this.api.scheduledmessage);
  }

  showdetails(item) {
    this.details(item)
  }

  async details(item) {
    let withtext = '';
    let withemail = '';
    let withpush = '';
    item.text ? withtext = 'Text' : withtext
    item.email ? withemail = 'Email' : withemail
    item.push ? withpush = 'Push' : withpush
    const alert = await this.alert.create({
      header: `Message: ${item.message}`,
      subHeader: `Type: ${withtext} ${withemail} ${withpush}`,
      message: `Date: ${item.date}<br>Time: ${item.time}<br>Repeat: ${item.frequency}`,

    });

    await alert.present();
  }

  delete(item) {
    const index = this.api.scheduledmessage.indexOf(item);
    this.api.scheduledmessage.splice(index, 1);
  }

  async confirmdelete(item) {
    const alert = await this.alert.create({
      header: `Do you want to delete this event?`,
      subHeader: `${item.message}`,
      message: `Date: ${item.date}<br>Time: ${item.time}<br>Repeat: ${item.frequency}`,
      buttons: [{
        text: 'Cancel'
      }, {
        text: 'Confirm',
        handler: () => {
          this.delete(item);
        }
      }]
    });

    await alert.present();
  }


  ngOnInit() {
  }
}
