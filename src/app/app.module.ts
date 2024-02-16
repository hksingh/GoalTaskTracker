
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../environments/environment";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./ui/shared/shared.module";
import { provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports:[
        CommonModule,
        RouterOutlet,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,      
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        SharedModule
    ], 
    exports: [
        SharedModule
    ],
    providers: [
        provideHttpClient(),
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ], 
    bootstrap: [AppComponent]
})
export class AppModule{
    
}