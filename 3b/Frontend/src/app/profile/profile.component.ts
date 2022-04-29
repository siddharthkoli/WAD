import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: String;
  name: String;
  phone: String;
  address: String;

  constructor(private router: Router) {
    // console.log(this.router.getCurrentNavigation().extras.state.email);
    this.email = this.router.getCurrentNavigation().extras.state.email;
   }

  ngOnInit(): void {
    fetch("http://localhost:3000/users/find", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.email
      })
    }).then(response => response.json())
    .then((res) => {
      const user = res.user;
      this.name = user.name;
      this.phone = user.phone
      this.address = user.address;
    }).catch(err => {
      console.log(err);
    })
  }

}
