import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Views/sidebar/sidebar.component';
import { ProjectComponent } from './component/project/project.component';
import { PagenavigationComponent } from './Views/pagenavigation/pagenavigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProjectComponent,
    PagenavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
