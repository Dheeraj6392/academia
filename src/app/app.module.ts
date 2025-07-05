import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './Components/cards/cards.component';
import { CenterCardsComponent } from './Components/center-cards/center-cards.component';
import { PapersComponent } from './Components/papers/papers.component';
import { NotesDashboardComponent } from './Components/notes-dashboard/notes-dashboard.component';
import { PaperDashboardComponent } from './Components/paper-dashboard/paper-dashboard.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './Components/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardsComponent,
    CenterCardsComponent,
    PapersComponent,
    NotesDashboardComponent,
    PaperDashboardComponent,
    LayoutComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
     HttpClientModule
  ],


  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
