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

  private selectedItem: any;
  private icons = [
    'wifi', 'wifi', 'wifi', 'wifi', 'wifi',
  ];
  public router: Router;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 0; i < this.icons.length; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[i]
      });
    }
  }

  ngOnInit() {
  }
}
