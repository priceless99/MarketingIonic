import { Injectable } from '@angular/core';
import { CognitoService } from './cognito.service';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(public cognitoService:CognitoService,public http:HttpClient) { }

  public _data:any;
 public phonenumbers = [];

  getData(){
    let myUser = this.cognitoService.getAuthenticatedUser();
    if (myUser === null) {
      console.log("user is null");
      return;
    }
    
    myUser.getSession((err, session) => {
      if(err) {
        console.log("get error: ", err);
        return;
      }
      console.log('get session: ', session);
      
      const token = session['idToken']['jwtToken']; // session.getIdToken().getJwtToken();
      console.info('get token: ', token);

      // let myHeaders = new HttpHeaders({
      //  "Content-Type": "application/json",
      //  "Authorization": token
      //});

      //console.log('post headers', myHeaders);
      let postmoreData = {
        'Email': myUser.getUsername(),
      }
      
    // https://499adbe4a1.execute-api.us-east-2.amazonaws.com/dev/postToTable
      this.http.post('https://ceo7e027k2.execute-api.us-east-2.amazonaws.com/newtestStage/Realgetdata',JSON.stringify(postmoreData))
      .subscribe( response => {
        console.log(response)
        this._data = response;
        console.log("get success: ", this._data);
        for (let i=0;i<this._data.Item.Phonenumbers.SS.length;i++){
          this.phonenumbers[i] = this._data.Item.Phonenumbers.SS[i]
        }

      }, err => {
        console.log("get error: ", err);
      });

    })
  }




  postData() {
    let myUser = this.cognitoService.getAuthenticatedUser();
    if (myUser === null) {
      console.log("user is null");
      return;
    }
    myUser.getSession((err, session) => {
      if(err) {
        console.log("post error: ", err);
        return;
      }
      console.log('post session: ', session);
      
      const token = session['idToken']['jwtToken']; // session.getIdToken().getJwtToken();
      console.info('post token: ', token);

      let myHeaders = new HttpHeaders({
       "Content-Type": "application/json",
       "Authorization": token
      });

      //console.log('post headers', myHeaders);

      let postData = {
        'Email': myUser.getUsername(),

      }
      console.log("postdata: ", postData);
    // https://499adbe4a1.execute-api.us-east-2.amazonaws.com/dev/postToTable
      this.http.post('https://ceo7e027k2.execute-api.us-east-2.amazonaws.com/newtestStage/petfood', JSON.stringify(postData),
      {headers : myHeaders})
      .subscribe( response => {
        console.log("post success: ", response);
      }, err => {
        console.log("post error: ", err);
      });
      
    });

  }


}
