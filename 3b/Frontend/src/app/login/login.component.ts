import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(private router: Router) {
    this.email = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

  login: Function = () => {
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password
      })
    }).then(response => {
      //console.log("response post: ", response);
      response.json();
      if (response.status == 200)
        this.router.navigateByUrl('/profile', { state: { email: this.email } });
    }).catch((err) => {
      console.log(err);
    });
  }

}
