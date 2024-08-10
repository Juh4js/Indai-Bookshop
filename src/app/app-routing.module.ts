import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './pages/login/login.component';  // Importe o LoginComponent

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'login', component: LoginComponent },  // Adicione esta linha para a rota de login
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
