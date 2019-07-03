import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { TechnologystackComponent } from './technologystack/technologystack.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogComponent} from "./blog/blog.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'About-Me', component: AboutmeComponent},
  {path: 'Milestones', component: MilestonesComponent},
  {path: 'Technology-Stack', component: TechnologystackComponent},
  {path: 'Resume', component: DocumentsComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Admin-Panel', component: AdminComponent},
  {path: 'Projects', component: ProjectsComponent},
  {path: 'Contact-Me', component: ContactFormComponent},
  {path: 'Upcoming-Projects', component: UpcomingComponent},
  {path: 'Social-Media', component: SocialmediaComponent},
  {path: 'Blog', component: BlogComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
