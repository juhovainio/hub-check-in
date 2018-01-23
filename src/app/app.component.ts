import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private userService: UserService,
    private http: HttpClient,
  ) { }

  member = {};

    loadUser() {
      this.userService.getUser("a5082f9def4161eca9d195e017093ac4").subscribe(data => this.member = data);
    }

    signIn(){
      console.log('You have been signed in. Welcome!');
  
      // $http.post(api + memberid + '/work_sessions', config).then(successCallback, errorCallback);
  
    };
    
    signOut(){
      console.log('You have been signed out. See you later!');
  
      // DELETE https://hubturku.cobot.me/api/memberships/:membership_id/check_ins/current
    };

}
