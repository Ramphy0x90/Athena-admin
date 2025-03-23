import { Component, OnInit } from '@angular/core';
import { AthenaAuthService } from '../../services/athena-auth.service';
import { Client } from '../../types/dto/client';
import { take } from 'rxjs';
import { EntityTableComponent } from '../../components/entity-table/entity-table.component';
import { TableColumn, TableColumnType } from '../../types/table-column';

@Component({
    selector: 'app-clients',
    standalone: true,
    imports: [EntityTableComponent],
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {
    readonly tableColumns: TableColumn[] = [
        { type: TableColumnType.ID, dataField: "id", label: "ID" },
        { type: TableColumnType.TEXT, dataField: "name" },
        { type: TableColumnType.TEXT, dataField: "baseUrl", label: "URL" },
        { type: TableColumnType.TEXT, dataField: "postAuthUrl", label: "Post authentication URL" },
        { type: TableColumnType.FILE, dataField: "icon" },
        { type: TableColumnType.BIG_TEXT, dataField: "description" }
    ];

    clients: Client[] = [];

    constructor(private athenaAuthService: AthenaAuthService) { }

    ngOnInit(): void {
        this.getClients();
    }

    getClients(): void {
        this.athenaAuthService.getClients().pipe(take(1)).subscribe((clients) => {
            this.clients = clients;
        });
    }

    updateClient(client: Client): void {
        this.athenaAuthService.updateClient(client).pipe(take(1)).subscribe((client) => {
            this.clients = [...this.clients];
        });
    }
}
