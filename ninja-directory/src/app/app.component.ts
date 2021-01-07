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

  yell(e: any){ //this yell function is going to fire when the event onYell from the view occurs
    alert("I am Yelling");
    console.log(e);//logs the event to the console
  }

}
