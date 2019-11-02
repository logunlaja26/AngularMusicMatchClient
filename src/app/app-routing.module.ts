import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './songs/songs.component'
import { SearchComponent } from './search/search.component'


const routes: Routes = [
{ path: '', component: SearchComponent},
  { path: 'search', component: SearchComponent},
  { path: 'songs', component: SongsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
