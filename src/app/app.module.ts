import { MapService } from './service/map.service';
import { DataService } from './service/data.service';
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
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import { CustomInputComponent } from './databinding/custom-input.component';
import { CustomOutputComponent } from './databinding/custom-output.component';
import { InterCompCommComponent } from './inter-comp-comm/inter-comp-comm.component';
import { ColorEmiiterComponent } from './inter-comp-comm/color-emiiter.component';
import { ColorReceiverComponent } from './inter-comp-comm/color-receiver.component';
import { MoreTemplatesComponent } from './more-templates/more-templates.component';
import { SubMoreComponent } from './more-templates/sub-more.component';
import { SubContentComponent } from './more-templates/sub-content.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifeCycleIndexComponent } from './lifecycle/life-cycle-index.component';
import { DirectivesComponent } from './directives/directives.component';
import { AttrDirComponent } from './directives/attr-dir.component';
import { SizerDirective } from './directives/sizer.directive';
import { ProjModOneComponent } from './proj-mod-one/proj-mod-one.component';
import { DropdownDirective } from './proj-mod-one/dropdown.directive';
import { StrDirComponent } from './directives/str-dir.component';
import { MyIfDirective } from './directives/my-if.directive';
import { ServiceComponent } from './service/service.component';
import { OneComponent } from './service/one.component';
import { TwoComponent } from './service/two.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { DataDrivenComponent } from './forms/data-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    OurComponent,
    WhileComponent,
    ViewEncapsulationComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    CustomInputComponent,
    CustomOutputComponent,
    InterCompCommComponent,
    ColorEmiiterComponent,
    ColorReceiverComponent,
    MoreTemplatesComponent,
    SubMoreComponent,
    SubContentComponent,
    LifecycleComponent,
    LifeCycleIndexComponent,
    DirectivesComponent,
    AttrDirComponent,
    SizerDirective,
    ProjModOneComponent,
    DropdownDirective,
    StrDirComponent,
    MyIfDirective,
    ServiceComponent,
    OneComponent,
    TwoComponent,
    FormsComponent,
    TemplateDrivenComponent,
    DataDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyService, DataService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
