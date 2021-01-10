import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  //providers: [LoggingService] // this provider is defined globally into the app.module.ts

})
export class DirectoryComponent implements OnInit {
  
  ninjas = [
    {name:"Yoshi", belt:"black"},
    {name:"Ryu", belt:"red"},
    {name:"Crystal", belt:"purple"}
  ];

  constructor(private logger: LoggingService) {}

  logIt(){
    this.logger.log();
  }

  ngOnInit(): void {
  }

}
