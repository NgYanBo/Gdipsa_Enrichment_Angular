import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from "./components/character-list/character-list.component";
import { CharacterComponent } from "./components/character/character.component";
import { CategoriesComponent } from './components/categories/categories.component';

const ROUTES: Routes = [
    { path: "", component: CategoriesComponent },
    { path: "people", component: CharacterListComponent },
    { path: "people/:id", component: CharacterComponent },
    { path: "**", redirectTo: "/", pathMatch: 'full' }
]

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRouteModule { }