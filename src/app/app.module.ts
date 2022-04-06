import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './Intro-To-Angular/jared-component/jared-component';
import { MyCoolComponent } from './Intro-To-Angular/my-component/my-component';
import { BindingComponent } from './Intro-To-Angular/binding/binding.component';
// import { NealComp } from './Intro-To-Angular/Neal-Component/neal-component';
// import { TheSecondComponentComponent } from './Intro-To-Angular/the-second-component/the-second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyCoolComponent,
    BindingComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
