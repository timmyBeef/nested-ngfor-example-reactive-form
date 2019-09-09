import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NestedNgforReactiveFormComponent } from './nested-ngfor-reactive-form/nested-ngfor-reactive-form.component';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    NestedNgforReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
