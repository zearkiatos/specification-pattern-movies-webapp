import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesComponent } from './movies/movies.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { ArrayToStringPipe } from './pipe/array-to-string.pipe';
import { SkeletonLoaderCardComponent } from './skeleton-loader-card/skeleton-loader-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MessageComponent } from './message/message.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    MovieCardComponent,
    MoviesComponent,
    TruncatePipe,
    ArrayToStringPipe,
    SkeletonLoaderCardComponent,
    PaginationComponent,
    DropdownComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
