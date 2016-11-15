import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { CascadeComponent } from './common/cascade/cascade.component';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        RegisterComponent,
        CascadeComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'register', component: RegisterComponent },
            { path: 'cascade', component: CascadeComponent },
            { path: '', redirectTo: 'register', pathMatch: 'full'}
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
