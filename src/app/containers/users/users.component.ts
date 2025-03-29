import { Component, OnInit } from '@angular/core';
import { EntityTableComponent } from '../../components/entity-table/entity-table.component';
import { TableColumn, TableColumnType } from '../../types/table-column';
import { AthenaAuthService } from '../../services/athena-auth.service';
import { User } from '../../types/dto/user';
import { take } from 'rxjs';

@Component({
    selector: 'app-users',
    imports: [EntityTableComponent],
    templateUrl: './users.component.html',
    styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
    readonly tableColumns: TableColumn[] = [
        { type: TableColumnType.ID, dataField: "id", label: "ID" },
        { type: TableColumnType.TEXT, dataField: "name" },
        { type: TableColumnType.TEXT, dataField: "surname" },
        { type: TableColumnType.TEXT, dataField: "email" },
        { type: TableColumnType.TEXT, dataField: "userName" }
    ];

    users: User[] = [];

    constructor(private athenaAuthService: AthenaAuthService) { }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.athenaAuthService.getUsers().pipe(take(1)).subscribe((users) => {
            this.users = users;
        });
    }
}
