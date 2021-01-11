import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  //providers: [LoggingService] // this provider is defined globally into the app.module.ts
  providers: [DataService]
})
export class DirectoryComponent implements OnInit {
  
  //ninjas =  [];
  bool = null;
  ninjas = [
    {name:"Yoshi", belt:"black"},
    {name:"Ryu", belt:"red"},
    {name:"Crystal", belt:"purple"}
  ];

  constructor(private logger: LoggingService,private dataService:DataService) {}

  logIt(){
    this.logger.log();
  }

  ngOnInit(): void {
    this.dataService.fetchData();
  }

}
