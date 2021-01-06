import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the ninja directory";//data we can pass to the view {{string interpolation}}
  
  @Input () ninja: any;//tell to the component that we are going to receive incoming info from anbother component using the @Input decorator -- the data will be output to the home view(html)
  constructor() { }

  ngOnInit(): void {
  }

}
