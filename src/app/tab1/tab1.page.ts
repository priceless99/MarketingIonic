import { Component } from '@angular/core';
import { CognitoService } from '../cognito.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public cognito: CognitoService) { }

  logout() {
    this.router.navigate(['/login']);
    this.cognito.getAuthenticatedUser().signOut();
  }

}
