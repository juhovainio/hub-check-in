import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor (
    private http: HttpClient
  ) {}

  private config = {
      headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 517b4315f239f2f216d09c201b42323c4e08dea5e04d23f18a3fa811693bd2f3'
      }
  }

  getToken(){
    this.http.get('https://www.cobot.me/oauth/access_token', {})
    // client_id=36348b12403a0f0186751caa6328bd67&client_secret=887e2e459d53d098690161b52ab8ddc456eb29b8f22784eb8ba0b53ee75be45a&grant_type=authorization_code&code=<the code from the previous step>
  }

  getUser(id) {
    return this.http.get('https://hubturku.cobot.me/api/memberships/'+ id, this.config)
    .map((res:Response) => res.json());
  }

}