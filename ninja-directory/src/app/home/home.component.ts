import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //providers:[LoggingService] // this provider is defined globally into the app.module.ts
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the ninja directory";//data we can pass to the view {{string interpolation}}
  
  constructor(private logger: LoggingService) {}

  logIt(){
    this.logger.log();
  }
  
  ngOnInit(): void {
  }

}
