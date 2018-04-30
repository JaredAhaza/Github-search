import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  app:any[];
  repos:any[];
  username:string;

  constructor( private profileService : ProfileService) { 
     this.profileService.getAppInfo().subscribe(app => {
       console.log(app);
       this.app = app;
     });
     this.profileService.getAppRepos().subscribe(repos => {
       console.log(repos);
       this.repos = repos;
     })
  }

  findapp(){
    this.profileService.updateProfile(this.username)
     this.profileService.getAppInfo().subscribe(app => {
       console.log(app);
       this.app = app;
     });
     this.profileService.getAppRepos().subscribe(repos => {
       console.log(repos);
       this.repos = repos;
     })
  }

  ngOnInit() {
  }

}
