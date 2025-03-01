import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { NavBar } from './types/nav-bar';
import { ClientsComponent } from './containers/clients/clients.component';
import { UsersComponent } from './containers/users/users.component';

export const enum ROUTES {
    HOME = "home",
    CLIENTS = "clients",
    USERS = "users"
}

export const NAV_BAR_ROUTES: readonly NavBar[] = [
    { label: "Home", route: ROUTES.HOME },
    { label: "Clients", route: ROUTES.CLIENTS },
    { label: "Users", route: ROUTES.USERS }
];

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: ROUTES.HOME, component: HomeComponent },
    { path: ROUTES.CLIENTS, component: ClientsComponent },
    { path: ROUTES.USERS, component: UsersComponent }
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
})