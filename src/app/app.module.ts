import { MyService } from './my/my.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { OurComponent } from './our/our.component';
import { WhileComponent } from './our/while.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { DatabindingComponent } from './databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    OurComponent,
    WhileComponent,
    ViewEncapsulationComponent,
    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
