import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import{AppRoutingModule} from './app-routing.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FitnessComponent } from './fitness/fitness.component';
import { MainSectionComponent } from './fitness/main-section/main-section.component';
import { OurProgramComponent } from './fitness/our-program/our-program.component';
import { OurFormComponent } from './fitness/our-form/our-form.component';
import { TestimonialComponent } from './fitness/testimonial/testimonial.component';
import { FooterComponent } from './fitness/footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProgramComponent } from './fitness/program/program.component';



@NgModule({
  declarations: [
    AppComponent,
    FitnessComponent,
    MainSectionComponent,
    OurProgramComponent,
    OurFormComponent,
    TestimonialComponent,
    FooterComponent,
    HeaderComponent,
    ProgramComponent

    


  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule

    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

