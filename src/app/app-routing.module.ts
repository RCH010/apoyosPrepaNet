import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { EditTemaComponent } from './components/edit-tema/edit-tema.component';
import { HomeComponent } from './components/home/home.component';
import { TemaComponent } from './components/tema/tema.component';
import { AuthGuard } from './guards/auth.guard';

// TODO: check why using ID doesnt update correctly
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'tema/1', component: TemaComponent},
  {path: 'tema/2', component: TemaComponent},
  {path: 'tema/3', component: TemaComponent},
  {path: 'tema/4', component: TemaComponent},
  {path: 'login', component: AdminComponent},
  {path: 'admin/home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit-tema/1', component: EditTemaComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit-tema/2', component: EditTemaComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit-tema/3', component: EditTemaComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit-tema/4', component: EditTemaComponent, canActivate: [AuthGuard]},
  { path: '*', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
