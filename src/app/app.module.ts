import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { AddClientesComponent } from './clientes/add-clientes/add-clientes.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './templates/header/header.component';
import { MenuComponent } from './templates/menu/menu.component';
import { ApiClientesService } from './services/api-clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    ListClientesComponent,
    AddClientesComponent,
    HeaderComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [ApiClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
