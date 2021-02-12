import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FamilyNamePipe } from './family-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FamilyNamePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [FamilyNamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
