import { Component } from '@angular/core';
import { CognitoService } from '../cognito.service';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public cognito: CognitoService, public api: RestapiService) { }
  phoneicon = 'arrow-dropright';
  emailicon = 'arrow-dropright';
  showphonelist() {
    const phonelist = document.getElementById('phonelist');
    if (phonelist.style.display === 'none') {
      phonelist.style.display = 'block';
      this.phoneicon = 'arrow-dropdown';
    } else {
      phonelist.style.display = 'none';
      this.phoneicon = 'arrow-dropright';
    }
  }
  showemaillist() {
    const emaillist = document.getElementById('emaillist');
    if (emaillist.style.display === 'none') {
      emaillist.style.display = 'block';
      this.emailicon = 'arrow-dropdown';
    } else {
      emaillist.style.display = 'none';
      this.emailicon = 'arrow-dropright';
    }
  }

  logout() {
    this.cognito.getAuthenticatedUser().signOut();
    this.router.navigate(['/login']);
  }


  ngOnInit() {
    // this.api.getData()
  }

}
