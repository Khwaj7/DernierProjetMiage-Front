import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MembreListComponent }  from './membre-list/membre-list.component';
import { MembreFormComponent } from './membre-form/membre-form.component';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    MembreListComponent,
    MembreFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}