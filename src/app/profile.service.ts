import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid:'09db63a0e6799932056e';
  private clientsecret:'4dbd8f92e7a939c1ac43a3f275635b6da7384203';
  constructor( private http:Http) {
    console.log("service is now ready!");
    this.username = 'JaredAhaza';
   }

   getAppInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     
     .map(res => res.json());
   }

   getAppRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     
    .map(res => res.json());

   }
   updateProfile(username:string){
     this.username = username;
   }
   
}
