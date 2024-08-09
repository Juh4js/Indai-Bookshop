import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    ProdutoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
