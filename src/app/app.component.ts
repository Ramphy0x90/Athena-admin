import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ContainersModule } from './containers/containers.module';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ContainersModule, NavBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    readonly title = 'Athena-admin';
}
