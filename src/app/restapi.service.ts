import { Injectable } from '@angular/core';
import { CognitoService } from './cognito.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(public cognitoService: CognitoService, public http: HttpClient) { }

  public _data: any;
  public phonenumbers = [
    '414-306-2025', '252-314-1214', '414-313-3131'
  ];
  public emails = [
    'abc@abc.com',
    'abc@abc.com',
    'abc@abc.com',
    'abc@abc.com'
  ];
  public scheduledmessage = [{
    message: 'Refer a friend',
    text: true,
    email: false,
    push: false,
    time: '15:00',
    date: '2020-10-10',
    frequency: 'Everyweek'
  }, {
    message: 'Lock in 8PM - 8AM',
    text: false,
    email: true,
    push: true,
    time: '15:00',
    date: '2020-10-10',
    frequency: 'One Time'
  }];
  

  public messageTest = {
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


 params = new  HttpParams().set('httpMethod', "GET").set('TableName', "testTable");



  getData() {
    let myUser = this.cognitoService.getAuthenticatedUser();
    if (myUser === null) {
      console.log('user is null');
      return;
    }

    myUser.getSession((err, session) => {
      if (err) {
        console.log('get error: ', err);
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
      this.http.post('https://ceo7e027k2.execute-api.us-east-2.amazonaws.com/newtestStage/Realgetdata', JSON.stringify(postmoreData))
        .subscribe(response => {
          console.log(response)
          this._data = response;
          console.log('get success: ', this._data);
          for (let i = 0; i < this._data.Item.Phonenumbers.SS.length; i++) {
            this.phonenumbers[i] = this._data.Item.Phonenumbers.SS[i]
          }

        }, err => {
          console.log('get error: ', err);
        });

    })
  }

 


  getTest(params) {

    let myHeaders = new HttpHeaders({
      "Content-Type": "application/json"
     });


    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params
  };


    this.http.get('https://i7pvoxtvci.execute-api.us-east-1.amazonaws.com/default/lambda-microservice',
    httpOptions)
     .subscribe( response => {
      console.log("get success: ", response);
    }, err => {
      console.log("get error: ", err);
    });
    console.log(httpOptions)
  }

  testPost() {

    console.log('button works')

     const httpOptions = {
      headers: { 'Content-Type': 'application/json' }
  };

   let Item = {
    
   'TableName' : "testTable",
   "Item" : { 
     "ID" : "185",
     "Name" : "gallardo",
     "Speed" : "fast"
      }
    }
  console.log("postdata: ", Item);
  this.http.post('https://i7pvoxtvci.execute-api.us-east-1.amazonaws.com/default/lambda-microservice', JSON.stringify(Item),
    httpOptions)
  .subscribe( response => {
    console.log("post success: ", response);
  }, err => {
    console.log("post error: ", err);
  });
  

}




//   testPost() {

//     console.log('button works')

//     let myHeaders = new HttpHeaders({
//       "Content-Type": "application/json",
//      });


//    let item = {

//    'BusinessId' : 11,
//    'customers': "badbunny@CC",
//    'messages' : this.messageTest,
//     }
//   console.log("postdata: ", item);
// // https://499adbe4a1.execute-api.us-east-2.amazonaws.com/dev/postToTable
//   this.http.post('https://s4i85hc772.execute-api.us-east-1.amazonaws.com/default/Tier1MarketingPOST', JSON.stringify(item),
//   {headers : myHeaders}
//   )
//   .subscribe( response => {
//     console.log("post success: ", response);
//   }, err => {
//     console.log("post error: ", err);
//   });
  

// }




  postData() {
    let myUser = this.cognitoService.getAuthenticatedUser();
    if (myUser === null) {
      console.log('user is null');
      return;
    }
    myUser.getSession((err, session) => {
      if (err) {
        console.log('post error: ', err);
        return;
      }
      console.log('post session: ', session);

      const token = session['idToken']['jwtToken']; // session.getIdToken().getJwtToken();
      console.info('post token: ', token);

      let myHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      });

      //console.log('post headers', myHeaders);

      let postData = {
        'Email': myUser.getUsername(),

      }
      console.log('postdata: ', postData);
      // https://499adbe4a1.execute-api.us-east-2.amazonaws.com/dev/postToTable
      this.http.post('https://ceo7e027k2.execute-api.us-east-2.amazonaws.com/newtestStage/petfood', JSON.stringify(postData),
        { headers: myHeaders })
        .subscribe(response => {
          console.log('post success: ', response);
        }, err => {
          console.log('post error: ', err);
        });

    });

  }


}
