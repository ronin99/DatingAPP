import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The  Dating App';
  users:any;


  //this is to make http request
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get("https://localhost:7153/api/Users").subscribe(response => {
      this.users = response;
    },error =>{
      console.log(error);
    });
  }
  // getUsers() {
  //   this.http.get('https://localhost:7153/api/users').subscribe({
  //     next: response => this.users = response,
  //     error: error => console.log(error)
  //   })
  // }
}
