import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  email: String;
  mobile: String;
  password: String;
  address: String;


  constructor(private router: Router) {
    this.name = "";
    this.email = "";
    this.mobile = "";
    this.password = "";
    this.address = "";
  }

  register: Function = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        password: this.password,
        address: this.address,
      })
    }).then(response => {
      //console.log("response post: ", response);
      response.json();
      this.router.navigateByUrl('/login');
    }).catch((err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
