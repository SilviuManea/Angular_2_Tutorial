import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
//import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  //pipes : [FilterPipe] 
})
export class DirectoryComponent implements OnInit {
  //term = ""
  ninjas = [
    {name:"Yoshi", belt:"black"},
    {name:"Ryu", belt:"red"},
    {name:"Crystal", belt:"purple"}
  ];

  constructor() {

   }

  ngOnInit(): void {
  }

}
