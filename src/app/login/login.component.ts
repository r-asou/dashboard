import {Component, OnInit} from '@angular/core';
import {UrlService} from "../shared/service/url.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private urlService: UrlService) {
  }

  ngOnInit() {
    this.urlService.get('hello').subscribe(response => {
      console.log(response)
    })
  }
}
