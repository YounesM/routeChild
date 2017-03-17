import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './user/details/details.component';
import {Routes, RouterModule} from "@angular/router";

const userComponents : Routes = [
  { path : '', component : UserComponent},
  { path : 'details', component : DetailsComponent}
];

const routes : Routes = [
  { path: 'user/:user', component: ParentComponent, children : userComponents}
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    UserComponent,
    DetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
