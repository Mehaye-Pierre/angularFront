import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }
  search(req: string) {
    this.router.navigateByUrl('/search-result/' + req);
    window.location.reload();
  }
}
