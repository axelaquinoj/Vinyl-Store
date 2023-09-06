import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/shared/models/users';
import { IUserLogin } from 'src/shared/interfaces/IuserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from 'src/shared/constants/urls';
import { tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private userSubject = new BehaviorSubject<User>(new User());
public userObservable:Observable<User>;
  constructor(private http:HttpClient,private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
   }
   login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
      tap ({
        next:(user)=>{
          this.userSubject.next(user);
          this.toastrService.success(
            'Welcome to Vinyl Shop ${user.name}!',
            'Login Successful'
          )
        },
        error: (errorResponse)=>{
this.toastrService.error(errorResponse.error,'Login Failed')
        }
        
      })
    );
   }
}
