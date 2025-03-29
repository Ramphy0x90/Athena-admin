import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, NavBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    readonly title = 'Athena-admin';
}
