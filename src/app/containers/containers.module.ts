import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityTableComponent } from '../components/entity-table/entity-table.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { UsersComponent } from './users/users.component';



@NgModule({
    declarations: [HomeComponent, ClientsComponent, UsersComponent],
    imports: [
        CommonModule,
        EntityTableComponent
    ],
})
export class ContainersModule { }
