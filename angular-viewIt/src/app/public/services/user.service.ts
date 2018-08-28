import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from '../../common/services/http.service';
import {User} from '../../models/user';
import {Order} from '../../models/order';
import {OrderDetail} from '../../models/orderDetail';
import {assertNotNull} from '@angular/compiler/src/output/output_ast';
import {isNull} from 'util';

@Injectable()
export class UserService extends HttpService {
  private url = this.apiServicesURL;
  private currentUser: User;

  constructor(public http: HttpClient) {super(http); }

  registerUser(user: User): Observable<User> {
    return this.post(`${this.url}/user/register`, user);
  }

  loginUser(user: User): Observable<User> {
    // let respondedUser: User;
    // this.post(`${this.url}/user/login`, user).subscribe(
    //   (data: User) => {
    //     respondedUser = data;
    //     if (data === null) {
    //       console.log('Login failed');
    //       return respondedUser;
    //     } else {
    //       console.log('Logged in with user: ' + data.userId);
    //       return respondedUser;
    //     }},
    //   error => {
    //     console.error(error);
    //   },
    //   () => {
    //     console.log('Finished login in!');
    //   }
    // );
    //
    // return respondedUser;
    return this.post(`${this.url}/user/login`, user);
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  userLoggedIn(): boolean {
    if (this.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentOrder(): Observable<Array<OrderDetail>> {
    return this.get(`${this.url}/user/order/list`);
  }

  purchaseCurrentOrder(): void {
    this.get(`${this.url}/user/order/purchase`);
  }

  logout(): void {
    this.get(`${this.url}/user/logout`);
  }

}
