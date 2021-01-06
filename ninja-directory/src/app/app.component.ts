import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!,woop woop';
  name = 'ninja';
  ninja = { //pass this object from root component to home component
    name: "Ryu",
    belt: "Red"
  };
}
