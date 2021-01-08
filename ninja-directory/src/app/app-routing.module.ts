import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";

//const routes: Routes = [];

//set up the routes
const routes: Routes = [
  //{path: 'directory/:ninja' , component: DirectoryComponent},
  {path: 'directory' , component: DirectoryComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

