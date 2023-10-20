import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  state:any;
  user:any;

  userCredentials: any;
  data: any; 

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private api: ApiService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.state = this.router.getCurrentNavigation()?.extras.state
      this.user = this.state.user
      console.log(this.user);
    })
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.api.getPosts().subscribe((data: any) => {
      if (data && data.users) { 
        this.userCredentials = data.users;
      }
    });
  }
}
