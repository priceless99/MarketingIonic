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
  phoneicon = 'arrow-dropright';

  showphonelist() {
    let phonelist = document.getElementById('phonelist');
    if (phonelist.style.display === 'none') {
      phonelist.style.display = 'block';
      this.phoneicon = 'arrow-dropdown';
    } else {
      phonelist.style.display = 'none';
      this.phoneicon = 'arrow-dropright';
    }
  }

  logout() {
    this.router.navigate(['/login']);
    this.cognito.getAuthenticatedUser().signOut();
  }

}
