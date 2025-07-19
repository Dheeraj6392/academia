import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { CardsComponent } from './Components/cards/cards.component';
import { PapersComponent } from './Components/papers/papers.component';
import { CenterCardsComponent } from './Components/center-cards/center-cards.component';
import { NotesDashboardComponent } from './Components/notes-dashboard/notes-dashboard.component';
import { PaperDashboardComponent } from './Components/paper-dashboard/paper-dashboard.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { UploadPapersComponent } from './Components/upload-papers/upload-papers.component';
import { TestComponent } from './Components/test/test.component';
import { CoursesComponent } from './Components/courses/courses.component';

const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
  },
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: 'center-cards',
    component: CenterCardsComponent,
  },
  {
    path: 'papers',
    component: PapersComponent,
  },
  {
    path: 'upload_papers',
    component: UploadPapersComponent,
  },
  {
    path: 'notes_dashboard',
    component: NotesDashboardComponent,
  },
  {
    path: 'papers_dashboard',
    component: PaperDashboardComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },

  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
