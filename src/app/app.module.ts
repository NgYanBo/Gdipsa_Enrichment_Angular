import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { AppRouteModule } from './approute.module';
import { StarWarsService } from "./starwars.service";
import { MaterialModule} from "./material.module";
import { CategoriesComponent } from './components/categories/categories.component';
// import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmComponent } from './components/film/film.component'
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterListComponent,
    CategoriesComponent,
    // ComponentFilmListComponent,
    FilmListComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule, AppRouteModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'),
    AngularFireStorageModule
  ],
  providers: 
  [{provide: 'appKey', useValue: null }, StarWarsService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
