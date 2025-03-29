import { Component, Input } from '@angular/core';
import { NavBar } from '../../types/nav-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_BAR_ROUTES } from '../../app.routes';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [FormsModule, RouterLink, RouterLinkActive],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    navBarRoutes: readonly NavBar[] = NAV_BAR_ROUTES;

    @Input() appName?: string;
}
