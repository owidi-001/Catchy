import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NavComponent } from './components/partials/nav/nav.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { CardComponent } from './components/partials/card/card.component';
import { ButtonComponent } from './components/partials/button/button.component';
import { RouterModule } from '@angular/router';

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

// services
import { NewsService } from './services/news.service';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailComponent,
    NavComponent,
    FooterComponent,
    CardComponent,
    ButtonComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot([  
      { path: '', component: NewsComponent },  
      { path: 'detail', component: NewsDetailComponent },
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
