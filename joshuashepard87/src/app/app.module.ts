import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { TechnologystackComponent } from './technologystack/technologystack.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { BlogComponent } from './blog/blog.component';
import { SpringpostComponent } from './blog/blog-posts/springpost/springpost.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutmeComponent,
    MilestonesComponent,
    TechnologystackComponent,
    DocumentsComponent,
    HomeComponent,
    NotfoundComponent,
    LoginComponent,
    AdminComponent,
    SubmitFormComponent,
    ProjectsComponent,
    ContactFormComponent,
    UpcomingComponent,
    SocialmediaComponent,
    BlogComponent,
    SpringpostComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
